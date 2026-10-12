import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BedDouble, BellRing, CheckCircle2, ChevronRight, Sparkles, Utensils, Waves } from 'lucide-react';
import { Button, Logo, inputClass } from './ui.jsx';
import { hotelInfo } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

const exploreLinks = [
  ['About the hotel', '/about'],
  ['Rooms & suites', '/rooms'],
  ['The beach', '/beach'],
  ['Amenities', '/amenities'],
  ['Gallery', '/gallery'],
  ['Dining', '/dining'],
  ['Guest reviews', '/reviews'],
  ['Location & arrival', '/location'],
  ['Good to know', '/faq'],
];

export default function Footer() {
  const { newsletter, setNewsletter, openContact, openEvent, openAccount, setModal } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Logo />
          <p>Your seaside sanctuary. Comfortable rooms, thoughtful service, and a warm welcome at Hotely Beach Resort.</p>
          <p>Check-in from {hotelInfo.checkIn}.<br />Check-out by {hotelInfo.checkOut}.<br />Our reception team is available 24 hours.</p>
        </div>

        <div className="footer-services">
          <h3>Contact our hotel</h3>
          <address>
            <Link to="/location"><ChevronRight /><span>North Male Atoll,<br />Maldives</span></Link>
            <button type="button" onClick={() => openContact({ topic: 'reservations' })}><BellRing /><span>Speak to reservations</span></button>
            <button type="button" onClick={() => openContact()}><Sparkles /><span>{hotelInfo.email}</span></button>
          </address>
          <div className="social-links" aria-label="Hotel quick links">
            <Link to="/rooms" aria-label="Browse hotel rooms"><BedDouble size={16} /></Link>
            <Link to="/dining" aria-label="Explore hotel dining"><Utensils size={15} /></Link>
            <Link to="/beach" aria-label="Explore the resort beach"><Waves size={16} /></Link>
            <Link to="/contact" aria-label="Contact the hotel"><Sparkles size={15} /></Link>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Offers &amp; hotel news</h3>
          {newsletter ? (
            <div className="newsletter-success" role="status">
              <CheckCircle2 size={25} strokeWidth={1.5} />
              <strong>Your hotel updates preference is saved.</strong>
              <p>{newsletter.email} is saved locally for this demo. No promotional emails are sent.</p>
              <button type="button" className="text-button" onClick={() => setNewsletter(null)}>Change email preference<ArrowRight size={13} /></button>
            </div>
          ) : (
            <form onSubmit={(event) => {
              event.preventDefault();
              const form = new FormData(event.currentTarget);
              const email = String(form.get('email') || '').trim();
              if (!email) return;

              setIsSubmitting(true);
              window.setTimeout(() => {
                setNewsletter({ email });
                setIsSubmitting(false);
              }, 600);
            }}>
              <label className="sr-only" htmlFor="newsletter-email">Email for hotel offers and news</label>
              <input id="newsletter-email" className={inputClass} name="email" type="email" autoComplete="email" placeholder="Your email address" required disabled={isSubmitting} />
              <Button variant="teal" type="submit" loading={isSubmitting} disabled={isSubmitting}>Keep Me Updated</Button>
              <label className="newsletter-consent"><input className="h-3.5 w-3.5 shrink-0 accent-blue-700" type="checkbox" required disabled={isSubmitting} /><span>I agree to receive hotel offers, dining news, and spa updates.</span></label>
            </form>
          )}
        </div>

        <div className="footer-places">
          <h3>Explore</h3>
          <ul>
            {exploreLinks.map(([label, to]) => (
              <li key={to}><Link to={to}><ChevronRight size={14} strokeWidth={1.5} />{label}</Link></li>
            ))}
            <li><button type="button" onClick={openEvent}><ChevronRight size={14} strokeWidth={1.5} />Weddings &amp; events</button></li>
            <li><button type="button" onClick={openAccount}><ChevronRight size={14} strokeWidth={1.5} />Saved rooms &amp; reservations</button></li>
          </ul>
        </div>
      </div>

      <p className="hotel-demo-notice container">Hotely Beach Resort is a fictional hotel created for this design demonstration. Room reservations, rates, offers, and guest reviews are illustrative, and nothing is sent to a real hotel.</p>

      <div className="footer-bottom">
        <div className="container">
          <p>Copyright &copy; 2026 <Link to="/">Hotely Beach Resort.</Link> All Rights Reserved.</p>
          <div>
            <button type="button" onClick={() => setModal({ type: 'privacy' })}>Privacy Policy</button>
            <span aria-hidden="true">|</span>
            <button type="button" onClick={() => setModal({ type: 'terms' })}>Terms &amp; Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
