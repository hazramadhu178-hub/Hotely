import { ArrowRight, BellRing, Check, Clock, Dumbbell, Sparkles, Wifi } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { Button, Photo, SectionHeading, useScrollReveal } from '../components/ui.jsx';
import { amenityGroups, facilities, images, serviceHours, wellnessTreatments } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

export default function AmenitiesPage() {
  useScrollReveal();
  const { openExperience, openContact } = useApp();

  return (
    <>
      <PageHero
        eyebrow="Facilities & services"
        title="Amenities"
        intro="The essentials are included, the practical details are handled, and our team is always close by. Here is everything you can use during your stay."
        image={images.reception}
        imageAlt="The welcoming reception area at Hotely Beach Resort"
        facts={[
          { icon: Wifi, label: 'Wi-Fi in every room' },
          { icon: BellRing, label: '24-hour reception' },
          { icon: Dumbbell, label: 'Fitness studio 6 AM - 10 PM' },
        ]}
      />

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="What is included">Everything you need, grouped simply.</SectionHeading>
          <div className="amenity-groups">
            {amenityGroups.map((group) => (
              <article className="amenity-group" key={group.id}>
                <h3>{group.title}</h3>
                <p className="amenity-group-note">{group.note}</p>
                <ul>
                  {group.items.map((item) => <li key={item}><Check size={13} />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="facilities-section section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Around the hotel">Places to find during your stay.</SectionHeading>
          <p className="section-lead">Tap any space below for opening hours, what to expect, and how to arrange a visit with our team.</p>
          <div className="facilities-grid">
            {facilities.map((item) => (
              <button className="destination-tile destination-tile--nearby" type="button" key={item.id} onClick={() => openExperience(item)} aria-label={`Discover ${item.name}`}>
                <span className="destination-image"><Photo src={item.image} alt={item.name} /></span>
                <h3>{item.name}</h3>
                <span className="destination-count">{item.subtitle}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Opening hours">When everything is open.</SectionHeading>
          <p className="section-lead">A quick reference for the week. Hours occasionally shift with the season, and reception will always know the current times.</p>
          <div className="hours-table">
            <div className="hours-head" aria-hidden="true">
              <span>Service</span><span>Hours</span><span>Where</span>
            </div>
            {serviceHours.map((row) => (
              <div className="hours-row" key={row.id}>
                <span className="hours-service">{row.service}</span>
                <span className="hours-time"><Clock size={13} />{row.hours}</span>
                <span className="hours-where">{row.location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Serenity Spa">Treatments in the garden pavilions.</SectionHeading>
          <p className="section-lead">Charged separately from your room and booked in advance. Tell the team about any health considerations when you enquire.</p>
          <div className="treatment-grid">
            {wellnessTreatments.map((treatment) => (
              <article className="treatment-card" key={treatment.id}>
                <h3>{treatment.name}</h3>
                <span className="treatment-duration">{treatment.duration}</span>
                <p>{treatment.text}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Button variant="outline" rounded onClick={() => openContact({ topic: 'spa' })}>Request a Spa Appointment<ArrowRight size={15} /></Button>
          </div>
        </div>
      </section>

      <section className="section-space" style={{ paddingTop: 0 }}>
        <div className="container reveal">
          <div className="sustainability-card">
            <div className="sustainability-icon"><Sparkles size={26} strokeWidth={1.4} /></div>
            <div>
              <span className="eyebrow"><i aria-hidden="true" />Special requests</span>
              <h2>Tell us what would make your stay easier.</h2>
              <p>Cots, highchairs, connecting rooms, step-free routes, dietary needs, or a quiet table for an anniversary. The more we know before you arrive, the more we can have ready for you.</p>
              <Button rounded onClick={() => openContact({ topic: 'guest-services' })}>Make a Request<ArrowRight size={15} /></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
