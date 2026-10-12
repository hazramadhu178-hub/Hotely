import { ArrowRight, Check, Clock, Mail, MapPin, Phone, Plane, Sailboat, Sparkles, UsersRound } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { Button, Photo, SectionHeading, useScrollReveal } from '../components/ui.jsx';
import { climate, gettingHere, hotelContact, hotelInfo, images, packingList } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

const stepIcons = { plane: Plane, greeting: UsersRound, boat: Sailboat };

const nearby = [
  { id: 'reef', name: 'The house reef', distance: 'A short swim offshore', text: 'Reef fish, rays, and occasional turtles, reachable directly from our beach with a mask and fins.' },
  { id: 'sandbank', name: 'Drifting sandbank', distance: '10 minutes by boat', text: 'A bare crescent of sand that appears at low tide, perfect for a quiet picnic with nothing on the horizon.' },
  { id: 'village', name: 'Local island village', distance: '20 minutes by boat', text: 'A working island with a harbour, small cafés, and craft shops. Our concierge can arrange a half-day visit.' },
  { id: 'male', name: 'Malé city', distance: '35 minutes by speedboat', text: 'The capital, with markets, museums, and the fish harbour. Best visited in the morning before the heat builds.' },
];

export default function LocationPage() {
  useScrollReveal();
  const { openContact } = useApp();

  return (
    <>
      <PageHero
        eyebrow="Finding us"
        title="Location"
        intro="A short transfer from Malé, and a world away. Here is how to reach the resort, and what sits nearby once you arrive."
        image={images.exterior}
        imageAlt="An aerial view of the resort between gardens and the lagoon"
        facts={[
          { icon: MapPin, label: 'North Male Atoll' },
          { icon: Sailboat, label: '35 minutes from MLE' },
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
          <SectionHeading eyebrow="Close by">What sits just beyond the lagoon.</SectionHeading>
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
            <Photo src={images.beach} alt="The lagoon and beach surrounding Hotely Beach Resort" />
            <div className="map-card-overlay">
              <h2>North Male Atoll, Maldives</h2>
              <p>Our jetty sits on the sheltered side of the island, with the house reef to the east and the sunset to the west.</p>
              <Button variant="teal" href={hotelContact.mapsUrl} target="_blank" rel="noreferrer">View on Google Maps<ArrowRight size={15} /></Button>
            </div>
          </div>
          <p className="section-note">Hotely Beach Resort is fictional. The map link points to the North Male Atoll region rather than a real property.</p>
        </div>
      </section>

      <section className="contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="When to visit">Weather through the year.</SectionHeading>
          <p className="section-lead">The Maldives is warm all year. What changes is the rain, the wind, and how many people share the beach with you.</p>
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
              <p>The dress code here is relaxed throughout. Beyond swimwear and something light for the evening, there is very little you actually need.</p>
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
