import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, X } from 'lucide-react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Preloader from './Preloader.jsx';
import { Dialog } from './ui.jsx';
import { AccountContent, ArticleContent, ContactContent, EventContent, ExperienceContent, LegalContent, OfferContent, RoomContent, TeamContent, VideoContent } from './HotelDialogs.jsx';
import { experiences } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

/* Each route change returns the reader to the top, as a multi-page site would. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [pathname]);
  return null;
}

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    modal, setModal, closeModal, openRoom, openContact, openExperience,
    region, favorites, toggleFavorite, reservations, addReservation, cancelReservation,
    toast, setToast,
  } = useApp();

  const modalTitle = modal ? ({
    room: modal.item?.name,
    offer: modal.item?.title,
    contact: modal.context?.offer
      ? `Request the ${modal.context.offer.title} offer`
      : modal.context?.experience
        ? `Enquire about ${modal.context.experience.name}`
        : modal.context?.member
          ? `Contact ${modal.context.member.name.split(' ')[0]}'s team`
          : 'How can our hotel team help?',
    event: 'Plan your occasion at Hotely',
    team: 'Meet the people behind your stay',
    experience: modal.item?.name,
    article: 'The Hotely Hotel Journal',
    video: 'A look inside resort life',
    account: 'Your saved rooms & reservations',
    privacy: 'Privacy Policy',
    terms: 'Hotel Terms & Demo Information',
  }[modal.type]) : '';

  const handleArticleAction = (article) => {
    if (article.action === 'experience') {
      const experience = experiences.find((item) => item.id === article.experienceId);
      if (experience) { openExperience(experience); return; }
    }
    closeModal();
    navigate('/rooms');
  };

  return (
    <div className="hotely-app">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Preloader key={pathname} />
      <Header />
      <main id="main-content"><Outlet /></main>
      <Footer />

      {modal && (
        <Dialog
          key={`${modal.type}-${modal.item?.id || modal.item?.title || modal.context?.experience?.id || modal.context?.member?.id || modal.context?.topic || 'main'}`}
          title={modalTitle}
          onClose={closeModal}
          className={`dialog--${modal.type === 'room' ? 'hotel' : modal.type}`}
        >
          {modal.type === 'room' && <RoomContent room={modal.item} region={region} saved={favorites.includes(modal.item.id)} onSave={toggleFavorite} onReserve={addReservation} onClose={closeModal} />}
          {modal.type === 'offer' && <OfferContent offer={modal.item} onEnquire={openContact} />}
          {modal.type === 'contact' && <ContactContent context={modal.context} onClose={closeModal} />}
          {modal.type === 'event' && <EventContent onClose={closeModal} />}
          {modal.type === 'experience' && <ExperienceContent experience={modal.item} onEnquire={(experience) => openContact({ experience })} />}
          {modal.type === 'team' && <TeamContent member={modal.item} onContact={(member) => openContact({ member })} />}
          {modal.type === 'article' && <ArticleContent article={modal.item} onAction={handleArticleAction} />}
          {modal.type === 'video' && <VideoContent film={modal.item} />}
          {modal.type === 'account' && <AccountContent favorites={favorites} reservations={reservations} onRoom={openRoom} onCancelReservation={cancelReservation} onBrowseRooms={() => { closeModal(); navigate('/rooms'); }} />}
          {(modal.type === 'privacy' || modal.type === 'terms') && <LegalContent type={modal.type} />}
        </Dialog>
      )}

      <div className="toast-region" aria-live="polite" aria-atomic="true">
        {toast && (
          <div className="toast">
            <CheckCircle2 size={19} />
            <span>{toast}</span>
            <button type="button" aria-label="Dismiss notification" onClick={() => setToast('')}><X size={16} /></button>
          </div>
        )}
      </div>
    </div>
  );
}
