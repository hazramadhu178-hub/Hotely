import { useEffect, useState } from 'react';

/* Branded loading screen: the hotel mark draws itself while a gradient bar fills. */
export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let finished = false;
    let hideTimer = 0;
    let removeTimer = 0;
    const startedAt = Date.now();

    const finish = () => {
      if (finished) return;
      finished = true;
      const shownFor = Date.now() - startedAt;
      hideTimer = window.setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = '';
        removeTimer = window.setTimeout(() => setRemoved(true), 700);
      }, Math.max(0, 1600 - shownFor));
    };

    document.body.style.overflow = 'hidden';
    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }
    // Never leave the guest waiting on slow remote photography.
    const cap = window.setTimeout(finish, 3200);

    return () => {
      window.removeEventListener('load', finish);
      window.clearTimeout(cap);
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`preloader ${hidden ? 'is-hidden' : ''}`} aria-hidden={hidden}>
      <span className="sr-only" role="status">Loading Hotely Beach Resort</span>
      <div className="preloader-mark" aria-hidden="true">
        <svg viewBox="0 0 46 48" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 44V15h11M14 44V5h17v39M31 15h12v29H3M19 44v-9h7v9M18 10h9M18 17h9M18 24h9M7 20h3M7 26h3M7 32h3M7 38h3M35 20h4M35 26h4M35 32h4M35 38h4" />
          <path d="M19 29h7M18 5V2h9v3" />
        </svg>
      </div>
      <p className="preloader-word" aria-hidden="true">Hotely</p>
      <p className="preloader-sub" aria-hidden="true">Beach Resort</p>
      <div className="preloader-bar" aria-hidden="true"><span /></div>
      <div className="preloader-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none"><path d="M0 30 C 120 10, 240 50, 360 30 S 600 10, 720 30 S 960 50, 1080 30 S 1320 10, 1440 30 V64 H0 Z" fill="currentColor" /></svg>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none"><path d="M0 30 C 120 10, 240 50, 360 30 S 600 10, 720 30 S 960 50, 1080 30 S 1320 10, 1440 30 V64 H0 Z" fill="currentColor" /></svg>
      </div>
    </div>
  );
}
