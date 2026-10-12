import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BedDouble, BellRing, Clock, Coffee, Dumbbell, Play, Utensils, Waves, Wifi } from 'lucide-react';
import RoomCard from '../components/RoomCard.jsx';
import { StatsBand } from '../components/ExtraSections.jsx';
import { ArrowButton, Button, Photo, SectionHeading, useScrollReveal } from '../components/ui.jsx';
import { useApp } from '../context/AppContext.jsx';
import { articles, experiences, films, heroSlides, images, offers, rooms, testimonials } from '../hotelData.js';

const amenities = [
  { icon: BedDouble, title: 'Restful rooms & suites', text: 'Comfortable beds, soft linens, and thoughtfully furnished spaces for a good night\'s sleep.' },
  { icon: BellRing, title: '24-hour concierge', text: 'From a late arrival to a special request, our hotel team is here whenever you need us.' },
  { icon: Wifi, title: 'Complimentary Wi-Fi', text: 'Stay connected in your room and throughout the hotel, with Wi-Fi included in every stay.' },
  { icon: Dumbbell, title: 'Fitness & wellness', text: 'Keep your routine in our fitness studio, then make time to unwind at Serenity Spa.' },
  { icon: Utensils, title: 'Fresh, relaxed dining', text: 'Enjoy breakfast at The Palm Table, poolside light bites, and dinner with an ocean view.' },
  { icon: Waves, title: 'Beach & pool', text: 'A private stretch of sand, sun loungers with shade, and our main pool beside the bar.' },
];

const heroFacts = [
  { icon: Clock, label: 'Check-in from 3 PM' },
  { icon: Coffee, label: 'Breakfast included' },
  { icon: Waves, label: 'Private beachfront' },
];

function Sparkle({ className = '' }) {
  return <svg className={`hero-sparkle ${className}`} viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M40 4l-2 24M41 48l-1 27M5 41l23-3M50 39l25-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M28 26l-8-5M54 53l7 6M52 26l4-9M26 53l-5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><path d="M37 33l3-4 2 6 5 4-6 3-3 6-2-7-5-3 6-1z" fill="currentColor" /></svg>;
}

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [filmIndex, setFilmIndex] = useState(0);
  const { region, favorites, toggleFavorite, openRoom, openOffer, openExperience, setModal } = useApp();
  useScrollReveal();

  const hero = heroSlides[heroIndex];
  const film = films[filmIndex];
  const featuredRooms = rooms.slice(0, 3);

  return (
    <>
        <section className="hero-shell">
        <div className="container hero-layout">
            <div className="hero-copy">
            <div key={heroIndex} className="hero-copy-content slide-enter">
                <h1>{hero.lines.map((line) => <span key={line}>{line}</span>)}</h1>
                <p>{hero.description}</p>
            </div>
            <div className="hero-actions">
                <Button href="#/rooms">Book Your Stay</Button>
                <Link className="hero-secondary-link" to="/rooms">Browse rooms &amp; villas<ArrowRight size={15} /></Link>
            </div>
            <ul className="hero-facts">
                {heroFacts.map(({ icon: Icon, label }) => <li key={label}><Icon size={15} />{label}</li>)}
            </ul>
            </div>
            <div className="hero-media">
            <div className="hero-orbits" aria-hidden="true" />
            <div className="hero-main-image"><Photo key={hero.image} className="hero-photo image-enter" src={hero.image} alt={hero.alt} eager fetchPriority="high" /></div>
            <div className="hero-bubble hero-bubble--top"><Photo src={images.restaurant} alt="Open-air dining beside the beach" eager /></div>
            <div className="hero-bubble hero-bubble--right"><Photo src={images.oceanKing} alt="A bright, comfortable hotel bedroom" eager /></div>
            <div className="hero-bubble hero-bubble--bottom"><Photo src={images.sunset} alt="The infinity pool at sunset" eager /></div>
            <Sparkle className="hero-sparkle--blue" />
            <Sparkle className="hero-sparkle--green" />
            <div className="hero-controls">
                <ArrowButton square direction="left" label="Previous hotel highlight" onClick={() => setHeroIndex((heroIndex + heroSlides.length - 1) % heroSlides.length)} />
                <ArrowButton square label="Next hotel highlight" onClick={() => setHeroIndex((heroIndex + 1) % heroSlides.length)} />
            </div>
            <span className="sr-only" aria-live="polite">Hotel highlight {heroIndex + 1} of {heroSlides.length}: {hero.lines.join(' ')}</span>
            </div>
        </div>
        </section>

      <StatsBand />

        <section className="amenities-section section-space">
        <div className="container reveal">
            <SectionHeading eyebrow="Welcome to our hotel">Thoughtful comforts, and a genuinely warm welcome.</SectionHeading>
            <p className="section-lead">
            Hotely Beach Resort is a small, unhurried island hotel with 48 rooms, suites, and villas, three places to eat and drink,
            and a team that remembers how you like your morning coffee.
            </p>
            <div className="amenities-grid">
            {amenities.map(({ icon: Icon, title, text }) => (
                <div className="amenity" key={title}>
                <div className="amenity-icon"><Icon size={30} strokeWidth={1.2} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
                </div>
            ))}
            </div>
            <div className="section-action"><Button variant="outline" rounded href="#/about">More About Our Hotel<ArrowRight size={15} /></Button></div>
        </div>
        </section>

        <section className="featured-section section-space">
        <div className="container reveal">
            <SectionHeading eyebrow="Rooms, suites & villas">Your own space to unwind.</SectionHeading>
            <p className="section-lead">A few favourites from our collection. Every rate includes breakfast, Wi-Fi, and access to the pool and fitness studio.</p>
            <div className="rooms-grid">
            {featuredRooms.map((room) => (
                <RoomCard key={room.id} room={room} region={region} saved={favorites.includes(room.id)} onSave={toggleFavorite} onOpen={openRoom} />
            ))}
            </div>
            <div className="section-action"><Button rounded href="#/rooms">View All Rooms<ArrowRight size={15} /></Button></div>
        </div>
        </section>

        <section className="popular-section section-space">
        <div className="container reveal">
            <SectionHeading eyebrow="Dining & wellness" tone="gradient">Good food. Quiet moments. Your kind of day.</SectionHeading>
            <div className="popular-places" style={{ marginTop: '44px' }}>
            {experiences.slice(0, 3).map((item) => (
                <button className="destination-tile" type="button" key={item.id} onClick={() => openExperience(item)}>
                <span className="destination-image"><Photo src={item.image} alt={item.name} /></span>
                <h3>{item.name}</h3>
                <span className="destination-count">{item.subtitle}</span>
                </button>
            ))}
            </div>
            <div className="section-action"><Button variant="outline" rounded href="#/dining">Explore Dining<ArrowRight size={15} /></Button></div>
        </div>
        </section>

        <section className="offers-section section-space">
        <div className="container reveal">
            <SectionHeading eyebrow="Offers & packages" align="left">Ways to stay a little longer.</SectionHeading>
            <p className="section-lead">Sample packages that pair our rooms with dining and spa time. Every offer includes breakfast at The Palm Table.</p>
            <div className="offers-grid">
            {offers.slice(0, 2).map((offer) => (
                <article className="offer-card" key={offer.id}>
                <div className="offer-media">
                    <Photo src={offer.image} alt={`${offer.title} at Hotely Beach Resort`} />
                    <span className="offer-badge">{offer.badge}</span>
                </div>
                <div className="offer-body">
                    <span className="offer-stay">{offer.stay}</span>
                    <h3>{offer.title}</h3>
                    <p className="offer-summary">{offer.summary}</p>
                    <div className="offer-foot">
                    <span className="offer-price"><em>From</em><strong>{offer.from}</strong><small>per night</small></span>
                    <Button variant="outline" onClick={() => openOffer(offer)}>View Offer<ArrowRight size={15} /></Button>
                    </div>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>

        <section className="films-section contour-surface section-space">
        <div className="container films-layout reveal">
            <div className="film-gallery">
            <button className="featured-film" type="button" onClick={() => setModal({ type: 'video', item: film })} aria-label={`Play ${film.title}`}>
                <Photo key={film.image} className="image-enter" src={film.image} alt={film.title} />
                <span className="play-button"><Play size={22} fill="currentColor" strokeWidth={1} /></span>
            </button>
            <div className="film-thumbnails">
                {films.map((item, index) => (
                <button type="button" key={item.id} className={filmIndex === index ? 'selected' : ''} aria-label={`Preview ${item.title}`} aria-pressed={filmIndex === index} onClick={() => setFilmIndex(index)}>
                    <Photo src={item.image} alt={item.title} />
                </button>
                ))}
            </div>
            </div>
            <div className="film-copy">
            <SectionHeading eyebrow="Life at Hotely" align="left">Picture yourself right here, by the sea.</SectionHeading>
            <Button rounded href="#/gallery">Open the Gallery<ArrowRight size={15} /></Button>
            </div>
        </div>
        </section>

        <section className="reviews-section section-space">
        <div className="container reveal">
            <SectionHeading eyebrow="Our guests' experiences" tone="gradient">Comfort they remember, and a welcome they come back for.</SectionHeading>
            <div className="reviews-grid">
            {testimonials.slice(0, 3).map((review) => (
                <figure className="testimonial" key={review.name}>
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                <blockquote>{review.quote}</blockquote>
                <figcaption><Photo src={review.image} alt={review.name} /><div><h3>{review.name}</h3><span>{review.stay}</span></div></figcaption>
                </figure>
            ))}
            </div>
            <div className="section-action"><Button variant="outline" rounded href="#/reviews">Read More Reviews<ArrowRight size={15} /></Button></div>
        </div>
        </section>

        <section className="blog-section section-space">
        <div className="container reveal">
            <SectionHeading eyebrow="The hotel journal">A closer look at your stay, from your room to the table.</SectionHeading>
            <div className="blog-grid">
            {articles.map((article) => (
                <article className="blog-card" key={article.id}>
                <button className="blog-image-button" type="button" onClick={() => setModal({ type: 'article', item: article })} aria-label={`Read ${article.title}`}>
                    <Photo src={article.image} alt={article.title} />
                </button>
                <div className="blog-stats">
                    <div><strong>{article.date}</strong><span>Updated</span></div>
                    <div><strong>{article.readTime}</strong><span>Read time</span></div>
                    <div><strong>{article.category}</strong><span>Hotel guide</span></div>
                </div>
                <h3><button type="button" onClick={() => setModal({ type: 'article', item: article })}>{article.title}</button></h3>
                <Button variant="dark" rounded onClick={() => setModal({ type: 'article', item: article })}>Read the Story</Button>
                </article>
            ))}
            </div>
        </div>
        </section>
    </>
  );
}
