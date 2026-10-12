import { ArrowRight, MessageSquareQuote, Star, ThumbsUp } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { Button, Photo, SectionHeading, useScrollReveal } from '../components/ui.jsx';
import { images, reviewStats, reviewThemes, testimonials } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

const ratingBreakdown = [
  { id: 'cleanliness', label: 'Cleanliness', score: 4.9 },
  { id: 'service', label: 'Service', score: 5.0 },
  { id: 'location', label: 'Location', score: 4.9 },
  { id: 'comfort', label: 'Room comfort', score: 4.8 },
  { id: 'dining', label: 'Food & dining', score: 4.8 },
  { id: 'value', label: 'Value', score: 4.7 },
];

export default function ReviewsPage() {
  useScrollReveal();
  const { openContact } = useApp();

  return (
    <>
      <PageHero
        eyebrow="Guest experiences"
        title="Reviews"
        intro="Comfort they remember, and a welcome they come back for. Here is what guests say about staying with us."
        image={images.loungers}
        imageAlt="Sun loungers beside the resort pool"
        facts={[
          { icon: Star, label: '4.9 average rating' },
          { icon: MessageSquareQuote, label: '1,240 sample reviews' },
          { icon: ThumbsUp, label: '96% would return' },
        ]}
      />

      <section className="section-space">
        <div className="container reveal">
          <div className="rating-panel">
            <div className="rating-score">
              <strong>4.9</strong>
              <span className="rating-stars" aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={0} />)}
              </span>
              <span className="rating-count">Based on 1,240 sample guest reviews</span>
            </div>
            <ul className="rating-bars">
              {ratingBreakdown.map((item) => (
                <li key={item.id}>
                  <span className="rating-label">{item.label}</span>
                  <span className="rating-track"><span className="rating-fill" style={{ width: `${(item.score / 5) * 100}%` }} /></span>
                  <span className="rating-value">{item.score.toFixed(1)}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="section-note">Ratings and reviews are illustrative sample content created for this hotel demonstration.</p>
        </div>
      </section>

      <section className="section-space" style={{ paddingTop: 0 }}>
        <div className="container reveal">
          <SectionHeading eyebrow="In their words">Stories from recent stays.</SectionHeading>
          <div className="review-wall">
            {testimonials.map((review) => (
              <figure className="testimonial" key={review.name}>
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                <span className="review-stars" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }, (_, starIndex) => <Star key={starIndex} size={13} fill="currentColor" strokeWidth={0} />)}
                </span>
                <blockquote>{review.quote}</blockquote>
                <figcaption>
                  <Photo src={review.image} alt={review.name} />
                  <div><h3>{review.name}</h3><span>{review.stay}</span></div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="section-action">
            <Button rounded onClick={() => openContact({ topic: 'guest-services' })}>Share Your Experience<ArrowRight size={15} /></Button>
          </div>
        </div>
      </section>

      <section className="contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="By traveller type">Who stays with us.</SectionHeading>
          <div className="review-stats">
            {reviewStats.map((stat) => (
              <article className="review-stat" key={stat.id}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
          <div className="theme-grid">
            {reviewThemes.map((theme) => (
              <article className="theme-card" key={theme.id}>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow"><i aria-hidden="true" />Join them</span>
            <h2>Your own quiet week by the water.</h2>
            <p>Browse the rooms, or ask our team which one would suit the way you like to travel.</p>
          </div>
          <div className="cta-actions">
            <Button variant="gold" href="#/rooms">See the Rooms<ArrowRight size={15} /></Button>
            <Button variant="ghost" href="#/contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
