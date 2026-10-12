import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Check, ChevronDown, Clock, MapPin, Menu, Sparkles, X } from 'lucide-react';
import { Logo } from './ui.jsx';
import { regions } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

const primaryLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/dining', label: 'Dining' },
];

const discoverLinks = [
  { to: '/beach', label: 'The beach' },
  { to: '/amenities', label: 'Amenities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Guest reviews' },
  { to: '/location', label: 'Location & arrival' },
  { to: '/faq', label: 'Good to know' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const { region, setRegionId, setToast, openEvent, openContact } = useApp();
  const location = useLocation();
  const ref = useRef(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setPagesOpen(false);
    setRegionOpen(false);
  };

  useEffect(() => { closeMenus(); }, [location.pathname]);

  useEffect(() => {
    const handleOutside = (event) => {
      if (!ref.current?.contains(event.target)) closeMenus();
    };
    const handleEscape = (event) => { if (event.key === 'Escape') closeMenus(); };
    document.addEventListener('pointerdown', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const discoverActive = discoverLinks.some((link) => link.to === location.pathname);
  const navClass = ({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`;

  return (
    <div className="header-shell" ref={ref}>
      <div className="topbar">
        <div className="container topbar-inner">
          <ul className="topbar-list">
            <li><MapPin size={13} />North Male Atoll, Maldives</li>
            <li><Clock size={13} />Check-in 3 PM / Check-out 11 AM</li>
            <li><Sparkles size={13} />Breakfast included in every stay</li>
          </ul>
          <div className="topbar-actions">
            <button type="button" onClick={() => { closeMenus(); openContact(); }}>Enquire</button>
            <span className="topbar-divider" aria-hidden="true" />
            <button type="button" onClick={() => { closeMenus(); openEvent(); }}>Weddings &amp; events</button>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Logo onClick={closeMenus} />
          <nav id="primary-navigation" className={`main-nav ${mobileOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
            {primaryLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>{link.label}</NavLink>
            ))}
            <div className="nav-dropdown">
              <button
                className={`nav-link ${discoverActive ? 'nav-link--active' : ''}`}
                type="button"
                aria-expanded={pagesOpen}
                aria-controls="pages-menu"
                onClick={() => { setPagesOpen(!pagesOpen); setRegionOpen(false); }}
              >
                Discover <ChevronDown size={12} aria-hidden="true" />
              </button>
              {pagesOpen && (
                <div className="dropdown-menu pages-menu" id="pages-menu">
                  {discoverLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) => isActive ? 'dropdown-active' : ''}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>
          <div className="header-actions">
            <div className="region-picker">
              <button className="region-toggle" type="button" aria-label="Choose language and currency" aria-expanded={regionOpen} aria-controls="region-menu" onClick={() => { setRegionOpen(!regionOpen); setPagesOpen(false); }}>
                English <ChevronDown size={13} />
              </button>
              {regionOpen && <div className="dropdown-menu region-menu" id="region-menu">
                <span className="dropdown-caption">Language &amp; currency</span>
                {regions.map((item) => <button key={item.id} type="button" className={region.id === item.id ? 'selected' : ''} onClick={() => { setRegionId(item.id); setToast(`Room rates are now shown in ${item.currency}.`); setRegionOpen(false); }}>
                  <span>{item.label}<small>{item.currency}</small></span>
                  {region.id === item.id && <Check size={16} />}
                </button>)}
                <p>Room rates use indicative demo rates.</p>
              </div>}
            </div>
            <Link className="btn btn--gradient book-button rounded-md inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium transition-all duration-200" to="/rooms">Book a Room</Link>
            <button className="mobile-menu-button icon-button" type="button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
