import { Link } from 'react-router-dom';
import { ArrowRight, Award, BedDouble, Leaf, Users, Waves } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { StatsBand } from '../components/ExtraSections.jsx';
import { Button, Photo, SectionHeading, useScrollReveal } from '../components/ui.jsx';
import { awards, dayRhythm, images, team } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

const principles = [
  { id: 'personal', title: 'Personal, never formal', text: 'We learn the details that matter to you and help when you need us, without making your stay feel managed.' },
  { id: 'island', title: 'Rooted in the island', text: 'Open-air spaces, coastal cooking, and an easy indoor-outdoor rhythm let the setting shape each day.' },
  { id: 'rest', title: 'Rest with intention', text: 'Quiet rooms, comfortable beds, shaded corners, and thoughtful routines create space to properly switch off.' },
  { id: 'footprint', title: 'A lighter footprint', text: 'Refillable amenities, considered water use, and fewer single-use items guide the way we care for our surroundings.' },
];

const timeline = [
  { id: 'founded', year: 'The beginning', title: 'A single row of villas', text: 'Hotely began as eight simple villas built among the palms, with a kitchen that served whatever the boats brought in that morning.' },
  { id: 'grown', year: 'Growing gently', title: 'Forty-eight rooms, same spirit', text: 'We added suites, family rooms, and private villas, but kept the scale small enough that the team still knows every guest by name.' },
  { id: 'today', year: 'Today', title: 'A hotel built around rest', text: 'Three places to eat, a spa in the garden, a quiet beach, and a promise that nothing here needs to be rushed.' },
];

export default function AboutPage() {
  useScrollReveal();
  const { openContact, setModal } = useApp();

  return (
    <>
      <PageHero
        eyebrow="About Hotely"
        title="About Us"
        intro="A quieter kind of island hotel, where the setting leads and the service feels natural: warm, attentive, and never overdone."
        image={images.exterior}
        imageAlt="The villas and tropical gardens of Hotely Beach Resort"
        facts={[
          { icon: BedDouble, label: '48 rooms, suites & villas' },
          { icon: Waves, label: '120m private beachfront' },
          { icon: Users, label: 'A team of 60 hosts' },
        ]}
      />

      <section className="about-section section-space">
      <div className="container">
      <div className="about-layout reveal">
      <div className="about-media">
      <Photo className="about-main-photo" src={images.gardens} alt="A quiet pool and palm garden at the resort" />
      <div className="about-secondary-media">
        <Photo src={images.reception} alt="The resort reception and lobby area" />
      </div>
      <p className="about-caption"><span>North Male Atoll</span>A small resort between the gardens and the lagoon.</p>
      </div>
      <div className="about-copy">
      <span className="eyebrow"><i aria-hidden="true" />Our story</span>
      <h2>Built slowly, and kept deliberately small.</h2>
      <p className="about-lead">Our 48 rooms, suites, and villas sit between tropical gardens and a calm stretch of lagoon. The scale is intentionally intimate.</p>
      <p>It means breakfast can be unhurried, favourite drinks are remembered, and there is always a quiet corner to make your own. Our team has the time to notice what would make your day easier, from a shaded lounger at the right hour to a table where you can watch the sunset.</p>
      <p>Rather than filling every hour with a programme, we give you room to choose your own pace. Swim before breakfast, stay by the pool until the light goes, book time at the spa, or simply leave the day open and see what it becomes.</p>
      <blockquote>
        <span aria-hidden="true">&ldquo;</span>
        <p>Hospitality should feel less like a performance and more like being genuinely looked after.</p>
      </blockquote>
      <div className="about-actions">
        <Button variant="teal" href="#/rooms">Explore Rooms &amp; Villas<ArrowRight size={15} /></Button>
        <Link to="/beach">See the beach<ArrowRight size={15} /></Link>
      </div>
      </div>
      </div>

      <div className="about-principles reveal">
      <div className="about-principles-heading">
      <span className="eyebrow"><i aria-hidden="true" />How we host</span>
      <h3>Four simple promises behind every stay.</h3>
      </div>
      <div className="about-principles-list">
      {principles.map((principle) => (
        <article className="about-principle" key={principle.id}>
          <h4>{principle.title}</h4>
          <p>{principle.text}</p>
        </article>
      ))}
      </div>
      </div>
      </div>
      </section>

      <StatsBand />

      <section className="timeline-section section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="How we got here">A hotel that grew at its own pace.</SectionHeading>
          <div className="timeline-grid">
            {timeline.map((item) => (
              <article className="timeline-card" key={item.id}>
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hosts-section contour-surface section-space">
        <div className="container hosts-layout reveal">
          <div className="hosts-copy">
            <SectionHeading eyebrow="Meet our hotel team" align="left">The people who make you feel at home.</SectionHeading>
            <p className="about-team-note">Our team lives on and around the atoll, and many have been with the hotel for years. They are the reason guests come back.</p>
            <Button rounded onClick={() => openContact({ topic: 'guest-services' })}>Contact Our Team<ArrowRight size={15} /></Button>
          </div>
          <div className="hosts-grid">
            {team.map((member) => (
              <button className="host-card" type="button" key={member.id} onClick={() => setModal({ type: 'team', item: member })} aria-label={`Meet ${member.name}, ${member.role}`}>
                <Photo src={member.image} alt={member.name} />
                <p className="host-rating">{member.department}</p>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="A day at Hotely">However you choose to spend it.</SectionHeading>
          <p className="section-lead">Nothing here is scheduled for you. But if it helps to picture the shape of a day, this is how most of ours unfold.</p>
          <div className="rhythm-list">
            {dayRhythm.map((item) => (
              <article className="rhythm-item" key={item.id}>
                <span className="rhythm-time">{item.time}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sustainability-section section-space">
        <div className="container reveal">
          <div className="sustainability-card">
            <div className="sustainability-icon"><Leaf size={26} strokeWidth={1.4} /></div>
            <div>
              <span className="eyebrow"><i aria-hidden="true" />Caring for the island</span>
              <h2>Small changes, made consistently.</h2>
              <p>We use refillable amenities in every room, filter and bottle our own drinking water, compost kitchen waste for the gardens, and work with local boats for the daily catch. Reef-safe sun cream is available at reception, and our team can explain how to enjoy the house reef without disturbing it.</p>
              <p>Our gardens are planted entirely with native species that need little irrigation, solar panels cover a growing share of our daytime power, and we have removed single-use plastic from every guest area. None of it is dramatic on its own; together it adds up.</p>
              <p className="form-note" style={{ justifyContent: 'flex-start', textAlign: 'left' }}>These practices are described as part of this fictional hotel demonstration.</p>
            </div>
          </div>

          <div className="awards-strip">
            {awards.map((award) => (
              <article className="award-card" key={award.id}>
                <span className="award-icon"><Award size={20} strokeWidth={1.4} /></span>
                <h3>{award.title}</h3>
                <p>{award.body}</p>
                <span className="award-year">{award.year}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow"><i aria-hidden="true" />Ready when you are</span>
            <h2>Come and see it for yourself.</h2>
            <p>Browse the rooms, or tell our team what you have in mind and we will help you shape the stay.</p>
          </div>
          <div className="cta-actions">
            <Button variant="gold" href="#/rooms">Explore Rooms<ArrowRight size={15} /></Button>
            <Button variant="ghost" onClick={() => openContact({ topic: 'reservations' })}>Talk to Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
