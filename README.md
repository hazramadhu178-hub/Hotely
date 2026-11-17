# Hotely Kanchenjunga Lodge

A responsive, multi-page website for a fictional mountain lodge in Pelling, Sikkim, built with React, JavaScript, JSX, React Router, and Vite. Styling is CSS-first (roughly 85% custom CSS, 15% Tailwind utilities for inputs, buttons, and focus states).

## Pages

Routing uses `HashRouter`, so every page works when the build is served as a single static file.

| Route | Page file | Contents |
| --- | --- | --- |
| `/` | `pages/HomePage.jsx` | Hero carousel, stats, highlights, room search, featured rooms, dining, offers, films, reviews, journal |
| `/about` | `pages/AboutPage.jsx` | Story, hosting principles, timeline, team, sustainability |
| `/rooms` | `pages/RoomsPage.jsx` | Availability search, category tabs, 16 room types |
| `/mountains` | `pages/MountainsPage.jsx` | Kanchenjunga views, guided walks, local highlights, safety notes |
| `/amenities` | `pages/AmenitiesPage.jsx` | Four amenity groups, facilities, special requests |
| `/gallery` | `pages/GalleryPage.jsx` | Filterable photo grid and short films |
| `/dining` | `pages/DiningPage.jsx` | Four venues with hours, dress code, and highlights |
| `/reviews` | `pages/ReviewsPage.jsx` | Rating breakdown and full review wall |
| `/location` | `pages/LocationPage.jsx` | Contact card, arrival steps, nearby places, map panel |
| `/faq` | `pages/FaqPage.jsx` | Accordion of common questions |
| `/contact` | `pages/ContactPage.jsx` | Department cards, enquiry form, hotel details |

The former `/beach` URL redirects to `/mountains`.

## Structure

- `src/App.tsx` — router and route table.
- `src/context/AppContext.jsx` — shared state: region, saved rooms, reservations, booking, modals, toasts.
- `src/components/Layout.jsx` — header, footer, dialogs, toast region, scroll restoration.
- `src/components/` — `Header`, `Footer`, `PageHero`, `BookingForm`, `RoomCard`, `ExtraSections`, `HotelDialogs`, `ui`.
- `src/hotelData.js` — rooms, offers, dining, mountain experiences, gallery, amenities, FAQs, team, reviews, helpers.
- `src/index.css` — the full stylesheet, including all breakpoints.

## Design

Alpine greens, stone neutrals, and warm amber accents. Playfair Display headings with Poppins UI text. Every inner page opens with a shared `PageHero` (breadcrumb, title, intro, quick facts, arched image) so the pages feel like one site.

## Demo Scope

Hotely Kanchenjunga Lodge is fictional. Rooms, rates, offers, facilities, team, reviews, ratings, and contact details are illustrative. Searches filter sample data rather than live availability. Saved rooms, reservations, and enquiry drafts live only in your browser; there are no accounts, logins, or passwords. No emails are sent, nothing is booked, and no payments are taken.

Photography loads from Pexels and Unsplash, fonts from Google Fonts, and videos on demand from Pexels. Mountain landscape photography is sourced from Unsplash.

## Development

Run `npm run dev` to start Vite, or `npm run build` for the production build.
