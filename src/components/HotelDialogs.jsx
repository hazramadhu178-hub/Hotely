import { useState } from 'react';
import { ArrowLeft, ArrowRight, BedDouble, Check, CheckCircle2, Clock, Download, Heart, MapPin, ShieldCheck, UsersRound, Utensils, Waves, Wifi } from 'lucide-react';
import { Button, Photo, handleTabKeys, inputClass } from './ui.jsx';
import { contactTopics, dateAfter, hotelInfo, money, nightsBetween, rooms, shortDate } from '../hotelData.js';

function saveDraft(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ ...data, savedAt: new Date().toISOString() }));
    return true;
  } catch {
    return false;
  }
}

function Success({ title, children, buttonText = 'Back to the Hotel', onClose }) {
  return (
    <div className="success-state">
      <span className="success-icon"><CheckCircle2 size={34} strokeWidth={1.5} /></span>
      <h3>{title}</h3>
      <div>{children}</div>
      <Button rounded onClick={onClose}>{buttonText}<ArrowRight size={16} /></Button>
    </div>
  );
}

export function RoomContent({ room, region, saved, onSave, onReserve, onClose }) {
  const [step, setStep] = useState('details');
  const [stay, setStay] = useState(() => {
    const checkIn = dateAfter(7);
    return { checkIn, checkOut: dateAfter(3, checkIn), guests: Math.min(2, room.guests) };
  });
  const [reservation, setReservation] = useState(null);
  const [error, setError] = useState('');
  const nights = stay.checkIn && stay.checkOut ? nightsBetween(stay.checkIn, stay.checkOut) : 1;
  const subtotal = room.price * nights;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  const changeDate = (field, value) => setStay((previous) => ({
    ...previous,
    [field]: value,
    ...(field === 'checkIn' && value && previous.checkOut <= value ? { checkOut: dateAfter(1, value) } : {}),
  }));

  const downloadConfirmation = () => {
    const text = `${hotelInfo.name.toUpperCase()} - DEMO ROOM RESERVATION\n\nReference: ${reservation.id}\nGuest: ${reservation.guestName}\nRoom: ${room.name}\nRoom category: ${room.category}\nHotel: ${hotelInfo.name}\nLocation: ${hotelInfo.location}\nCheck-in: ${stay.checkIn}, from ${hotelInfo.checkIn}\nCheck-out: ${stay.checkOut}, by ${hotelInfo.checkOut}\nGuests: ${stay.guests}\nNights: ${nights}\nBreakfast: Included\nRoom subtotal: ${money(subtotal, region)}\nService charge (10%): ${money(serviceFee, region)}\nTotal: ${money(total, region)}\n\nThis is a front-end hotel demonstration. No real room has been reserved and no payment has been made.`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `hotely-room-${reservation.id}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  if (step === 'confirmed') return (
    <div className="reservation-confirmation">
      <Success title="Your demo stay is saved." onClose={onClose}>
        <p>Your demo <strong>{room.name}</strong> reservation at {hotelInfo.name} is saved in this browser. You can review it under saved rooms and reservations.</p>
        <div className="confirmation-reference"><span>Demo reservation reference</span><strong>{reservation.id}</strong></div>
        <p>{shortDate(stay.checkIn)} - {shortDate(stay.checkOut)}<br />{stay.guests} {stay.guests === 1 ? 'guest' : 'guests'} / {nights} {nights === 1 ? 'night' : 'nights'}</p>
        <p className="form-note">No real room has been reserved. No payment was collected.</p>
      </Success>
      <button className="text-button download-button" type="button" onClick={downloadConfirmation}><Download size={16} />Download room confirmation</button>
    </div>
  );

  if (step === 'reserve') return (
    <form className="modal-form" onSubmit={async (event) => {
      event.preventDefault();
      const fields = new FormData(event.currentTarget);
      const record = {
        id: `HT-${Date.now().toString(36).slice(-6).toUpperCase()}`,
        roomId: room.id, roomName: room.name, category: room.category, image: room.image,
        ...stay, total, guestName: fields.get('name').trim(), email: fields.get('email').trim(), status: 'confirmed',
      };

      try {
        const response = await fetch('/api/reservations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: record.guestName,
            email: record.email,
            phone: fields.get('phone')?.toString().trim() || 'Not provided',
            room: room.name,
            checkIn: stay.checkIn,
            checkOut: stay.checkOut,
            adults: stay.guests,
            children: 0,
            requests: fields.get('requests')?.toString().trim() || 'None',
          }),
        });

        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(payload.message || 'Unable to send the reservation request.');
        }

        onReserve(record);
        setReservation(record);
        setStep('confirmed');
      } catch (error) {
        setError(error.message || 'Something went wrong while sending your reservation request.');
      }
    }}>
      <button type="button" className="text-button" onClick={() => setStep('details')}><ArrowLeft size={15} />Back to room details</button>
      <div className="reservation-summary">
        <Photo src={room.image} alt={room.name} />
        <div><h3>{room.name}</h3><p>{shortDate(stay.checkIn)} - {shortDate(stay.checkOut)}</p><p>{stay.guests} {stay.guests === 1 ? 'guest' : 'guests'} / Breakfast included</p></div>
      </div>
      <div className="form-grid">
        <label className="form-label">Lead guest's full name<input className={inputClass} name="name" autoComplete="name" required minLength={2} maxLength={80} pattern=".*\S.*" placeholder="Your full name" /></label>
        <label className="form-label">Email address<input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={120} placeholder="you@example.com" /></label>
      </div>
      <label className="form-label">Phone number<input className={inputClass} name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={20} placeholder="+960 123 4567" /></label>
      <label className="form-label">Special requests<textarea className={inputClass} name="requests" rows={3} maxLength={1000} placeholder="Late arrival, cot, room location, or any special arrangement" /></label>
      <div className="price-total"><span>Total for {nights} {nights === 1 ? 'night' : 'nights'}</span><strong>{money(total, region)}</strong></div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <label className="checkbox-label"><input className="h-4 w-4 accent-blue-700" type="checkbox" required /><span>I understand this reservation request will be sent to the hotel team for handling.</span></label>
      <Button className="form-submit" type="submit" rounded>Confirm Reservation Request<Check size={16} /></Button>
      <p className="form-note">No payment details are required to send the reservation request.</p>
    </form>
  );

  return (
    <div className="hotel-detail">
      <div className="detail-image-wrap">
        <Photo className="detail-image" src={room.image} alt={`${room.name} at ${hotelInfo.name}`} eager />
        <button type="button" className={`detail-save ${saved ? 'detail-save--active' : ''}`} onClick={() => onSave(room.id)} aria-pressed={saved}><Heart size={17} fill={saved ? 'currentColor' : 'none'} />{saved ? 'Room Saved' : 'Save Room'}</button>
      </div>
      <div className="detail-location"><span><MapPin size={15} />{room.view}</span><span>{room.size} m<sup>2</sup> / {room.beds}</span></div>
      <p className="detail-description">{room.description}</p>
      <ul className="room-features">{room.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
      <div className="detail-amenities"><span><Wifi />Free Wi-Fi</span><span><Waves />Pool access</span><span><Utensils />Breakfast</span><span><UsersRound />Up to {room.guests} guests</span></div>
      <form className="modal-form stay-form" onSubmit={(event) => {
        event.preventDefault();
        if (stay.checkOut <= stay.checkIn) { setError('Your check-out date must be after your check-in date.'); return; }
        setError('');
        setStep('reserve');
      }}>
        <div className="form-grid form-grid--three">
          <label className="form-label">Check-in date<input className={inputClass} type="date" value={stay.checkIn} min={dateAfter(0)} onChange={(event) => changeDate('checkIn', event.target.value)} required /></label>
          <label className="form-label">Check-out date<input className={inputClass} type="date" value={stay.checkOut} min={dateAfter(1, stay.checkIn || undefined)} onChange={(event) => changeDate('checkOut', event.target.value)} required /></label>
          <label className="form-label">Guests in this room<select className={inputClass} value={stay.guests} onChange={(event) => setStay({ ...stay, guests: Number(event.target.value) })}>{Array.from({ length: room.guests }, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} {count === 1 ? 'guest' : 'guests'}</option>)}</select></label>
        </div>
        <p className="room-arrival-times"><Clock size={14} />Check-in from {hotelInfo.checkIn} / Check-out by {hotelInfo.checkOut}</p>
        <div className="price-breakdown">
          <div><span>{money(room.price, region)} x {nights} {nights === 1 ? 'night' : 'nights'}</span><span>{money(subtotal, region)}</span></div>
          <div><span>Breakfast for all room guests</span><span>Included</span></div>
          <div><span>Service charge (10%)</span><span>{money(serviceFee, region)}</span></div>
          <div className="price-total"><span>Total for your room</span><strong>{money(total, region)}</strong></div>
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <Button type="submit" className="form-submit" rounded>Reserve This Room<ArrowRight size={16} /></Button>
        <p className="form-note"><ShieldCheck size={14} />Illustrative rates, not live availability. No payment is taken.</p>
      </form>
    </div>
  );
}

export function ContactContent({ context, onClose }) {
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const member = context?.member;
  const experience = context?.experience;
  const initialTopic = member?.topic || experience?.topic || context?.topic || 'reservations';
  const [topic, setTopic] = useState(initialTopic);
  const needsDate = ['dining', 'spa', 'arrival'].includes(topic);

  if (result) return (
    <Success title={result.success ? 'Your enquiry has been sent.' : 'Your enquiry could not be sent.'} onClose={onClose}>
      <p>{result.message}</p>
      <p className="form-note">Our team will review this request and follow up with the next available update.</p>
    </Success>
  );

  return (
    <form className="modal-form" onSubmit={async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
      setIsSubmitting(true);

      try {
        const response = await fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            subject: data.topic,
            phone: data.phone || 'Not provided',
            message: data.message,
          }),
        });

        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(payload.message || 'Unable to send your enquiry right now.');
        }

        saveDraft('hotely-hotel-enquiry', { ...data, regarding: experience?.name || member?.name || 'Hotel guest services', savedAt: new Date().toISOString() });
        setResult({ success: true, message: payload.message || 'Thanks. Your enquiry has been received.' });
      } catch (error) {
        setResult({ success: false, message: error.message || 'Please try again in a moment.' });
      } finally {
        setIsSubmitting(false);
      }
    }}>
      <p className="modal-intro">{experience ? `Ask our team about ${experience.name}. Share your preferred details below; any arrangements would need to be confirmed by the hotel.` : context?.offer ? `Ask us about the ${context.offer.title} package. Our reservations team would confirm rates, inclusions, and availability.` : member ? `${member.name.split(' ')[0]} and the ${member.department.toLowerCase()} team can help with the details of your stay. Tell us what you have in mind.` : 'Ask about a room, arrange a special request, or plan the details of your arrival. Our hotel team is here to help.'}</p>
      <div className="form-grid">
        <label className="form-label">Full name<input className={inputClass} name="name" autoComplete="name" required minLength={2} maxLength={80} pattern=".*\S.*" placeholder="Your full name" /></label>
        <label className="form-label">Email address<input className={inputClass} name="email" autoComplete="email" type="email" required maxLength={120} placeholder="you@example.com" /></label>
      </div>
      <div className="form-grid">
        <label className="form-label">Phone number<input className={inputClass} name="phone" autoComplete="tel" type="tel" required minLength={7} maxLength={20} placeholder="+960 123 4567" /></label>
        <label className="form-label">How can we help?<select className={inputClass} name="topic" value={topic} onChange={(event) => setTopic(event.target.value)}>{contactTopics.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
      </div>
      {needsDate && <div className="form-grid">
        <label className="form-label">Preferred date<input className={inputClass} name="preferredDate" type="date" min={dateAfter(0)} required /></label>
        <label className="form-label">Number of guests<input className={inputClass} name="guests" type="number" defaultValue={2} min={1} max={20} required /></label>
      </div>}
      <label className="form-label">Your request<textarea className={inputClass} name="message" rows={4} required minLength={10} maxLength={2000} placeholder={topic === 'arrival' ? 'Please include your flight number, arrival time, and any transfer requirements.' : 'Tell us about your preferred time, room requirements, dietary needs, or other requests.'} /></label>
      <Button type="submit" className="form-submit" variant="blue" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Enquiry'}<ArrowRight size={16} /></Button>
      <p className="form-note">Your request is sent to the hotel team and will be handled with the next available response.</p>
    </form>
  );
}

export function EventContent({ onClose }) {
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (result) return (
    <Success title={result.success ? 'Your event enquiry has been sent.' : 'Your event enquiry could not be sent.'} onClose={onClose}>
      <p>{result.message}</p>
      <p className="form-note">The hotel team will review your occasion details and respond with availability and next steps.</p>
    </Success>
  );

  return (
    <form className="modal-form" onSubmit={async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
      setIsSubmitting(true);

      try {
        const response = await fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            subject: `Event enquiry: ${data.type}`,
            phone: data.phone || 'Not provided',
            message: `${data.description}\n\nOccasion type: ${data.type}\nPreferred date: ${data.date}\nEstimated guest count: ${data.guests}`,
          }),
        });

        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(payload.message || 'Unable to send your event enquiry at the moment.');
        }

        saveDraft('hotely-hotel-event', { ...data, savedAt: new Date().toISOString() });
        setResult({ success: true, message: payload.message || 'Thanks. Your event enquiry has been received.' });
      } catch (error) {
        setResult({ success: false, message: error.message || 'Please try again in a moment.' });
      } finally {
        setIsSubmitting(false);
      }
    }}>
      <p className="modal-intro">A beachfront wedding, a private dinner, or a gathering with your team. Tell us about your occasion and the hotel setting you have in mind.</p>
      <div className="form-grid">
        <label className="form-label">Full name<input className={inputClass} name="name" autoComplete="name" required minLength={2} pattern=".*\S.*" placeholder="Your full name" /></label>
        <label className="form-label">Email address<input className={inputClass} name="email" autoComplete="email" type="email" required placeholder="you@example.com" /></label>
      </div>
      <div className="form-grid">
        <label className="form-label">Phone number<input className={inputClass} name="phone" autoComplete="tel" type="tel" required minLength={7} maxLength={20} placeholder="+960 123 4567" /></label>
        <label className="form-label">Type of occasion<select className={inputClass} name="type"><option>Wedding celebration</option><option>Anniversary or birthday</option><option>Private dinner</option><option>Meeting or team retreat</option><option>Family gathering</option></select></label>
      </div>
      <div className="form-grid">
        <label className="form-label">Preferred date<input className={inputClass} name="date" type="date" min={dateAfter(1)} required /></label>
        <label className="form-label">Estimated guest count<input className={inputClass} name="guests" type="number" min={2} max={120} required placeholder="For example, 30" /></label>
      </div>
      <label className="form-label">Tell us about your plans<textarea className={inputClass} name="description" rows={4} placeholder="Your preferred setting, dining ideas, room requirements, and any special details." required minLength={20} maxLength={2000} /></label>
      <Button type="submit" className="form-submit" rounded disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Event Enquiry'}<ArrowRight size={16} /></Button>
      <p className="form-note">The hotel team will review your occasion details and share availability and next steps.</p>
    </form>
  );
}

export function ExperienceContent({ experience, onEnquire }) {
  return (
    <div className="experience-detail">
      <Photo className="detail-image" src={experience.image} alt={experience.name} eager />
      <span className="eyebrow">{experience.eyebrow}</span>
      <h3>{experience.name}</h3>
      <p>{experience.description}</p>
      <div className="experience-info"><span><MapPin size={16} />{experience.location}</span><span><Clock size={16} />{experience.hours}</span></div>
      <ul className="room-features">{experience.details.map((detail) => <li key={detail}><Check size={14} />{detail}</li>)}</ul>
      <Button rounded onClick={() => onEnquire(experience)}>{experience.actionLabel}<ArrowRight size={16} /></Button>
      <p className="form-note">Sample hotel facilities and opening hours for this demonstration.</p>
    </div>
  );
}

export function TeamContent({ member, onContact }) {
  return (
    <div className="host-detail">
      <Photo className="host-detail-photo" src={member.image} alt={member.name} eager />
      <span className="eyebrow">The Hotely team</span>
      <h3>{member.name}</h3>
      <p className="host-detail-location">{member.role} / {member.department}</p>
      <p>{member.bio}</p>
      <div className="host-specialty"><CheckCircle2 size={18} /><div><strong>{member.specialty}</strong><span>Personal service throughout your hotel stay.</span></div></div>
      <div className="modal-action-row"><Button rounded onClick={() => onContact(member)}>Contact {member.name.split(' ')[0]}'s Team<ArrowRight size={16} /></Button></div>
    </div>
  );
}

export function ArticleContent({ article, onAction }) {
  return (
    <article className="article-detail">
      <Photo className="article-cover" src={article.image} alt={article.title} eager />
      <div className="article-meta"><span>{article.category}</span><span>{article.readTime} read</span><span>By the Hotely hotel team</span></div>
      <h3>{article.title}</h3>
      <p className="article-lead">{article.intro}</p>
      {article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      <Button rounded onClick={() => onAction(article)}>{article.actionLabel}<ArrowRight size={16} /></Button>
    </article>
  );
}

export function VideoContent({ film }) {
  const [error, setError] = useState(false);
  return (
    <div className="video-detail">
      <video controls autoPlay playsInline preload="metadata" poster={film.image} aria-label={film.title} onError={() => setError(true)}><source src={film.video} type="video/mp4" />Your browser does not support video playback.</video>
      <span className="eyebrow">The resort experience</span>
      <h3>{film.title}</h3>
      <p>{film.location}</p>
      <p className="form-note">Illustrative resort footage for this demo hotel.</p>
      {error && <p className="form-error">The hotel film could not load. <a href={film.video} target="_blank" rel="noreferrer">Open the video directly</a> or try again later.</p>}
    </div>
  );
}

export function AccountContent({ favorites, reservations, onRoom, onCancelReservation, onBrowseRooms }) {
  const [tab, setTab] = useState('saved');
  const [cancelId, setCancelId] = useState(null);
  const savedRooms = rooms.filter((room) => favorites.includes(room.id));

  return (
    <div className="account-content">
      <p className="modal-intro">The rooms you save and the demo reservations you make are kept in this browser, so you can pick up where you left off.</p>
      <div className="account-tabs" role="tablist" aria-label="Your hotel guest account" onKeyDown={handleTabKeys}>
        <button type="button" role="tab" id="account-saved-tab" aria-controls="account-panel" tabIndex={tab === 'saved' ? 0 : -1} aria-selected={tab === 'saved'} className={tab === 'saved' ? 'active' : ''} onClick={() => setTab('saved')}>Saved rooms ({savedRooms.length})</button>
        <button type="button" role="tab" id="account-reservations-tab" aria-controls="account-panel" tabIndex={tab === 'reservations' ? 0 : -1} aria-selected={tab === 'reservations'} className={tab === 'reservations' ? 'active' : ''} onClick={() => setTab('reservations')}>Reservations ({reservations.length})</button>
      </div>
      <div role="tabpanel" id="account-panel" aria-labelledby={`account-${tab}-tab`} className="account-panel" tabIndex={0}>
        {tab === 'saved' && (savedRooms.length ? savedRooms.map((room) => (
          <button type="button" className="account-hotel" key={room.id} onClick={() => onRoom(room)}><Photo src={room.image} alt={room.name} /><span><strong>{room.name}</strong><small>{room.category} / Up to {room.guests} guests</small></span><ArrowRight size={17} /></button>
        )) : <div className="empty-account"><Heart size={29} strokeWidth={1.3} /><h4>Find your favorite room.</h4><p>Tap the heart on any room or suite to save it here.</p><Button variant="outline" rounded onClick={onBrowseRooms}>Browse Rooms<ArrowRight size={15} /></Button></div>)}
        {tab === 'reservations' && (reservations.length ? reservations.map((reservation) => (
          <div className="account-trip" key={reservation.id}>
            <div className="trip-heading"><h4>{reservation.roomName}</h4><span className={`trip-status ${reservation.status === 'cancelled' ? 'trip-status--cancelled' : ''}`}>{reservation.status === 'cancelled' ? 'Demo cancelled' : 'Demo confirmed'}</span></div>
            <p>{shortDate(reservation.checkIn)} - {shortDate(reservation.checkOut)} / {reservation.guests} {Number(reservation.guests) === 1 ? 'guest' : 'guests'}</p>
            <small>{reservation.id}</small>
            {reservation.status !== 'cancelled' && (cancelId === reservation.id ? <div className="cancel-confirm"><span>Cancel this demo room reservation?</span><button type="button" onClick={() => { onCancelReservation(reservation.id); setCancelId(null); }}>Yes, cancel</button><button type="button" onClick={() => setCancelId(null)}>Keep my stay</button></div> : <button className="text-button cancel-trip" type="button" onClick={() => setCancelId(reservation.id)}>Cancel demo reservation</button>)}
          </div>
        )) : <div className="empty-account"><BedDouble size={29} strokeWidth={1.3} /><h4>Your next stay starts here.</h4><p>Your demo room reservations will appear here.</p><Button variant="outline" rounded onClick={onBrowseRooms}>Browse Rooms<ArrowRight size={15} /></Button></div>)}
      </div>
      <div className="account-footer"><span>Saved on this device only. Clearing your browser data removes these items.</span></div>
    </div>
  );
}

export function OfferContent({ offer, onEnquire }) {
  return (
    <div className="offer-detail">
      <Photo className="detail-image" src={offer.image} alt={offer.title} eager />
      <span className="offer-badge offer-badge--detail">{offer.badge}</span>
      <span className="eyebrow">{offer.stay}</span>
      <h3>{offer.title}</h3>
      <p>{offer.summary}</p>
      <div className="offer-detail-includes">
        <h4>What is included</h4>
        <ul className="room-features">{offer.includes.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
      </div>
      <div className="offer-detail-foot">
        <span className="offer-price"><em>From</em><strong>{offer.from}</strong><small>per night</small></span>
        <div className="modal-action-row">
          <Button rounded onClick={() => onEnquire({ topic: offer.topic, offer })}>Request This Offer<ArrowRight size={15} /></Button>
        </div>
      </div>
      <p className="form-note">{offer.note}</p>
    </div>
  );
}

export function LegalContent({ type }) {
  return (
    <div className="legal-content">
      {type === 'privacy' ? <>
        <p className="article-lead">Your stay. Your information.</p>
        <h3>What this hotel demo stores</h3>
        <p>Your saved rooms, demo reservations, currency preference, and newsletter preference are stored in your browser. Guest enquiries and event requests can also be saved locally. This demo has no guest accounts, logins, or passwords.</p>
        <h3>No live hotel services</h3>
        <p>This demonstration does not create real hotel accounts, send emails, process payments, reserve rooms, or arrange restaurant, spa, event, or transfer bookings. Clear this site's browser data to remove your locally saved information.</p>
        <h3>Photography and fonts</h3>
        <p>Illustrative hotel photography and video may load from Pexels and Unsplash. Fonts load from Google Fonts. These providers receive normal web request information when their assets load.</p>
      </> : <>
        <p className="article-lead">A hotel website demonstration, not a live reservation service.</p>
        <h3>About Hotely Beach Resort</h3>
        <p>Hotely Beach Resort is a fictional hotel used for this interactive design. Room descriptions, location, prices, facilities, staff profiles, opening hours, guest reviews, and contact details are sample content. Photography is illustrative and does not represent one real property.</p>
        <h3>Rooms and reservations</h3>
        <p>The room search filters sample accommodation by category and guest capacity. Dates are used to calculate the example length of stay and total; no live inventory is checked. A demo reservation only creates a record in this browser and never reserves an actual room.</p>
        <h3>Rates and guest services</h3>
        <p>Displayed sample rates include breakfast and add a 10% service charge in the room summary. GBP and AUD prices use fixed illustrative exchange rates. Dining, spa, transfer, and event forms save local enquiries only. No payment is taken and no request is sent.</p>
      </>}
    </div>
  );
}