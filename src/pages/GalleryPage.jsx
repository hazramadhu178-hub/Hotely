import { useMemo, useState } from 'react';
import { ArrowRight, Camera, Film, Images, Maximize2, Play } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { ArrowButton, Button, Dialog, Photo, SectionHeading, handleTabKeys, useScrollReveal } from '../components/ui.jsx';
import { dayRhythm, films, galleryCategories, galleryItems, images } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

function tabId(category) {
  return `gallery-tab-${category.replace(/[^a-z]+/gi, '-').toLowerCase()}`;
}

export default function GalleryPage() {
  useScrollReveal();
  const { setModal } = useApp();
  const [category, setCategory] = useState('All');
  const [activeId, setActiveId] = useState(null);

  const visibleItems = useMemo(
    () => category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category),
    [category],
  );

  const activeIndex = visibleItems.findIndex((item) => item.id === activeId);
  const activeItem = activeIndex >= 0 ? visibleItems[activeIndex] : null;

  const stepViewer = (delta) => {
    if (!visibleItems.length) return;
    const nextIndex = (activeIndex + delta + visibleItems.length) % visibleItems.length;
    setActiveId(visibleItems[nextIndex].id);
  };

  return (
    <>
      <PageHero
        eyebrow="Photos & films"
        title="Gallery"
        intro="A look around the resort: the rooms, the table, the pool, the garden pavilions, and the stretch of sand that ties it all together."
        image={images.sunset}
        imageAlt="The resort infinity pool at sunset"
        facts={[
          { icon: Images, label: `${galleryItems.length} photographs` },
          { icon: Film, label: `${films.length} short films` },
          { icon: Camera, label: 'Rooms, dining & beach' },
        ]}
      />

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Photo gallery">Have a look around.</SectionHeading>
          <div className="hotel-tabs" role="tablist" aria-label="Filter gallery photographs" onKeyDown={handleTabKeys}>
            {galleryCategories.map((item) => (
              <button
                type="button"
                key={item}
                id={tabId(item)}
                className={`hotel-tab rounded-md border px-5 py-2.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 ${category === item ? 'active' : ''}`}
                role="tab"
                tabIndex={category === item ? 0 : -1}
                aria-selected={category === item}
                aria-controls="gallery-results"
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div id="gallery-results" role="tabpanel" aria-labelledby={tabId(category)} tabIndex={0}>
            <div className="gallery-grid" key={category}>
              {visibleItems.map((item) => (
                <figure className="gallery-item" key={item.id}>
                  <button
                    type="button"
                    className="gallery-item-button"
                    onClick={() => setActiveId(item.id)}
                    aria-label={`View ${item.title} in the photo viewer`}
                  >
                    <Photo src={item.image} alt={item.title} />
                    <span className="gallery-item-zoom" aria-hidden="true"><Maximize2 size={15} /></span>
                  </button>
                  <figcaption>
                    <strong>{item.title}</strong>
                    <span>{item.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <p className="section-note">Photography is illustrative for this fictional hotel and does not represent one real property.</p>
        </div>
      </section>

      <section className="films-section contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Short films">Resort life, in motion.</SectionHeading>
          <div className="film-cards">
            {films.map((film) => (
              <article className="film-card" key={film.id}>
                <button type="button" className="featured-film" onClick={() => setModal({ type: 'video', item: film })} aria-label={`Play ${film.title}`}>
                  <Photo src={film.image} alt={film.title} />
                  <span className="play-button"><Play size={20} fill="currentColor" strokeWidth={1} /></span>
                </button>
                <h3>{film.title}</h3>
                <p>{film.location}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Button rounded href="#/rooms">See the Rooms<ArrowRight size={15} /></Button>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="A day in pictures">From first light to last drink.</SectionHeading>
          <div className="rhythm-list rhythm-list--compact">
            {dayRhythm.map((item) => (
              <article className="rhythm-item" key={item.id}>
                <span className="rhythm-time">{item.time}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow"><i aria-hidden="true" />Better in person</span>
            <h2>Photographs only go so far.</h2>
            <p>Browse the rooms and find the view you would rather wake up to.</p>
          </div>
          <div className="cta-actions">
            <Button variant="gold" href="#/rooms">Explore Rooms<ArrowRight size={15} /></Button>
            <Button variant="ghost" href="#/beach">Visit the Beach</Button>
          </div>
        </div>
      </section>

      {activeItem && (
        <Dialog
          title={activeItem.title}
          onClose={() => setActiveId(null)}
          className="dialog--gallery"
        >
          <div className="gallery-viewer">
            <div className="gallery-viewer-media">
              <Photo key={activeItem.id} className="gallery-viewer-image" src={activeItem.image} alt={activeItem.title} eager />
            </div>
            <div className="gallery-viewer-caption">
              <span className="gallery-viewer-category">{activeItem.category}</span>
              <p>{activeItem.caption}</p>
            </div>
            <div className="gallery-viewer-controls">
              <ArrowButton direction="left" label="Previous photograph" onClick={() => stepViewer(-1)} />
              <span className="gallery-viewer-count" aria-live="polite">{activeIndex + 1} of {visibleItems.length}</span>
              <ArrowButton label="Next photograph" onClick={() => stepViewer(1)} />
            </div>
            <p className="gallery-viewer-key">Use the arrows to browse the current selection.</p>
          </div>
        </Dialog>
      )}
    </>
  );
}
