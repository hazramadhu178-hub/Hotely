import { hotelStats } from '../hotelData.js';

/* A dark band of headline figures, shared by the home and about pages. */
export function StatsBand() {
  return (
    <section className="stats-band" aria-label="Hotely Beach Resort at a glance">
      <div className="container stats-inner">
        {hotelStats.map((stat) => (
          <div className="stat" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-note">{stat.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
