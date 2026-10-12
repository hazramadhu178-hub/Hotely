import { useMemo, useState } from 'react';
import { ArrowRight, BedDouble, Check, Coffee, Ruler } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import RoomCard from '../components/RoomCard.jsx';
import { Button, SectionHeading, handleTabKeys, useScrollReveal } from '../components/ui.jsx';
import { getRoomMatches, images, roomCategories, roomInclusions, roomPolicies, rooms } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

function tabId(category) {
  return `room-tab-${category.toLowerCase()}`;
}

export default function RoomsPage() {
  useScrollReveal();
  const { region, favorites, toggleFavorite, openRoom, openContact } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredRooms = useMemo(() => getRoomMatches(activeCategory), [activeCategory]);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  return (
    <>
      <PageHero
        eyebrow="Rooms, suites & villas"
        title="Rooms"
        intro="Sixteen room types across four styles, from a bright deluxe room to a three-bedroom beach house. Every rate includes breakfast, Wi-Fi, and access to the pool and fitness studio."
        image={images.oceanKing}
        imageAlt="A bright hotel bedroom opening onto a balcony with sea views"
        facts={[
          { icon: BedDouble, label: `${rooms.length} room types` },
          { icon: Coffee, label: 'Breakfast included' },
          { icon: Ruler, label: 'From 34 to 180 m²' },
        ]}
      />

      <section className="featured-section section-space">
        <div className="container reveal">
          <div className="room-type-select">
            <label className="sr-only" htmlFor="room-type-select">Room type</label>
            <select id="room-type-select" value={activeCategory} onChange={(event) => changeCategory(event.target.value)}>
              {roomCategories.map((category) => <option key={category} value={category}>{category === 'All' ? 'All Rooms' : category}</option>)}
            </select>
          </div>
          <div className="hotel-tabs room-filter-tabs" role="tablist" aria-label="Filter accommodation by room type" onKeyDown={handleTabKeys}>
            {roomCategories.map((category) => (
              <button
                type="button"
                key={category}
                id={tabId(category)}
                className={`hotel-tab rounded-md border px-5 py-2.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 ${activeCategory === category ? 'active' : ''}`}
                role="tab"
                tabIndex={activeCategory === category ? 0 : -1}
                aria-selected={activeCategory === category}
                aria-controls="room-results"
                onClick={() => changeCategory(category)}
              >
                {category === 'All' ? 'All Rooms' : category}
              </button>
            ))}
          </div>

          <div id="room-results" role="tabpanel" aria-labelledby={tabId(activeCategory)} tabIndex={0}>
            <div className="rooms-grid" key={activeCategory}>
              {filteredRooms.slice(0, visibleCount).map((room) => (
                <RoomCard key={room.id} room={room} region={region} saved={favorites.includes(room.id)} onSave={toggleFavorite} onOpen={openRoom} />
              ))}
            </div>
          </div>

          {filteredRooms.length > visibleCount && (
            <div className="section-action">
              <Button rounded variant="outline" onClick={() => setVisibleCount((count) => count + 6)}>Show More Rooms<ArrowRight size={15} /></Button>
            </div>
          )}

          <p className="section-note">
            All rates shown are illustrative samples for this demonstration and include breakfast. A 10% service charge is added in the room summary.
          </p>
        </div>
      </section>

      <section className="contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Included with every room">The same standard, whichever room you choose.</SectionHeading>
          <div className="inclusions-grid">
            {roomInclusions.map((item) => (
              <article className="inclusion-card" key={item.id}>
                <span className="inclusion-icon"><Check size={16} strokeWidth={2.2} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container reveal">
          <div className="policy-layout">
            <div className="policy-copy">
              <SectionHeading eyebrow="Room policies" align="left">The practical details.</SectionHeading>
              <p>Everything worth knowing before you choose a room. If your plans do not fit neatly into any of this, our reservations team will usually find a way to make it work.</p>
              <Button variant="teal" onClick={() => openContact({ topic: 'reservations' })}>Ask About a Room<ArrowRight size={15} /></Button>
            </div>
            <dl className="policy-table">
              {roomPolicies.map((policy) => (
                <div className="policy-row" key={policy.id}>
                  <dt>{policy.label}</dt>
                  <dd>{policy.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow"><i aria-hidden="true" />Not sure which room?</span>
            <h2>Tell us who is travelling.</h2>
            <p>Share your dates and party size and our team will suggest the rooms that genuinely suit your stay.</p>
          </div>
          <div className="cta-actions">
            <Button variant="gold" onClick={() => openContact({ topic: 'reservations' })}>Get a Recommendation<ArrowRight size={15} /></Button>
            <Button variant="ghost" href="#/amenities">See What's Included</Button>
          </div>
        </div>
      </section>
    </>
  );
}
