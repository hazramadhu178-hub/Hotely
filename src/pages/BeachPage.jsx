import { ArrowRight, Check, Clock, Info, Sun, Waves } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { Button, Photo, SectionHeading, useScrollReveal } from '../components/ui.jsx';
import { beachActivities, beachDay, beachHighlights, beachNotes, images, marineLife } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

export default function BeachPage() {
  useScrollReveal();
  const { openContact } = useApp();

  return (
    <>
      <PageHero
        eyebrow="Sand, sea & sunsets"
        title="Beach"
        intro="A sheltered lagoon, 120 metres of soft sand, and a house reef a short swim from the shore. Our beach is the quiet heart of the resort."
        image={images.beach}
        imageAlt="A palm-lined beach and turquoise lagoon at Hotely Beach Resort"
        facts={[
          { icon: Waves, label: '120m private beachfront' },
          { icon: Sun, label: 'West-facing sunsets' },
          { icon: Clock, label: 'Beach desk 7 AM - 6 PM' },
        ]}
      />

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Our shoreline">A calm stretch of sand, kept simple.</SectionHeading>
          <div className="beach-highlights">
            {beachHighlights.map((item) => (
              <article className="beach-highlight" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="beach-feature contour-surface section-space">
        <div className="container beach-feature-layout reveal">
          <div className="beach-feature-media">
            <Photo src={images.beachChairs} alt="Sun loungers and parasols on the resort beach" />
            <div className="beach-feature-inset">
              <Photo src={images.sunset} alt="The infinity pool and lagoon at sunset" />
            </div>
          </div>
          <div className="beach-feature-copy">
            <SectionHeading eyebrow="On the water" align="left">Things to do, whenever you feel like it.</SectionHeading>
            <ul className="beach-activities">
              {beachActivities.map((activity) => (
                <li key={activity.id}>
                  <h3>{activity.name}</h3>
                  <span>{activity.detail}</span>
                  <p>{activity.text}</p>
                </li>
              ))}
            </ul>
            <Button rounded onClick={() => openContact({ topic: 'facilities' })}>Ask About Beach Activities<ArrowRight size={15} /></Button>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="A beach day">How the light moves across the sand.</SectionHeading>
          <div className="rhythm-list rhythm-list--compact">
            {beachDay.map((item) => (
              <article className="rhythm-item" key={item.id}>
                <span className="rhythm-time">{item.time}</span>
                <div><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="The house reef">Who else lives here.</SectionHeading>
          <p className="section-lead">The reef sits a short swim from the beach. Ask the team for a mask and fins, and keep a respectful distance from anything you meet.</p>
          <div className="marine-grid">
            {marineLife.map((creature) => (
              <article className="marine-card" key={creature.id}>
                <span className="marine-season">{creature.season}</span>
                <h3>{creature.name}</h3>
                <p>{creature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container reveal">
          <div className="beach-notes-card">
            <div className="beach-notes-head">
              <span className="sustainability-icon"><Info size={24} strokeWidth={1.4} /></span>
              <div>
                <span className="eyebrow"><i aria-hidden="true" />Before you swim</span>
                <h2>Staying safe and comfortable on the beach.</h2>
              </div>
            </div>
            <ul className="beach-notes">
              {beachNotes.map((note) => <li key={note}><Check size={14} />{note}</li>)}
            </ul>
            <p className="form-note" style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
              There are no lifeguards on duty. Please speak to the beach team about conditions before entering the water.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow"><i aria-hidden="true" />Out on the water</span>
            <h2>Snorkelling, sandbanks, and sunset cruises.</h2>
            <p>Our beach team can arrange equipment, guides, and boat trips around whatever else you have planned.</p>
          </div>
          <div className="cta-actions">
            <Button variant="gold" onClick={() => openContact({ topic: 'facilities' })}>Plan an Activity<ArrowRight size={15} /></Button>
            <Button variant="ghost" href="#/rooms">Find a Beachfront Room</Button>
          </div>
        </div>
      </section>
    </>
  );
}
