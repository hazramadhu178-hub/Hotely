import { useEffect, useId, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

export const inputClass = 'w-full rounded-md border border-[#dfe5eb] bg-white px-4 py-3.5 text-sm text-[#36495c] outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-[#eef2f6]';

export function handleTabKeys(event) {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  const tabs = Array.from(event.currentTarget.querySelectorAll('[role="tab"]'));
  const currentIndex = tabs.indexOf(document.activeElement);
  if (currentIndex < 0 || !tabs.length) return;
  event.preventDefault();
  const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  tabs[nextIndex].focus();
  tabs[nextIndex].click();
}

export function Button({ children, variant = 'gradient', rounded = false, className = '', href, type = 'button', loading = false, ...props }) {
  const Tag = href ? 'a' : 'button';
  const isDisabled = loading || props.disabled;

  return (
    <Tag {...props} href={href} type={href ? undefined : type} className={`btn btn--${variant} inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-60 ${rounded ? 'rounded-full' : 'rounded-md'} ${className}`} disabled={isDisabled}>
      {loading && <span className="btn-spinner" aria-hidden="true" />}
      {children}
    </Tag>
  );
}

export function Logo({ onClick }) {
  return (
    <a className="brand" href="#home" aria-label="Hotely Beach Resort home" onClick={onClick}>
      <svg viewBox="0 0 46 48" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 44V15h11M14 44V5h17v39M31 15h12v29H3M19 44v-9h7v9M18 10h9M18 17h9M18 24h9M7 20h3M7 26h3M7 32h3M7 38h3M35 20h4M35 26h4M35 32h4M35 38h4" />
        <path d="M19 29h7M18 5V2h9v3" />
      </svg>
      <span>Hotely</span>
    </a>
  );
}

export function Facebook(props) {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" {...props}><path d="M14 21v-8h3l.5-3H14V8c0-.9.3-1.5 1.7-1.5H18V3.2A26 26 0 0 0 15 3c-3 0-5 1.8-5 5v2H7v3h3v8h4Z" /></svg>;
}

export function Instagram(props) {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

export function Linkedin(props) {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" {...props}><circle cx="5" cy="5" r="2" /><path d="M3 9h4v12H3zM10 9h4v1.7c.7-1.2 1.8-2 3.6-2 3 0 4.4 1.9 4.4 5.4V21h-4v-6.1c0-1.8-.5-2.8-1.8-2.8-1.5 0-2.2 1.1-2.2 3V21h-4Z" /></svg>;
}

export function Twitter(props) {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" {...props}><path d="M22 5.9a8.2 8.2 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.1 8.1 0 0 1-2.6 1 4.2 4.2 0 0 0-7.1 3.8A11.8 11.8 0 0 1 3.1 4.7a4.2 4.2 0 0 0 1.3 5.6 4 4 0 0 1-1.9-.5 4.2 4.2 0 0 0 3.4 4.1 4.3 4.3 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.6a11.8 11.8 0 0 0 18.2-9.9v-.5A8.7 8.7 0 0 0 22 5.9Z" /></svg>;
}

export function SectionHeading({ eyebrow, children, align = 'center', tone = 'blue', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      <span className={`eyebrow eyebrow--${tone}`}><i aria-hidden="true" />{eyebrow}</span>
      <h2>{children}</h2>
    </div>
  );
}

export function ArrowButton({ direction = 'right', label, onClick, square = false, className = '' }) {
  const Icon = square ? (direction === 'left' ? ArrowLeft : ArrowRight) : (direction === 'left' ? ChevronLeft : ChevronRight);
  return (
    <button type="button" className={`arrow-button ${square ? 'arrow-button--square' : ''} ${className}`} onClick={onClick} aria-label={label}>
      <Icon size={square ? 23 : 18} strokeWidth={1.4} />
    </button>
  );
}

export function Photo({ src, alt, className = '', eager = false, ...props }) {
  return <img src={src} alt={alt} className={className} loading={eager ? 'eager' : 'lazy'} decoding="async" {...props} onError={(event) => {
    if (!event.currentTarget.dataset.fallback) {
      event.currentTarget.dataset.fallback = 'true';
      event.currentTarget.src = '/images/tropical-beach.jpg';
    }
  }} />;
}

export function Dialog({ title, onClose, children, className = '' }) {
  const ref = useRef(null);
  const headingId = useId();

  useEffect(() => {
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog.close();
    };
  }, []);

  return (
    <dialog ref={ref} className={`dialog ${className}`} aria-labelledby={headingId} onCancel={onClose} onClick={(event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (event.target === event.currentTarget && outside) onClose();
    }}>
      <div className="dialog-inner">
        <div className="dialog-heading">
          <h2 id={headingId}>{title}</h2>
          <button type="button" className="icon-button dialog-close" aria-label="Close dialog" onClick={onClose}><X size={21} /></button>
        </div>
        {children}
      </div>
    </dialog>
  );
}

export function useStoredState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* The page also works when browser storage is unavailable. */ }
  }, [key, value]);

  return [value, setValue];
}

export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    const reveal = (element) => element.classList.add('is-visible');
    const revealAll = () => elements.forEach(reveal);

    let reduced = false;
    try {
      reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      reduced = false;
    }

    // Without observer support, or when motion is reduced, show everything at once.
    if (reduced || typeof IntersectionObserver === 'undefined') {
      revealAll();
      return undefined;
    }

    document.documentElement.classList.add('motion-ready');

    // Anything already on screen is shown straight away, so the first view is never blank.
    elements.forEach((element) => {
      const { top } = element.getBoundingClientRect();
      if (top < window.innerHeight) reveal(element);
    });

    // threshold stays 0: sections are often taller than the viewport, so a ratio-based
    // threshold may never be reached and the content would stay permanently hidden.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '120px 0px' });

    elements.forEach((element) => observer.observe(element));

    // Final safety net: content must never stay invisible if the observer misbehaves.
    const fallback = window.setTimeout(revealAll, 1500);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);
}