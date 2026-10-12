import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Photo } from './ui.jsx';

/* Shared banner for every inner page, keeping the arch motif from the home page. */
export default function PageHero({ eyebrow, title, intro, image, imageAlt, facts = [] }) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div className="container page-hero-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <span aria-current="page">{title}</span>
        </nav>
        <div className="page-hero-layout">
          <div className="page-hero-copy">
            <span className="eyebrow"><i aria-hidden="true" />{eyebrow}</span>
            <h1 id="page-hero-title">{title}</h1>
            <p>{intro}</p>
            {facts.length > 0 && (
              <ul className="page-hero-facts">
                {facts.map(({ icon: Icon, label }) => <li key={label}><Icon size={15} />{label}</li>)}
              </ul>
            )}
          </div>
          <div className="page-hero-media">
            <Photo src={image} alt={imageAlt} eager fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}
