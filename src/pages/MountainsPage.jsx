import { ArrowRight, Check, Clock, Info, Mountain, Sun } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { Button, Photo, SectionHeading, useScrollReveal } from '../components/ui.jsx';
import { images, mountainActivities, mountainDay, mountainHighlights, mountainNotes } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

export default function MountainsPage() {
  useScrollReveal();
  const { openContact } = useApp();

  return (
    <>
      <PageHero
        eyebrow="Peaks, forests & fresh air"
        title="The Mountains"
        intro="Stay among the Himalayan foothills with views toward Kanchenjunga, guided walks through the hills, and quiet moments close to nature."
        image={images.mountains}
        imageAlt="Snow-capped Himalayan peaks above a green mountain valley"
        facts={[
          { icon: Mountain, label: 'Kanchenjunga views' },
          { icon: Sun, label: 'Clear-morning viewpoints' },
          { icon: Clock, label: 'Guided walks by arrangement' },
        ]}
      />

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="The Himalayan foothills">A quieter way to experience the mountains.</SectionHeading>
          <div className="mountain-highlights">
            {mountainHighlights.map((item) => (
            <article className="mountain-highlight" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mountain-feature contour-surface section-space">
        <div className="container mountain-feature-layout reveal">
          <div className="mountain-feature-media">
            <Photo src={images.mountainView} alt="Mountain ridges and forested foothills near Pelling" />
            <div className="mountain-feature-inset">
              <Photo src={images.sunset} alt="The Himalayan foothills in warm evening light" />
            </div>
          </div>
          <div className="mountain-feature-copy">
            <SectionHeading eyebrow="Out in the hills" align="left">Things to do, whenever you feel like it.</SectionHeading>
            <ul className="mountain-activities">
              {mountainActivities.map((activity) => (
                <li key={activity.id}>
                  <h3>{activity.name}</h3>
                  <span>{activity.detail}</span>
                  <p>{activity.text}</p>
                </li>
              ))}
            </ul>
            <Button rounded onClick={() => openContact({ topic: 'facilities' })}>Ask About Mountain Activities<ArrowRight size={15} /></Button>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="A day in the mountains">How the day unfolds in the hills.</SectionHeading>
          <div className="rhythm-list rhythm-list--compact">
            {mountainDay.map((item) => (
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
          <SectionHeading eyebrow="The region">A landmark best experienced with care.</SectionHeading>
          <p className="section-lead">Kanchenjunga rises to 8,586 metres and is the world’s third-highest mountain. Our fictional lodge is in Pelling, Sikkim, in the Himalayan foothills—not on the mountain itself.</p>
          <div className="mountain-grid">
            <article className="mountain-card">
              <span className="mountain-caption">The summit</span>
              <h3>8,586 metres</h3>
              <p>Kanchenjunga is the world’s third-highest mountain and one of the great peaks of the Himalaya.</p>
            </article>
            <article className="mountain-card">
              <span className="mountain-caption">Our setting</span>
              <h3>Pelling, Sikkim</h3>
              <p>The lodge is imagined in the foothills, with views toward the range on clear days and local routes nearby.</p>
            </article>
            <article className="mountain-card">
              <span className="mountain-caption">Best light</span>
              <h3>Clear mornings</h3>
              <p>Visibility changes with the weather and season. Ask the local team before planning a viewpoint visit.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container reveal">
          <div className="stay-notes-card">
            <div className="stay-notes-head">
              <span className="sustainability-icon"><Info size={24} strokeWidth={1.4} /></span>
              <div>
                <span className="eyebrow"><i aria-hidden="true" />Before you set out</span>
                <h2>Staying safe and comfortable in the mountains.</h2>
              </div>
            </div>
            <ul className="stay-notes-list">
              {mountainNotes.map((note) => <li key={note}><Check size={14} />{note}</li>)}
            </ul>
            <p className="form-note" style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
              Please speak with our team before setting out. Local guides can help you choose an appropriate route and check conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow"><i aria-hidden="true" />Find your own pace</span>
            <h2>Sunrise views, local trails, and time to unwind.</h2>
            <p>Our team can arrange local guides, transport, and thoughtful outings around whatever else you have planned.</p>
          </div>
          <div className="cta-actions">
            <Button variant="gold" onClick={() => openContact({ topic: 'facilities' })}>Plan an Activity<ArrowRight size={15} /></Button>
            <Button variant="ghost" href="#/rooms">Find a Mountain View Room</Button>
          </div>
        </div>
      </section>
    </>
  );
}
