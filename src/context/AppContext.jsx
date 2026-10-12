import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useStoredState } from '../components/ui.jsx';
import { regions } from '../hotelData.js';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState('');
  const [favorites, setFavorites] = useStoredState('hotely-room-favorites', []);
  const [reservations, setReservations] = useStoredState('hotely-room-reservations', []);
  const [regionId, setRegionId] = useStoredState('hotely-region', 'us');
  const [newsletter, setNewsletter] = useStoredState('hotely-hotel-newsletter', null);

  useEffect(() => {
    if (!toast) return;
    const timeout = setTimeout(() => setToast(''), 4200);
    return () => clearTimeout(timeout);
  }, [toast]);

  const region = regions.find((item) => item.id === regionId) || regions[0];

  const closeModal = useCallback(() => setModal(null), []);
  const openRoom = useCallback((room) => setModal({ type: 'room', item: room }), []);
  const openOffer = useCallback((offer) => setModal({ type: 'offer', item: offer }), []);
  const openExperience = useCallback((experience) => setModal({ type: 'experience', item: experience }), []);
  const openContact = useCallback((context) => setModal({ type: 'contact', context }), []);
  const openEvent = useCallback(() => setModal({ type: 'event' }), []);
  const openAccount = useCallback(() => setModal({ type: 'account' }), []);

  const toggleFavorite = useCallback((id) => {
    let removed = false;
    setFavorites((previous) => {
      removed = previous.includes(id);
      return removed ? previous.filter((item) => item !== id) : [...previous, id];
    });
    setToast(removed ? 'This room has been removed from your favorites.' : 'Room saved. Find it under saved rooms in the footer.');
  }, [setFavorites]);

  const addReservation = useCallback((reservation) => {
    setReservations((previous) => [reservation, ...previous]);
  }, [setReservations]);

  const cancelReservation = useCallback((id) => {
    setReservations((previous) => previous.map((item) => item.id === id ? { ...item, status: 'cancelled' } : item));
  }, [setReservations]);

  const value = useMemo(() => ({
    modal, setModal, closeModal,
    openRoom, openOffer, openExperience, openContact, openEvent, openAccount,
    toast, setToast,
    favorites, toggleFavorite,
    reservations, addReservation, cancelReservation,
    region, setRegionId,
    newsletter, setNewsletter,
  }), [modal, toast, favorites, reservations, region, newsletter,
    closeModal, openRoom, openOffer, openExperience, openContact, openEvent, openAccount,
    toggleFavorite, addReservation, cancelReservation, setRegionId, setNewsletter]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used inside AppProvider');
  return context;
}
