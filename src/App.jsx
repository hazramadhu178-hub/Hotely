import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import RoomsPage from './pages/RoomsPage.jsx';
import BeachPage from './pages/BeachPage.jsx';
import AmenitiesPage from './pages/AmenitiesPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import DiningPage from './pages/DiningPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import LocationPage from './pages/LocationPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="rooms" element={<RoomsPage />} />
              <Route path="beach" element={<BeachPage />} />
              <Route path="amenities" element={<AmenitiesPage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="dining" element={<DiningPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="location" element={<LocationPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </HashRouter>
      </AppProvider>
    </ErrorBoundary>
  );
}
