import { ArrowRight, Check, Clock, Info, MapPin, Shirt, Utensils, Wine } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { Button, Photo, SectionHeading, useScrollReveal } from '../components/ui.jsx';
import { chefNote, diningNotes, diningVenues, images, menuHighlights } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

export default function DiningPage() {
  useScrollReveal();
  const { openContact } = useApp();

  return (
    <>
      <PageHero
        eyebrow="Restaurants & bars"
        title="Dining"
        intro="Three places to eat and drink, all within a short walk of your room. Breakfast is included with every stay, and the daily catch comes in on local boats."
        image={images.restaurant}
        imageAlt="Open-air beachfront dining at The Palm Table"
        facts={[
          { icon: Utensils, label: '3 restaurants & bars' },
          { icon: Clock, label: 'Breakfast 7 - 10:30 AM' },
          { icon: Wine, label: 'In-room dining until 11 PM' },
        ]}
      />

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Where to eat">Fresh flavours, served beside the sea.</SectionHeading>
          <div className="dining-list">
            {diningVenues.map((venue, index) => (
              <article className={`dining-venue ${index % 2 === 1 ? 'dining-venue--reverse' : ''}`} key={venue.id}>
                <div className="dining-venue-media">
                  <Photo src={venue.image} alt={venue.name} />
                </div>
                <div className="dining-venue-copy">
                  <span className="eyebrow"><i aria-hidden="true" />{venue.style}</span>
                  <h3>{venue.name}</h3>
                  <p>{venue.text}</p>
                  <ul className="dining-highlights">
                    {venue.highlights.map((item) => <li key={item}><Check size={13} />{item}</li>)}
                  </ul>
                  <div className="dining-meta">
                    <span><Clock size={14} />{venue.hours}</span>
                    <span><MapPin size={14} />{venue.location}</span>
                    <span><Shirt size={14} />{venue.dress}</span>
                  </div>
                  <Button variant="outline" onClick={() => openContact({ topic: 'dining' })}>Request a Table<ArrowRight size={15} /></Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="From the kitchen">A taste of the menu.</SectionHeading>
          <p className="section-lead">Dishes change with the catch and the garden, so treat this as a sample rather than a fixed list.</p>
          <div className="menu-grid">
            {menuHighlights.map((group) => (
              <article className="menu-card" key={group.id}>
                <h3>{group.course}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <figure className="chef-note">
            <blockquote>{chefNote.quote}</blockquote>
            <figcaption><strong>{chefNote.name}</strong><span>{chefNote.role}</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="section-space" style={{ paddingTop: 0 }}>
        <div className="container reveal">
          <div className="beach-notes-card">
            <div className="beach-notes-head">
              <span className="sustainability-icon"><Info size={24} strokeWidth={1.4} /></span>
              <div>
                <span className="eyebrow"><i aria-hidden="true" />Good to know</span>
                <h2>Dining details worth knowing before you arrive.</h2>
              </div>
            </div>
            <ul className="beach-notes">
              {diningNotes.map((note) => <li key={note}><Check size={14} />{note}</li>)}
            </ul>
            <div className="modal-action-row" style={{ justifyContent: 'flex-start' }}>
              <Button rounded onClick={() => openContact({ topic: 'dining' })}>Ask Our Dining Team<ArrowRight size={15} /></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
