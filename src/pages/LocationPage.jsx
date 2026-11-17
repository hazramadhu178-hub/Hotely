import { ArrowRight, Car, Check, Clock, Mail, MapPin, Phone, Plane, Sparkles, UsersRound } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { Button, Photo, SectionHeading, useScrollReveal } from '../components/ui.jsx';
import { climate, gettingHere, hotelContact, hotelInfo, images, packingList } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

const stepIcons = { plane: Plane, greeting: UsersRound, car: Car };

const nearby = [
  { id: 'kanchenjunga', name: 'Kanchenjunga viewpoints', distance: 'Around Pelling', text: 'On clear mornings, nearby viewpoints look toward the high Himalayan peaks. Ask our team about weather and transport.' },
  { id: 'pemayangtse', name: 'Pemayangtse Monastery', distance: 'A short drive', text: 'A historic monastery above Pelling. Please follow local guidance on respectful dress and photography during your visit.' },
  { id: 'lake', name: 'Khecheopalri Lake', distance: 'By road, with a local guide', text: 'A forest-ringed sacred lake in the hills. Our concierge can help arrange a visit and share local etiquette.' },
  { id: 'village', name: 'Sikkim villages', distance: 'Nearby hillside communities', text: 'Discover local crafts, food, and everyday life with a thoughtful visit arranged through a local guide.' },
];

export default function LocationPage() {
  useScrollReveal();
  const { openContact } = useApp();

  return (
    <>
      <PageHero
        eyebrow="Finding us"
        title="Location"
        intro="Set in Pelling, Sikkim, with views toward Kanchenjunga. Here is how to reach the lodge and what you can explore nearby."
        image={images.exterior}
        imageAlt="A mountain lodge in the Himalayan foothills"
        facts={[
          { icon: MapPin, label: 'Pelling, Sikkim' },
          { icon: Car, label: 'Road transfer from IXB' },
          { icon: Clock, label: 'Reception open 24 hours' },
        ]}
      />

      <section className="location-section section-space">
        <div className="container reveal">
          <div className="location-grid">
            <div className="location-card">
              <span className="eyebrow"><i aria-hidden="true" />Find us</span>
              <h3>{hotelContact.addressLine1}</h3>
              <p className="location-address">{hotelContact.addressLine2}</p>
              <div className="location-rows">
                <span><Phone size={15} />{hotelContact.phone}</span>
                <span><Mail size={15} />{hotelInfo.email}</span>
                <span><Clock size={15} />Reception open 24 hours</span>
                <span><Sparkles size={15} />Check-in from {hotelInfo.checkIn} / Check-out by {hotelInfo.checkOut}</span>
              </div>
              <div className="modal-action-row">
                <Button variant="teal" href={hotelContact.mapsUrl} target="_blank" rel="noreferrer">Open in Maps<ArrowRight size={15} /></Button>
                <Button variant="outline" onClick={() => openContact({ topic: 'arrival' })}>Request Transfer Details</Button>
              </div>
            </div>
            <div className="location-steps">
              <span className="eyebrow"><i aria-hidden="true" />Getting here</span>
              {gettingHere.map((item) => {
                const StepIcon = stepIcons[item.icon];
                return (
                  <div className="location-step" key={item.id}>
                    <span className="step-icon" aria-hidden="true"><StepIcon size={20} strokeWidth={1.5} /></span>
                    <div>
                      <h4>{item.title}</h4>
                      <span className="step-detail">{item.detail}</span>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
              <p className="location-note">
                <MapPin size={14} />Transfers are arranged by our guest services team and charged separately from your room rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Close by">What you can discover around Pelling.</SectionHeading>
          <div className="nearby-grid-cards">
            {nearby.map((place) => (
              <article className="nearby-card" key={place.id}>
                <h3>{place.name}</h3>
                <span>{place.distance}</span>
                <p>{place.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" style={{ paddingTop: 0 }}>
        <div className="container reveal">
          <div className="map-card">
            <Photo src={images.mountains} alt="The Himalayan foothills around Pelling" />
            <div className="map-card-overlay">
              <h2>Pelling, Sikkim, India</h2>
              <p>Our fictional lodge is set in the Himalayan foothills, with mountain views and local walking routes nearby.</p>
              <Button variant="teal" href={hotelContact.mapsUrl} target="_blank" rel="noreferrer">View on Google Maps<ArrowRight size={15} /></Button>
            </div>
          </div>
          <p className="section-note">Hotely Kanchenjunga Lodge is fictional. The map link points to Pelling, Sikkim rather than a real property.</p>
        </div>
      </section>

      <section className="contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="When to visit">Weather through the year.</SectionHeading>
          <p className="section-lead">Weather in the Himalayan foothills changes with the season and elevation. Check local conditions before planning walks or excursions.</p>
          <div className="climate-grid">
            {climate.map((season) => (
              <article className="climate-card" key={season.id}>
                <h3>{season.season}</h3>
                <span className="climate-months">{season.months}</span>
                <span className="climate-temp">{season.temp}</span>
                <p>{season.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container reveal">
          <div className="packing-layout">
            <div className="packing-copy">
              <SectionHeading eyebrow="Before you pack" align="left">What to bring with you.</SectionHeading>
              <p>The lodge is relaxed throughout. Comfortable walking shoes, a rain layer, and warm clothing for cool evenings will help you enjoy your time outside.</p>
              <Button variant="teal" onClick={() => openContact({ topic: 'arrival' })}>Ask About Your Arrival<ArrowRight size={15} /></Button>
            </div>
            <ul className="packing-list">
              {packingList.map((item) => <li key={item}><Check size={14} />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
