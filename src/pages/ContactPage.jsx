import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BellRing, CalendarHeart, CheckCircle2, Clock, Mail, MapPin, Phone, ShieldCheck, Utensils } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { Button, SectionHeading, inputClass, useScrollReveal } from '../components/ui.jsx';
import { contactDepartments, contactTopics, dateAfter, hotelContact, hotelInfo, images } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

const contactCards = [
  { id: 'reservations', icon: BellRing, title: 'Reservations', text: 'Room availability, rates, offers, and group bookings.', action: 'Ask about a room', topic: 'reservations' },
  { id: 'dining', icon: Utensils, title: 'Dining & spa', text: 'Restaurant tables, private dinners, and spa appointments.', action: 'Request a booking', topic: 'dining' },
  { id: 'arrival', icon: MapPin, title: 'Arrival & transfers', text: 'Flight details, speedboat timings, and arrival assistance.', action: 'Plan your arrival', topic: 'arrival' },
  { id: 'events', icon: CalendarHeart, title: 'Weddings & events', text: 'Celebrations, private hire, and milestone occasions.', action: 'Start an enquiry', topic: 'events' },
];

export default function ContactPage() {
  useScrollReveal();
  const { openContact, openEvent } = useApp();
  const [result, setResult] = useState(null);
  const [topic, setTopic] = useState('reservations');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const needsDate = ['dining', 'spa', 'arrival'].includes(topic);

  return (
    <>
      <PageHero
        eyebrow="We are here to help"
        title="Contact"
        intro="Ask about a room, plan an arrival, book a table, or tell us about a special occasion. Our reception team answers around the clock."
        image={images.terrace}
        imageAlt="The waterfront terrace at Hotely Beach Resort"
        facts={[
          { icon: Clock, label: 'Reception open 24 hours' },
          { icon: Mail, label: hotelInfo.email },
          { icon: Phone, label: hotelContact.phone },
        ]}
      />

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="How can we help?">Choose the team that fits your question.</SectionHeading>
          <div className="contact-cards">
            {contactCards.map(({ icon: Icon, ...card }) => (
              <article className="contact-card" key={card.id}>
                <span className="contact-card-icon"><Icon size={22} strokeWidth={1.4} /></span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button
                  type="button"
                  className="text-button"
                  onClick={() => card.topic === 'events' ? openEvent() : openContact({ topic: card.topic })}
                >
                  {card.action}<ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" style={{ paddingTop: 0 }}>
        <div className="container reveal">
          <div className="contact-layout">
            <div className="contact-form-panel">
              <span className="eyebrow"><i aria-hidden="true" />Send us a message</span>
              <h2>Tell us about your stay.</h2>

              {result ? (
                <div className="contact-success" role="status">
                  <span className="success-icon"><CheckCircle2 size={30} strokeWidth={1.5} /></span>
                  <h3>{result.success ? 'Your enquiry has been sent.' : 'Your enquiry could not be sent.'}</h3>
                  <p>{result.message}</p>
                  <p className="form-note">Our team will review your request and follow up with the next available update.</p>
                  <Button variant="outline" rounded onClick={() => setResult(null)}>Write Another Message</Button>
                </div>
              ) : (
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

                    try {
                      localStorage.setItem('hotely-hotel-enquiry', JSON.stringify({ ...data, savedAt: new Date().toISOString() }));
                    } catch {
                      // Keep the local draft if storage is available; the backend request is still the primary send path.
                    }

                    setTopic('reservations');
                    setResult({ success: true, message: payload.message || 'Thanks. Your enquiry has been received.' });
                  } catch (error) {
                    setResult({ success: false, message: error.message || 'Please try again in a moment.' });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}>
                  <div className="form-grid">
                    <label className="form-label">Full name<input className={inputClass} name="name" autoComplete="name" required minLength={2} maxLength={80} pattern=".*\S.*" placeholder="Your full name" /></label>
                    <label className="form-label">Email address<input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={120} placeholder="you@example.com" /></label>
                  </div>
                  <div className="form-grid">
                    <label className="form-label">Phone number<input className={inputClass} name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={20} placeholder="+960 123 4567" /></label>
                    <label className="form-label">
                      How can we help?
                      <select className={inputClass} name="topic" value={topic} onChange={(event) => setTopic(event.target.value)}>
                        {contactTopics.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
                      </select>
                    </label>
                  </div>
                  {needsDate && (
                    <div className="form-grid">
                      <label className="form-label">Preferred date<input className={inputClass} name="preferredDate" type="date" min={dateAfter(0)} required /></label>
                      <label className="form-label">Number of guests<input className={inputClass} name="guests" type="number" defaultValue={2} min={1} max={20} required /></label>
                    </div>
                  )}
                  <label className="form-label">Your message<textarea className={inputClass} name="message" rows={5} required minLength={10} maxLength={2000} placeholder="Tell us about your dates, room preferences, dietary needs, or any other requests." /></label>
                  <Button type="submit" variant="teal" className="form-submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Enquiry'}<ArrowRight size={16} /></Button>
                  <p className="form-note"><ShieldCheck size={14} />We will send this enquiry to the hotel team and confirm the next step.</p>
                </form>
              )}
            </div>

            <aside className="contact-aside">
              <div className="location-card">
                <span className="eyebrow"><i aria-hidden="true" />Hotel details</span>
                <h3>{hotelContact.addressLine1}</h3>
                <p className="location-address">{hotelContact.addressLine2}</p>
                <div className="location-rows">
                  <span><Phone size={15} />{hotelContact.phone}</span>
                  <span><Mail size={15} />{hotelInfo.email}</span>
                  <span><Clock size={15} />Check-in {hotelInfo.checkIn} / Check-out {hotelInfo.checkOut}</span>
                </div>
                <div className="modal-action-row">
                  <Button variant="teal" href={hotelContact.mapsUrl} target="_blank" rel="noreferrer">Open in Maps<ArrowRight size={15} /></Button>
                </div>
              </div>
              <div className="contact-note-card">
                <h4>Planning your arrival?</h4>
                <p>Share your flight number and arrival time at least 48 hours ahead so our team can coordinate your transfer.</p>
                <Link to="/location">See location &amp; arrival<ArrowRight size={14} /></Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Who you will hear from">Our departments, and when they reply.</SectionHeading>
          <p className="section-lead">Reception is staffed around the clock. Specialist teams work island hours, so a reply may arrive the next morning.</p>
          <div className="department-grid">
            {contactDepartments.map((dept) => (
              <article className="department-card" key={dept.id}>
                <h3>{dept.name}</h3>
                <p>{dept.detail}</p>
                <span className="department-response"><Clock size={13} />{dept.response}</span>
              </article>
            ))}
          </div>
          <p className="section-note">Response times are illustrative. This demonstration does not send or receive messages.</p>
        </div>
      </section>
    </>
  );
}
