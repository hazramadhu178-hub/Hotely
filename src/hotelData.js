const photo = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`;
const portrait = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=240&h=260&q=85`;
const mountainPhoto = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;

export const hotelInfo = {
  name: 'Hotely Kanchenjunga Lodge',
  location: 'Pelling, Sikkim, India',
  email: 'reservations@hotely.example',
  checkIn: '3:00 PM',
  checkOut: '11:00 AM',
};

export const images = {
  mountains: mountainPhoto('photo-1506905925346-21bda4d32df4'),
  hotel: mountainPhoto('photo-1464822759023-fed622ff2c3b'),
  pool: photo(261101),
  gardens: mountainPhoto('photo-1470770841072-f978cf4d019e'),
  loungers: photo(14036440),
  mountainView: mountainPhoto('photo-1464278533981-50106e6176b1'),
  sunsetPool: photo(7974839),
  kanchenjungaRoom: mountainPhoto('photo-1519681393784-d120267933ba'),
  mountainTwin: mountainPhoto('photo-1464822759023-fed622ff2c3b'),
  terraceKing: photo(29702284),
  juniorSuite: photo(28054852),
  cornerSuite: photo(26859049),
  familyRoom: photo(3688261),
  familySuite: photo(8082217),
  gardenRoom: photo(2725675),
  mountainVilla: mountainPhoto('photo-1500534623283-312aade485b7'),
  poolVilla: photo(14024793),
  familyVilla: photo(14024788),
  restaurant: photo(14917393),
  terrace: photo(2092059),
  privateDining: photo(13005294),
  spa: photo(9146378),
  fitness: photo(38882512),
  breakfast: photo(6466304),
  reception: photo(7821349),
  sunset: mountainPhoto('photo-1470770841072-f978cf4d019e'),
  exterior: mountainPhoto('photo-1501785888041-af3ef285b470'),
};

export const heroSlides = [
  {
    lines: ['Hotely.', 'Your mountain', 'sanctuary.'],
    description: 'Kanchenjunga views, welcoming rooms, and thoughtful service. Settle into a slower pace at Hotely Kanchenjunga Lodge.',
    image: images.mountains,
    alt: 'Snow-capped Himalayan peaks above a green mountain valley',
  },
  {
    lines: ['Hotely.', 'Rooms made', 'for rest.'],
    description: 'Soft linens, a private balcony, and the Himalayan foothills beyond your window. Make yourself at home in our rooms and suites.',
    image: images.kanchenjungaRoom,
    alt: 'A bright hotel bedroom opening onto a balcony with mountain views',
  },
  {
    lines: ['Hotely.', 'Stay a little', 'longer.'],
    description: 'Unhurried breakfasts, afternoons by the pool, and dinner beneath the mountain sky. Your time here is entirely your own.',
    image: images.pool,
    alt: 'A peaceful hotel swimming pool with a mountain view',
  },
  {
    lines: ['Hotely.', 'Evenings in', 'the mountains.'],
    description: 'Golden light over the ridgelines, a table at the Sunset Lounge, and nowhere else you need to be.',
    image: images.sunset,
    alt: 'The Himalayan foothills at sunset in golden light',
  },
];

export const roomCategories = ['All', 'Deluxe', 'Suites', 'Family', 'Villas'];
export const rooms = [
  {
    id: 'kanchenjunga-king', name: 'Deluxe Kanchenjunga King', category: 'Deluxe', image: images.kanchenjungaRoom,
    price: 235, guests: 2, beds: '1 king bed', size: 38, view: 'Kanchenjunga view',
    description: 'Open the balcony doors to crisp mountain air and a view toward the high Himalaya. A king-size bed, soft cotton linens, a rainfall shower, and a quiet sitting corner make this room an easy place to unwind.',
    features: ['Private mountain-view balcony', 'Rainfall shower and bathrobes', 'Coffee machine and minibar', 'Daily housekeeping'],
  },
  {
    id: 'garden-king', name: 'Garden Terrace King', category: 'Deluxe', image: images.terraceKing,
    price: 195, guests: 2, beds: '1 king bed', size: 34, view: 'Garden terrace',
    description: 'A calm retreat overlooking the resort gardens. Enjoy a furnished terrace, a comfortable king-size bed, and thoughtful everyday essentials, with the pool and restaurant a short walk away.',
    features: ['Furnished garden terrace', 'Walk-in shower', 'Coffee and tea facilities', 'Daily housekeeping'],
  },
  {
    id: 'himalayan-junior', name: 'Himalayan Junior Suite', category: 'Suites', image: images.juniorSuite,
    price: 310, guests: 3, beds: '1 king bed and sofa bed', size: 58, view: 'Panoramic mountain view',
    description: 'More room to slow down. This light-filled suite pairs a king-size sleeping area with a separate lounge, a sofa bed for a third guest, and broad views of the Himalayan foothills.',
    features: ['Separate lounge with sofa bed', 'Mountain-facing windows', 'Bath and walk-in shower', 'Espresso machine'],
  },
  {
    id: 'poolside-family', name: 'Poolside Family Room', category: 'Family', image: images.familyRoom,
    price: 285, guests: 4, beds: '2 queen beds', size: 48, view: 'Poolside location',
    description: 'A comfortable base for days together. Two queen beds, generous storage, and an easy route to the pool give families the space and convenience they need.',
    features: ['Two queen-size beds', 'Space for a travel cot on request', 'Family-friendly bathroom', 'Close to the main pool'],
  },
  {
    id: 'mountain-villa', name: 'Mountain View Villa', category: 'Villas', image: images.mountainVilla,
    price: 420, guests: 2, beds: '1 king bed', size: 80, view: 'Private mountain-view terrace',
    description: 'Step onto your private terrace and take in the quiet of the hills. A generous bedroom, indoor-outdoor living space, and a secluded garden bathroom bring a little more privacy to your mountain stay.',
    features: ['Private mountain-view terrace', 'Furnished outdoor seating', 'Indoor-outdoor bathroom', 'Dedicated villa concierge'],
  },
  {
    id: 'sunset-suite', name: 'Sunset Corner Suite', category: 'Suites', image: images.cornerSuite,
    price: 345, guests: 3, beds: '1 king bed and sofa bed', size: 65, view: 'Sunset-facing balcony',
    description: 'A peaceful corner of the hotel with room to stretch out. Enjoy a separate sitting area, a soaking tub, and a balcony made for quiet evenings as the sky changes color.',
    features: ['Corner balcony with sunset views', 'Separate living area', 'Deep soaking tub', 'Evening turndown service'],
  },
  {
    id: 'family-valley', name: 'Family Valley Suite', category: 'Family', image: images.familySuite,
    price: 460, guests: 6, beds: '2 queen beds and sofa bed', size: 92, view: 'Valley-facing suite',
    description: 'Keep everyone together without giving up your own space. Two sleeping areas, a shared lounge, and a large bathroom make this suite a welcoming choice for a longer family holiday.',
    features: ['Two sleeping areas and a lounge', 'Sofa bed for two additional guests', 'Large family bathroom', 'Dining table and mini fridge'],
  },
  {
    id: 'private-pool', name: 'Private Pool Villa', category: 'Villas', image: images.poolVilla,
    price: 590, guests: 4, beds: '2 king beds', size: 110, view: 'Private plunge pool',
    description: 'Your own pool, a shaded terrace, and space to simply be. Two king bedrooms and a relaxed living area offer privacy for couples sharing a stay or families seeking extra comfort.',
    features: ['Private plunge pool', 'Two king bedrooms', 'Shaded outdoor dining area', 'Dedicated villa concierge'],
  },
  {
    id: 'mountain-twin', name: 'Deluxe Mountain Twin', category: 'Deluxe', image: images.mountainTwin,
    price: 210, guests: 2, beds: '2 single beds', size: 35, view: 'Mountain-view balcony',
    description: 'A bright and practical room for friends or family sharing a stay. Twin beds, a private balcony, and a modern bathroom provide the same thoughtful comforts as our king rooms.',
    features: ['Two comfortable single beds', 'Private mountain-view balcony', 'Walk-in rainfall shower', 'Coffee and tea facilities'],
  },
  {
    id: 'accessible-garden', name: 'Accessible Garden Room', category: 'Deluxe', image: images.gardenRoom,
    price: 195, guests: 2, beds: '1 king bed', size: 42, view: 'Ground-floor garden view',
    description: 'Designed for a more comfortable, step-free stay. This ground-floor room includes a spacious layout, wider doorways, and an adapted bathroom. Contact our team to discuss your individual accessibility needs before booking.',
    features: ['Step-free ground-floor access', 'Wider doors and clear circulation space', 'Roll-in shower with grab rails', 'Lowered switches and storage'],
  },
  {
    id: 'honeymoon-suite', name: 'Honeymoon Suite', category: 'Suites', image: images.sunset,
    price: 390, guests: 2, beds: '1 king bed', size: 74, view: 'Private mountain terrace',
    description: 'A little more privacy for a special time together. A king bed, an oversized bath, and a private terrace set the scene for slow mornings and evenings with a mountain view.',
    features: ['Secluded mountain-facing terrace', 'Oversized soaking bath', 'Separate dressing area', 'Celebration arrangements on request'],
  },
  {
    id: 'two-bedroom-villa', name: 'Two-Bedroom Villa', category: 'Villas', image: images.familyVilla,
    price: 720, guests: 6, beds: '2 king beds and sofa bed', size: 140, view: 'Garden and pool views',
    description: 'Make yourself at home in our most spacious accommodation. Two bedrooms, two bathrooms, a generous lounge, and an outdoor dining terrace are ideal for a family gathering or a stay with friends.',
    features: ['Two bedrooms with private bathrooms', 'Large lounge and sofa bed', 'Private pool and dining terrace', 'Dedicated villa concierge'],
  },
];

export const maxRoomGuests = Math.max(...rooms.map((room) => room.guests));

export const experiences = [
  {
    id: 'restaurant', name: 'The Summit Table', subtitle: 'Fresh Himalayan dining', image: images.restaurant,
    eyebrow: 'Restaurant & dining', location: 'Mountain-view terrace', hours: 'Breakfast 7-10:30 AM / Dinner 6-10 PM',
    description: 'Start the day with fresh fruit, warm pastries, and breakfast cooked to order. In the evening, settle into seasonal produce, local specialties, and relaxed dining with a view of the mountains.',
    details: ['Indoor and open-air seating', 'Vegetarian and children\'s menus available', 'Please share allergies when requesting a table'],
    topic: 'dining', actionLabel: 'Request a Table',
  },
  {
    id: 'spa', name: 'Serenity Spa', subtitle: 'Time to unwind', image: images.spa,
    eyebrow: 'Spa & wellbeing', location: 'The garden pavilion', hours: 'Daily, 9 AM-8 PM',
    description: 'A quiet space to pause. Choose from relaxing massages, restorative body treatments, and personalized facial rituals in our peaceful garden treatment rooms.',
    details: ['Individual and couples treatment rooms', 'Treatments by appointment', 'Tell the spa team about any relevant health considerations'],
    topic: 'spa', actionLabel: 'Request a Spa Visit',
  },
  {
    id: 'pool', name: 'Infinity Pool', subtitle: 'Your poolside pause', image: images.pool,
    eyebrow: 'Pool & relaxation', location: 'Central resort terrace', hours: 'Daily, 7 AM-8 PM',
    description: 'Find your favorite lounger, take a refreshing swim, or stay a little longer with a book. Our main pool is the relaxed heart of the resort, just steps from the pool bar.',
    details: ['Pool towels provided for hotel guests', 'Poolside drinks and light bites', 'Children must be supervised by an adult'],
    topic: 'facilities', actionLabel: 'Ask About the Pool',
  },
  {
    id: 'lounge', name: 'Sunset Lounge', subtitle: 'Drinks with a view', image: images.terrace,
    eyebrow: 'Lounge & bar', location: 'Mountain-view terrace', hours: 'Daily, 4-11 PM',
    description: 'Take a seat as the day softens into evening. Signature cocktails, alcohol-free creations, and small sharing plates make this an easy place to wind down.',
    details: ['Outdoor lounge seating', 'Cocktails and alcohol-free drinks', 'Light bites and sharing plates'],
    topic: 'dining', actionLabel: 'Request Lounge Seating',
  },
  {
    id: 'fitness', name: 'Fitness Studio', subtitle: 'Keep your own rhythm', image: images.fitness,
    eyebrow: 'Fitness & movement', location: 'Wellness wing', hours: 'Daily, 6 AM-10 PM',
    description: 'Keep your routine at your own pace with cardio equipment, free weights, and space to stretch. Our fitness studio is open to resident guests throughout the day.',
    details: ['Cardio and resistance equipment', 'Towels and drinking water provided', 'Personal training enquiries welcome'],
    topic: 'wellness', actionLabel: 'Ask Our Wellness Team',
  },
  {
    id: 'private-dining', name: 'Private Dining', subtitle: 'An evening for two', image: images.privateDining,
    eyebrow: 'A special occasion', location: 'Private mountain-view pavilion', hours: 'Evenings by prior arrangement',
    description: 'Celebrate an anniversary, a proposal, or simply time together with a private dinner overlooking the hills. Our dining team will help you plan the setting and menu.',
    details: ['Personalized menus by arrangement', 'Intimate tables and small celebrations', 'Advance booking recommended'],
    topic: 'dining', actionLabel: 'Plan a Private Dinner',
  },
];

export const facilities = [
  {
    id: 'mountain-trails', name: 'Mountain Trails', subtitle: 'The Himalaya at your doorstep', image: images.mountains,
    eyebrow: 'Mountain experiences', location: 'Guided routes around Pelling', hours: 'Daylight hours, weather permitting',
    description: 'Find a trail and take in the forest air, hillside villages, and changing views of Kanchenjunga. Our team can help arrange a local guide and recommend a route suited to your day.',
    details: ['Local guides available by arrangement', 'Routes selected for current weather and ability', 'Bring suitable footwear and water'],
    topic: 'facilities', actionLabel: 'Ask About Mountain Trails',
  },
  { ...experiences[2], id: 'resort-pool', subtitle: 'Included with your stay' },
  { ...experiences[1], id: 'resort-spa', subtitle: 'Treatments by appointment' },
  {
    id: 'gardens', name: 'Hillside Gardens', subtitle: 'Quiet paths and shaded seats', image: images.gardens,
    eyebrow: 'A quieter corner', location: 'Throughout the resort grounds', hours: 'Enjoy throughout your stay',
    description: 'Take the scenic route back to your room. Our hillside gardens offer quiet paths and places to sit, with fresh mountain air and views of the surrounding forest.',
    details: ['Shaded walking paths', 'Outdoor seating areas', 'Ask reception for the most accessible routes'],
    topic: 'facilities', actionLabel: 'Ask Our Concierge',
  },
  {
    id: 'concierge', name: 'Guest Concierge', subtitle: 'Here for you, day and night', image: images.reception,
    eyebrow: 'Personal service', location: 'Main lobby', hours: 'Available 24 hours',
    description: 'From an extra pillow to a special occasion, our concierge team is here to make your stay easier. Stop by the lobby for practical help and thoughtful recommendations.',
    details: ['Arrival and departure assistance', 'Dining and spa coordination', 'Luggage storage and special requests'],
    topic: 'guest-services', actionLabel: 'Contact the Concierge',
  },
  {
    id: 'breakfast', name: 'Breakfast', subtitle: 'A delicious start to the day', image: images.breakfast,
    eyebrow: 'Mornings at Hotely', location: 'The Summit Table restaurant', hours: 'Daily, 7-10:30 AM',
    description: 'Start slowly with freshly baked pastries, seasonal fruit, and your favorite coffee. Breakfast at The Summit Table is included in the room rates shown on this website.',
    details: ['Breakfast included in displayed room rates', 'Hot dishes prepared to order', 'Please let us know about dietary requirements'],
    topic: 'dining', actionLabel: 'Ask About Breakfast',
  },
  {
    id: 'transfers', name: 'Airport Transfers', subtitle: 'An easier arrival', image: images.mountains,
    eyebrow: 'Getting here', location: 'Bagdogra Airport to the lodge', hours: 'Scheduled around your flight, by arrangement',
    description: 'Let our guest services team help coordinate your arrival from Bagdogra Airport. Share your flight details in advance so we can explain transfer options, timing, and charges.',
    details: ['Advance arrangements required', 'Transfer charges are separate from room rates', 'Please include your flight number and arrival time'],
    topic: 'arrival', actionLabel: 'Request Transfer Details',
  },
  {
    id: 'room-service', name: 'In-Room Dining', subtitle: 'Comfort delivered to your door', image: images.terrace,
    eyebrow: 'Stay in a little longer', location: 'Your room, suite, or villa', hours: 'Daily, 7 AM-11 PM',
    description: 'Breakfast on your balcony, a relaxed lunch, or a quiet evening in. Our in-room dining selection lets you enjoy the hotel kitchen from the comfort of your own space.',
    details: ['Breakfast, light meals, and evening favorites', 'Dietary requests accommodated where possible', 'Menu prices and delivery charges available on request'],
    topic: 'dining', actionLabel: 'Ask About In-Room Dining',
  },
];

export const team = [
  { id: 'esther', name: 'Esther Howard', role: 'General Manager', department: 'Hospitality', image: portrait('photo-1534528741775-53994a69daeb'), specialty: 'A personal welcome, every time', topic: 'guest-services', bio: 'Esther leads the Hotely team with a simple belief: a great hotel stay comes down to genuine care. From your arrival to your final morning, she helps every department make you feel at home.' },
  { id: 'james', name: 'James Wilson', role: 'Executive Chef', department: 'Dining', image: portrait('photo-1500648767791-00dcc994a43e'), specialty: 'Fresh ingredients and Himalayan flavors', topic: 'dining', bio: 'James brings seasonal ingredients and a relaxed approach to The Summit Table. He works with the kitchen team on menus that feel generous, fresh, and rooted in the region.' },
  { id: 'kristin', name: 'Kristin Watson', role: 'Guest Relations', department: 'Guest Services', image: portrait('photo-1524504388940-b1c1722653e1'), specialty: 'The details that make it your stay', topic: 'guest-services', bio: 'Whether you are visiting for a family holiday or an anniversary, Kristin helps with the details that matter to you. She is your point of contact for room preferences, special requests, and a smooth arrival.' },
  { id: 'benjamin', name: 'Benjamin Cooper', role: 'Head Concierge', department: 'Concierge', image: portrait('photo-1506794778202-cad84cf45f1d'), specialty: 'Helpful advice, thoughtful arrangements', topic: 'arrival', bio: 'Benjamin helps guests make the most of their time at the hotel. He coordinates transfers, dining plans, and practical requests so that your days feel easy from the moment you arrive.' },
  { id: 'darlene', name: 'Darlene Robertson', role: 'Spa Director', department: 'Wellness', image: portrait('photo-1544005313-94ddf0286df2'), specialty: 'Space to rest and recharge', topic: 'spa', bio: 'Darlene and her team create a calm, welcoming environment at Serenity Spa. She can help you choose a treatment, plan a couples appointment, or find a little quiet time during your stay.' },
  { id: 'marina', name: 'Marina McKinney', role: 'Events Manager', department: 'Celebrations', image: portrait('photo-1488426862026-3ee34a7d66df'), specialty: 'Occasions made personal', topic: 'events', bio: 'Marina turns your ideas into a thoughtful occasion, from intimate dinners to celebrations with a view of the mountains. She helps coordinate the setting, menus, and guest arrangements with care from start to finish.' },
];

export const testimonials = [
  { name: 'Eleanor Pena', stay: 'Deluxe Kanchenjunga King / Couples stay', image: portrait('photo-1534528741775-53994a69daeb'), quote: 'Our room was peaceful, the bed was wonderfully comfortable, and breakfast on the terrace became our favorite part of the day. The team made us feel welcome from the moment we arrived.' },
  { name: 'Theresa Webb', stay: 'Family Valley Suite / Family holiday', image: portrait('photo-1544005313-94ddf0286df2'), quote: 'The family suite gave us the space we needed, and the pool was an instant favorite with the children. Every request was met with a smile. A genuinely relaxing lodge for the whole family.' },
  { name: 'Darrell Steward', stay: 'Private Pool Villa / Weekend break', image: portrait('photo-1506794778202-cad84cf45f1d'), quote: 'We loved having our own little pool and a quiet terrace. Dinner at The Summit Table was excellent, and the concierge made our arrival and departure completely straightforward.' },
  { name: 'Cameron Williamson', stay: 'Sunset Corner Suite / Anniversary', image: portrait('photo-1500648767791-00dcc994a43e'), quote: 'A beautiful suite, a lovely sunset view, and a thoughtful anniversary dinner. It was the small touches from the hotel team that made the weekend feel so personal.' },
  { name: 'Savannah Nguyen', stay: 'Garden Terrace King / Spa break', image: portrait('photo-1524504388940-b1c1722653e1'), quote: 'Exactly the quiet break I needed. I spent the morning at the spa, the afternoon by the pool, and slept better than I had in weeks. The garden terrace was such a peaceful spot.' },
  { name: 'Dianne Russell', stay: 'Mountain View Villa / A week in Sikkim', image: portrait('photo-1488426862026-3ee34a7d66df'), quote: 'Waking up to the mountain views was wonderful. The villa was spacious and beautifully kept, and the staff remembered our preferences throughout the week.' },
];

export const films = [
  { id: 'resort-film', title: 'A closer look at lodge life', location: 'Mountain views and room to unwind', image: images.mountains, video: 'https://videos.pexels.com/video-files/32947362/14041585_1920_1080_25fps.mp4' },
  { id: 'pool-film', title: 'An afternoon by the pool', location: 'Find your favorite place to relax', image: images.loungers, video: 'https://videos.pexels.com/video-files/12701412/12701412-uhd_4096_2160_30fps.mp4' },
  { id: 'hotel-film', title: 'Your lodge, from a new perspective', location: 'A view across the mountain valley', image: images.mountains, video: 'https://videos.pexels.com/video-files/4185336/4185336-hd_1920_1080_25fps.mp4' },
];

export const articles = [
  {
    id: 'room-guide', title: 'Find your favorite room at Hotely.', image: images.kanchenjungaRoom, date: '12 JUN 2026', readTime: '4 min', category: 'Rooms', action: 'rooms', actionLabel: 'Explore Rooms & Suites',
    intro: 'From a peaceful room for two to a villa with space for everyone, there is a comfortable corner of Hotely for your stay.',
    paragraphs: [
      'Our Deluxe rooms are a welcoming choice for a short break, with comfortable beds, modern bathrooms, and either mountain or garden views. Choose a Kanchenjunga King for a balcony facing the peaks, or a Garden Terrace King for a quieter setting among the trees.',
      'If you enjoy a little more space, our suites add separate sitting areas and generous bathrooms. Families can choose layouts with additional beds and shared living space, while our villas offer private terraces and room to take in the mountain air.',
      'Every room rate shown includes breakfast at The Summit Table, Wi-Fi, and access to the main pool and fitness studio. Check the room details for the exact bed arrangement and maximum occupancy. Our reservations team can help with accessibility requirements, cots, and special requests.',
    ],
  },
  {
    id: 'dining-guide', title: 'Fresh flavors, inspired by the mountains.', image: images.restaurant, date: '08 JUN 2026', readTime: '3 min', category: 'Dining', action: 'experience', experienceId: 'restaurant', actionLabel: 'Discover The Summit Table',
    intro: 'At The Summit Table, good food and an unhurried atmosphere are always on the menu.',
    paragraphs: [
      'Mornings begin with freshly baked pastries, seasonal fruit, eggs cooked to order, and coffee enjoyed on the terrace. Breakfast is included in our displayed room rates, so you can start the day without making any plans beyond your next cup.',
      'As evening arrives, the kitchen turns to regional dishes, fresh vegetables, and plates designed for sharing. Choose a table inside or out on the terrace. The Sunset Lounge is close by for a pre-dinner drink or a relaxed end to the night.',
      'For a birthday, anniversary, or quiet dinner for two, ask about our private dining pavilion. Please share dietary needs and allergies with the team in advance so we can discuss suitable menu options. Restaurant reservations and special arrangements are subject to confirmation.',
    ],
  },
  {
    id: 'wellness-guide', title: 'Make room for a little more relaxation.', image: images.spa, date: '02 JUN 2026', readTime: '4 min', category: 'Wellness', action: 'experience', experienceId: 'spa', actionLabel: 'Explore Serenity Spa',
    intro: 'A stay at Hotely is an invitation to do a little less and feel a little more rested.',
    paragraphs: [
      'Begin with a gentle stretch or a short session in the fitness studio, then settle into breakfast without watching the clock. Our pool, quiet gardens, and mountain-view terraces give you plenty of places to take the day at your own pace.',
      'Serenity Spa offers individual and couples appointments in peaceful treatment rooms. The team can explain the available massages, body treatments, and facial rituals so you can choose an experience that suits you.',
      'Spa treatments are charged separately from your room and should be arranged in advance. Let the team know about any relevant health considerations when enquiring. Sometimes the best plan is simply a comfortable room, a good book, and an early night.',
    ],
  },
];

export const contactTopics = [
  { value: 'reservations', label: 'Rooms and reservations' },
  { value: 'offers', label: 'Offers and packages' },
  { value: 'arrival', label: 'Arrival and airport transfers' },
  { value: 'dining', label: 'Restaurant and dining' },
  { value: 'spa', label: 'Spa appointments' },
  { value: 'wellness', label: 'Fitness and wellness' },
  { value: 'facilities', label: 'Hotel facilities' },
  { value: 'guest-services', label: 'Guest services and special requests' },
  { value: 'events', label: 'Weddings and private events' },
];

/* ---------- Mountain page ---------- */

export const mountainHighlights = [
  { id: 'kanchenjunga', title: 'Kanchenjunga on the horizon', text: 'On clear mornings, the great Himalayan range catches the first light. Our team can point you toward quiet viewpoints and help you choose the best time to look for the peaks.' },
  { id: 'forest', title: 'Forest paths and fresh air', text: 'Take an easy walk through the surrounding hills, with rhododendron woods, village lanes, and changing views along the way. Ask about local guides and routes suited to your pace.' },
  { id: 'culture', title: 'A sense of place', text: 'Sikkim’s monasteries, family-run cafés, and local traditions are part of what makes a stay here memorable. Our concierge can help arrange a respectful visit nearby.' },
];

export const mountainActivities = [
  { id: 'viewpoint', name: 'Sunrise at a Kanchenjunga viewpoint', detail: 'Early mornings / Weather permitting', text: 'Set out before breakfast to watch the peaks brighten with the sunrise. Our team can suggest a nearby viewpoint and help arrange local transport.' },
  { id: 'guided-walk', name: 'Guided hillside walks', detail: 'Local guide / Routes by arrangement', text: 'Explore forest paths and village trails with a local guide who knows the terrain. Choose a route to suit the weather, your experience, and the time you have.' },
  { id: 'monastery', name: 'Monastery and village visits', detail: 'Half-day outings / By arrangement', text: 'Visit nearby cultural landmarks with time to learn about local history and customs. Please follow guidance on photography and respectful dress.' },
  { id: 'birdwatching', name: 'Birdwatching in the hills', detail: 'Mornings / Guide recommended', text: 'The forests and gardens are rewarding places to slow down and listen. Ask our team about a local guide and what to bring for a quiet morning outdoors.' },
];

export const mountainNotes = [
  'Mountain weather can change quickly. Check conditions with our team before setting out.',
  'Wear sturdy footwear and warm layers, and carry water on walks and excursions.',
  'Choose a route suited to your fitness and experience; local guides are available by arrangement.',
  'Please respect local customs, wildlife, and trail guidance during your visit.',
];

/* ---------- Amenities page ---------- */

export const amenityGroups = [
  {
    id: 'in-room', title: 'In your room', note: 'Included with every room, suite, and villa.',
    items: ['Air conditioning and ceiling fan', 'Complimentary high-speed Wi-Fi', 'Nespresso machine, kettle, and minibar', 'Safe, hairdryer, and bathrobes', 'Rainfall shower and refillable amenities', 'Daily housekeeping with evening turndown'],
  },
  {
    id: 'around', title: 'Around the resort', note: 'Open to all resident guests.',
    items: ['Infinity pool with poolside bar service', 'Mountain-view terraces and quiet gardens', 'Serenity Spa treatment pavilions', 'Fitness studio open 6 AM to 10 PM', 'Hillside walking paths', 'Library corner with books and board games'],
  },
  {
    id: 'services', title: 'Services & support', note: 'Arranged by our guest services team.',
    items: ['24-hour reception and concierge', 'Airport transfer coordination', 'Laundry and pressing service', 'In-room dining, 7 AM to 11 PM', 'Childcare and babysitting on request', 'Doctor on call and first aid trained staff'],
  },
  {
    id: 'families', title: 'Families & accessibility', note: 'Please tell us your needs before arrival.',
    items: ['Travel cots and highchairs at no charge', 'Children\'s menus at every service', 'Shallow pool area for younger swimmers', 'Step-free routes to dining and the pool', 'Accessible rooms with roll-in showers', 'Connecting rooms available on request'],
  },
];

/* ---------- Gallery page ---------- */

export const galleryCategories = ['All', 'Rooms', 'Dining', 'Mountain views', 'Wellness'];
export const galleryItems = [
  { id: 'g-exterior', category: 'Mountain views', image: images.exterior, title: 'The lodge in the hills', caption: 'A quiet retreat among the green Himalayan foothills.' },
  { id: 'g-kanchenjunga-king', category: 'Rooms', image: images.kanchenjungaRoom, title: 'Deluxe Kanchenjunga King', caption: 'Balcony doors opening onto the mountain air.' },
  { id: 'g-restaurant', category: 'Dining', image: images.restaurant, title: 'The Summit Table', caption: 'A relaxed meal with a view of the hills.' },
  { id: 'g-sunset', category: 'Mountain views', image: images.sunset, title: 'The hills at dusk', caption: 'Golden light across the ridgelines before dinner.' },
  { id: 'g-spa', category: 'Wellness', image: images.spa, title: 'Serenity Spa', caption: 'Treatment pavilions tucked into the garden.' },
  { id: 'g-junior', category: 'Rooms', image: images.juniorSuite, title: 'Himalayan Junior Suite', caption: 'A separate lounge with views across the valley.' },
  { id: 'g-breakfast', category: 'Dining', image: images.breakfast, title: 'Breakfast service', caption: 'Pastries, fruit, and coffee on the terrace.' },
  { id: 'g-pool', category: 'Mountain views', image: images.pool, title: 'The lodge pool', caption: 'A quiet swim after a day in the hills.' },
  { id: 'g-fitness', category: 'Wellness', image: images.fitness, title: 'Fitness studio', caption: 'Cardio and resistance equipment in the wellness wing.' },
  { id: 'g-villa', category: 'Rooms', image: images.poolVilla, title: 'Private Pool Villa', caption: 'Your own plunge pool and shaded terrace.' },
  { id: 'g-lounge', category: 'Dining', image: images.terrace, title: 'Sunset Lounge', caption: 'Cocktails on the mountain-view terrace.' },
  { id: 'g-kanchenjunga', category: 'Mountain views', image: images.mountains, title: 'Kanchenjunga at first light', caption: 'The Himalayan peaks on a clear morning.' },
];

/* ---------- Dining page ---------- */

export const diningVenues = [
  {
    id: 'summit-table', name: 'The Summit Table', style: 'All-day dining', image: images.restaurant,
    hours: 'Breakfast 7-10:30 AM / Dinner 6-10 PM', location: 'Mountain-view terrace', dress: 'Relaxed; warm layers welcome outdoors',
    text: 'Our main restaurant has tables inside and out with views toward the hills. Mornings bring pastries, fruit, and eggs cooked to order. Evenings turn to regional specialties, seasonal vegetables, and dishes made for sharing.',
    highlights: ['Breakfast included in all room rates', 'Seasonal ingredients from local suppliers', 'Vegetarian, vegan, and children\'s menus'],
  },
  {
    id: 'sunset-lounge', name: 'Sunset Lounge', style: 'Bar & small plates', image: images.terrace,
    hours: 'Daily, 4-11 PM', location: 'Mountain-view terrace', dress: 'Casual',
    text: 'The natural place to end the afternoon. Signature cocktails, alcohol-free creations, chilled wine, and small sharing plates served as the sky changes colour over the hills.',
    highlights: ['Cocktails and alcohol-free mixology', 'Live acoustic sets twice weekly', 'Best seats for sunset, from around 6 PM'],
  },
  {
    id: 'pool-bar', name: 'The Pool Bar', style: 'Light bites', image: images.pool,
    hours: 'Daily, 10 AM-6 PM', location: 'Beside the infinity pool', dress: 'Swimwear welcome',
    text: 'Fresh juices, iced coffee, salads, sandwiches, and wood-fired flatbreads, brought to your lounger or served at the bar. An easy lunch that does not interrupt the day.',
    highlights: ['Lounger service around the pool', 'Fresh juices and smoothies', 'Light lunches and snacks all afternoon'],
  },
  {
    id: 'private-dining', name: 'Private Dining', style: 'By arrangement', image: images.privateDining,
    hours: 'Evenings, booked in advance', location: 'Garden pavilion or your villa', dress: 'As you wish',
    text: 'A table set apart for an anniversary, a proposal, or simply an evening to yourselves. Our dining team will help you shape the menu, the setting, and the timing.',
    highlights: ['Personalised menus with the chef', 'Garden or in-villa settings', 'Celebration cakes and flowers on request'],
  },
];

export const diningNotes = [
  'Breakfast at The Summit Table is included in every room rate shown on this website.',
  'Please share allergies and dietary requirements when enquiring and again on arrival.',
  'Dinner reservations are recommended during busier periods and can be arranged at reception.',
  'In-room dining is available daily from 7 AM to 11 PM.',
];

/* ---------- Shared: a day at the resort ---------- */

export const dayRhythm = [
  { id: 'dawn', time: '6:30 AM', title: 'First light on the peaks', text: 'The mountains catch the early light. Find a quiet viewpoint or take a coffee onto your balcony before the day begins.' },
  { id: 'morning', time: '7:00 AM', title: 'Breakfast at The Summit Table', text: 'Pastries from the oven, fruit cut that morning, and eggs cooked to order. Stay as long as you like; nobody is counting.' },
  { id: 'midday', time: '12:00 PM', title: 'A walk, then a long lunch', text: 'Take a guided walk through the hills, then return for lunch and a quiet hour with a book in the garden.' },
  { id: 'afternoon', time: '3:00 PM', title: 'Spa hour', text: 'The garden pavilions are quietest mid-afternoon. A massage, a facial, or simply somewhere cool and still to lie down.' },
  { id: 'sunset', time: '6:00 PM', title: 'The peaks in evening light', text: 'Drinks at the Sunset Lounge as the sky turns. This is the hour most guests end up planning their day around.' },
  { id: 'evening', time: '7:30 PM', title: 'Dinner with a mountain view', text: 'Seasonal produce, regional flavors, and tables set for a long, unhurried evening.' },
];

export const awards = [
  { id: 'service', title: 'Excellence in Service', body: 'Himalayan Hospitality Review', year: 'Sample award' },
  { id: 'design', title: 'Best Small Lodge Design', body: 'Mountain Design Awards', year: 'Sample award' },
  { id: 'green', title: 'Green Key Certified', body: 'Sustainable Tourism Council', year: 'Sample award' },
  { id: 'dining', title: 'Mountain Restaurant of the Year', body: 'Himalayan Food Guide', year: 'Sample award' },
];

/* ---------- Rooms page ---------- */

export const roomInclusions = [
  { id: 'breakfast', title: 'Breakfast every morning', text: 'A full breakfast at The Summit Table is included in every rate shown, served from 7:00 to 10:30 AM.' },
  { id: 'wifi', title: 'Wi-Fi throughout', text: 'Complimentary high-speed Wi-Fi in your room, by the pool and across the public areas.' },
  { id: 'facilities', title: 'Pool, gardens & fitness', text: 'The infinity pool, quiet gardens, hillside paths, and fitness studio are all included with your stay.' },
  { id: 'housekeeping', title: 'Daily housekeeping', text: 'Your room is serviced each morning, with an evening turndown in suites and villas.' },
  { id: 'water', title: 'Filtered drinking water', text: 'Filtered still and sparkling water is available throughout the lodge and refreshed in your room each day.' },
  { id: 'walks', title: 'Local walking advice', text: 'Our team can help you choose a nearby walk and arrange a local guide when needed.' },
];

export const roomPolicies = [
  { id: 'times', label: 'Check-in / Check-out', value: 'From 3:00 PM / By 11:00 AM' },
  { id: 'children', label: 'Children', value: 'Welcome at all ages; cots free of charge' },
  { id: 'extra-bed', label: 'Extra beds', value: 'Available in suites and villas on request' },
  { id: 'cancellation', label: 'Cancellation', value: 'Free up to 14 days before arrival (sample policy)' },
  { id: 'service', label: 'Service charge', value: '10%, added to the room summary' },
  { id: 'pets', label: 'Pets', value: 'Assistance animals welcome; please tell us in advance' },
];

/* ---------- Mountain page ---------- */

export const mountainDay = [
  { id: 'sunrise', time: 'Before 7 AM', text: 'Ask the team about the morning forecast and set out for a nearby viewpoint if conditions are clear.' },
  { id: 'breakfast', time: '7 - 10:30 AM', text: 'Return for a slow breakfast at The Summit Table, with warm pastries, fruit, and something cooked to order.' },
  { id: 'walk', time: '9 AM - noon', text: 'Join a local guide for a walk through the hills, choosing a route to suit the weather and your experience.' },
  { id: 'lunch', time: '12 - 3 PM', text: 'Take a long lunch, rest in the garden, or spend a quiet hour in the library.' },
  { id: 'golden', time: 'Late afternoon', text: 'Watch the last light change across the ridgelines from the lodge terrace.' },
];

/* ---------- Amenities page ---------- */

export const serviceHours = [
  { id: 'reception', service: 'Reception & concierge', hours: 'Open 24 hours', location: 'Main lobby' },
  { id: 'breakfast-h', service: 'Breakfast', hours: '7:00 - 10:30 AM', location: 'The Summit Table' },
  { id: 'dinner-h', service: 'Dinner', hours: '6:00 - 10:00 PM', location: 'The Summit Table' },
  { id: 'pool-bar-h', service: 'Pool bar & light bites', hours: '10:00 AM - 6:00 PM', location: 'Poolside' },
  { id: 'lounge-h', service: 'Sunset Lounge', hours: '4:00 - 11:00 PM', location: 'Mountain-view terrace' },
  { id: 'spa-h', service: 'Serenity Spa', hours: '9:00 AM - 8:00 PM', location: 'Garden pavilion' },
  { id: 'gym-h', service: 'Fitness studio', hours: '6:00 AM - 10:00 PM', location: 'Wellness wing' },
  { id: 'trails-h', service: 'Mountain walks & concierge', hours: 'Daylight hours, by arrangement', location: 'Reception' },
  { id: 'room-service-h', service: 'In-room dining', hours: '7:00 AM - 11:00 PM', location: 'Your room' },
];

export const wellnessTreatments = [
  { id: 'massage', name: 'Himalayan Calm Massage', duration: '50 or 80 minutes', text: 'A slow, full-body massage with warm botanical oils, built around however much pressure you prefer.' },
  { id: 'facial', name: 'Mountain Botanical Facial', duration: '60 minutes', text: 'A cooling, hydrating facial using botanical ingredients, designed to leave skin feeling rested and refreshed.' },
  { id: 'couples', name: 'Two Together', duration: '80 minutes', text: 'Side-by-side treatments in the twin pavilion, finishing with tea on the private garden terrace.' },
  { id: 'yoga', name: 'Sunrise Yoga', duration: '45 minutes', text: 'A gentle group session in the garden pavilion, suitable for beginners. Mats and water are provided.' },
];

/* ---------- Dining page ---------- */

export const menuHighlights = [
  { id: 'breakfast-m', course: 'Breakfast', items: ['Seasonal fruit with local honey', 'Warm pancakes with mountain honey', 'Eggs any style, house-baked bread', 'Freshly pressed juices and coffee'] },
  { id: 'starters', course: 'To begin', items: ['Smoked tomato soup with herbs', 'Grilled vegetables, charred lemon', 'Garden greens and local cheese', 'Warm flatbread, smoked aubergine'] },
  { id: 'mains', course: 'Mains', items: ['Slow-cooked lamb with mountain herbs', 'Sikkim-style vegetable curry and rice', 'Charred cauliflower, tahini, pomegranate', 'Handmade momos with house chutney'] },
  { id: 'desserts', course: 'To finish', items: ['Cardamom panna cotta', 'Seasonal fruit sorbet', 'Dark chocolate tart, mountain honey', 'Local cheese and preserves'] },
];

export const chefNote = {
  name: 'James Wilson',
  role: 'Executive Chef',
  quote: 'We cook with seasonal produce and local flavors. The menu changes with the hills and the harvest, and that is the best part of working here.',
};

/* ---------- Reviews page ---------- */

export const reviewStats = [
  { id: 'return', value: '96%', label: 'Would stay again' },
  { id: 'families', value: '4.9', label: 'Rated by families' },
  { id: 'couples', value: '5.0', label: 'Rated by couples' },
  { id: 'solo', value: '4.8', label: 'Rated by solo guests' },
];

export const reviewThemes = [
  { id: 'team', title: 'The team', text: 'Guests mention our staff more than anything else: remembering names, anticipating requests, and never making a fuss about it.' },
  { id: 'quiet', title: 'How quiet it is', text: 'With 48 rooms there is rarely a queue, rarely a crowd at the pool, and always a quiet corner with a view of the hills.' },
  { id: 'food', title: 'Breakfast', text: 'The most-praised meal of the day, particularly the pastries, the fruit, and the fact that nobody rushes you out.' },
  { id: 'sunsets', title: 'The mountain views', text: 'Clear mornings and the changing light on Kanchenjunga come up again and again, usually alongside a photograph from the Sunset Lounge.' },
];

/* ---------- Location page ---------- */

export const climate = [
  { id: 'spring', season: 'Spring', months: 'March - May', temp: '8 - 18°C', text: 'Clearer mornings and mild afternoons make this a lovely season for walks and mountain views. Evenings remain cool.' },
  { id: 'autumn-winter', season: 'Autumn & winter', months: 'October - February', temp: '2 - 16°C', text: 'Crisp air and clearer skies often bring the best chance of seeing Kanchenjunga. Pack warm layers for cold mornings and evenings.' },
  { id: 'monsoon', season: 'Monsoon', months: 'June - September', temp: '12 - 22°C', text: 'Rain can bring lush hillsides and misty views. Trails may be slippery, so check local conditions before heading out.' },
];

export const packingList = [
  'A warm layer, rain jacket, and comfortable walking shoes',
  'Light clothing for daytime and warmer layers for cool evenings',
  'Sunglasses, sun protection, and a reusable water bottle',
  'Any prescription medication in its original packaging',
  'A small daypack for walks and local excursions',
  'An adaptor for Type C, D, and M sockets, 230V',
];

/* ---------- FAQ page ---------- */

export const faqGroups = [
  {
    id: 'booking', title: 'Booking & payment',
    items: [
      { id: 'how-book', question: 'How do I make a reservation?', answer: 'On this demonstration site you can open any room and save a demo reservation to your browser. For a real hotel, reservations would be made through the hotel directly or a verified booking provider, usually with a card to hold the room.' },
      { id: 'deposit', question: 'Is a deposit required?', answer: 'A real property would typically take a deposit or card guarantee at the time of booking, with the balance settled on departure. No payment details are collected anywhere on this demonstration site.' },
      { id: 'change', question: 'Can I change my dates after booking?', answer: 'Our sample policy allows free changes up to 14 days before arrival, subject to availability in your room category. Within 14 days, a change may be treated as a cancellation and rebooking.' },
    ],
  },
  {
    id: 'stay', title: 'During your stay',
    items: [
      { id: 'laundry', question: 'Do you offer laundry?', answer: 'Yes. Same-day laundry and pressing are available when items are collected before 9 AM, charged per item. A laundry bag and price list are in your wardrobe.' },
      { id: 'wifi-q', question: 'Is Wi-Fi really free everywhere?', answer: 'Yes, in rooms and across the lodge, with no device limit and no premium tier. Signal is strongest in the rooms and public areas, and may be weaker on some hillside trails.' },
      { id: 'power', question: 'What plugs and voltage do you use?', answer: 'Sockets are Type C, Type D, and Type M at 230V, 50Hz. Universal adaptors can be borrowed from reception at no charge while you stay.' },
    ],
  },
  {
    id: 'practical', title: 'Practical questions',
    items: [
      { id: 'currency', question: 'What currency should I bring?', answer: 'The local currency is the Indian rupee (INR). Cards are accepted at the lodge, though carrying some cash can be useful for local purchases and tips.' },
      { id: 'medical', question: 'What happens if I need a doctor?', answer: 'Reception can help contact local medical services, and our team includes first-aid trained staff. Travel times to medical facilities can vary with road and weather conditions.' },
      { id: 'connectivity', question: 'Can I work from the resort?', answer: 'Many guests do. Rooms have a desk or writing table, Wi-Fi is included, and the library corner is a quiet alternative with power sockets and shade.' },
    ],
  },
];

/* ---------- Contact page ---------- */

export const contactDepartments = [
  { id: 'reservations-d', name: 'Reservations', detail: 'Rooms, rates, offers, and group enquiries', response: 'Replies within 4 hours' },
  { id: 'concierge-d', name: 'Concierge', detail: 'Transfers, excursions, and special requests', response: 'Replies within 2 hours' },
  { id: 'dining-d', name: 'Dining', detail: 'Tables, private dinners, and dietary needs', response: 'Replies within 6 hours' },
  { id: 'events-d', name: 'Events & weddings', detail: 'Celebrations, proposals, and private hire', response: 'Replies within 1 working day' },
];

export const regions = [
  { id: 'in', label: 'English (India)', currency: 'INR', locale: 'en-IN', rate: 83 },
  { id: 'us', label: 'English (US)', currency: 'USD', locale: 'en-US', rate: 1 },
  { id: 'uk', label: 'English (UK)', currency: 'GBP', locale: 'en-GB', rate: 0.79 },
  { id: 'au', label: 'English (AU)', currency: 'AUD', locale: 'en-AU', rate: 1.53 },
];

export function money(amount, region = regions[0]) {
  return new Intl.NumberFormat(region.locale, { style: 'currency', currency: region.currency, maximumFractionDigits: 0 }).format(amount * region.rate);
}

export function dateAfter(days, from) {
  const date = from ? new Date(`${from}T12:00:00`) : new Date();
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function shortDate(value) {
  return new Date(`${value}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function nightsBetween(checkIn, checkOut) {
  return Math.max(1, Math.round((Date.parse(checkOut) - Date.parse(checkIn)) / 86400000));
}

export function getRoomMatches(category, guests = 1) {
  return rooms.filter((room) => (category === 'All' || room.category === category) && room.guests >= Number(guests));
}

/* ---------- At a glance ---------- */

export const hotelStats = [
  { value: '48', label: 'Rooms, suites & villas', note: 'Set among hillside gardens' },
  { value: '4.9', label: 'Average guest rating', note: 'From 1,240 demo reviews' },
  { value: '3', label: 'Restaurants & bars', note: 'Including the mountain-view terrace' },
  { value: '8,586m', label: 'Kanchenjunga summit', note: 'A Himalayan giant on the horizon' },
];

/* ---------- Offers & packages ---------- */

export const offers = [
  {
    id: 'stay-longer', badge: 'Save up to 25%', title: 'Stay Longer, Slow Down', stay: '5 nights or more', image: images.poolVilla, from: 195,
    summary: 'The longer you stay, the more the mountains slow you down. Our longer-stay rates add extra dining and spa time to a restful break.',
    includes: ['Breakfast at The Summit Table each morning', 'One 50-minute spa treatment per stay', 'Room upgrade, subject to availability', 'Late check-out until 2 PM on departure day'],
    topic: 'offers', note: 'Sample rates for this demonstration. Inclusions and availability would be confirmed by the hotel at the time of booking.',
  },
  {
    id: 'honeymoon', badge: 'For two', title: 'Mountain Escape for Two', stay: '4 nights in a Mountain View Villa', image: images.mountainVilla, from: 390,
    summary: 'A quiet villa, a private terrace, and evenings that belong entirely to the two of you. Our team can help with the small surprises too.',
    includes: ['Mountain View Villa with private terrace', 'One private dinner for two in the garden pavilion', 'Couples treatment at Serenity Spa', 'Sparkling wine and fruit on arrival'],
    topic: 'offers', note: 'Celebration arrangements are made by request and confirmed separately by the hotel.',
  },
  {
    id: 'family-time', badge: 'Families', title: 'Family Time Together', stay: '3 nights, sleeping four or more', image: images.familySuite, from: 265,
    summary: 'Space for everyone, plus the practical things that make travelling with children easier. Family rooms and suites include additional bedding options.',
    includes: ['Family room or suite with extra bedding', 'Travel cot and highchair on request', 'Children\'s menu at The Summit Table', 'Complimentary access to the main pool'],
    topic: 'offers', note: 'Cots, highchairs, and children\'s dining are arranged by request, subject to availability.',
  },
  {
    id: 'rest-restore', badge: 'Wellness', title: 'Rest & Restore', stay: '3 nights with daily spa time', image: images.spa, from: 320,
    summary: 'Built around quiet mornings, gentle movement, and time at Serenity Spa. A good choice when the goal is simply to feel rested again.',
    includes: ['Daily 50-minute spa treatment', 'Breakfast at The Summit Table', 'Access to the fitness studio and pool', 'In-room dining credit for one evening'],
    topic: 'offers', note: 'Spa appointments are booked in advance and subject to therapist availability.',
  },
];

/* ---------- Good to know ---------- */

export const faqs = [
  {
    id: 'check-in', question: 'What are the check-in and check-out times?',
    answer: 'Rooms are ready from 3:00 PM on the day of arrival, and we ask that you check out by 11:00 AM. Reception is staffed 24 hours, so late arrivals are never a problem. If you arrive early, our team can store your luggage while you enjoy the lounge or gardens, and subject to availability we can often arrange an earlier check-in. Late check-out can be requested in advance and may carry an additional charge.',
  },
  {
    id: 'getting-here', question: 'How do we reach the resort from the airport?',
    answer: 'Most guests arrive at Bagdogra Airport (IXB), then continue to Pelling by road. Our guest services team can help arrange a car transfer, which usually takes around five hours depending on traffic and road conditions. Please share your flight number and arrival time at least 48 hours before you travel so we can coordinate timings. Transfers are arranged separately from your room rate.',
  },
  {
    id: 'breakfast', question: 'Is breakfast included in the room rate?',
    answer: 'Yes. All room rates shown on this website include a full breakfast at The Summit Table, served daily from 7:00 AM to 10:30 AM. Breakfast includes freshly baked pastries, seasonal fruit, hot dishes cooked to order, and coffee or tea. If you prefer to dine in your room, in-room dining is available from 7:00 AM.',
  },
  {
    id: 'dietary', question: 'Can you cater for dietary requirements and allergies?',
    answer: 'The kitchen team regularly prepares vegetarian, vegan, and gluten-free dishes, and can adapt most menus. Please tell us about any allergies or dietary needs when you make an enquiry, and again on arrival, so the team can discuss suitable options with you. While every care is taken, the hotel cannot guarantee a completely allergen-free environment.',
  },
  {
    id: 'accessible', question: 'Do you have accessible rooms and facilities?',
    answer: 'Yes. Our Accessible Garden Room offers step-free ground-floor access, wider doorways, and a roll-in shower with grab rails, and our Accessible Mountain Suite adds a more spacious layout. The main restaurant, pool area, and spa are reachable without steps. Because individual needs vary, we encourage you to contact the team before booking so we can confirm the arrangement that suits you.',
  },
  {
    id: 'families', question: 'Are children welcome, and can you provide cots?',
    answer: 'Children are very welcome. Family rooms and suites offer additional bedding, and travel cots and highchairs can be requested in advance at no extra charge. The children\'s menu at The Summit Table is available at all services, and the main pool has a shallower area suitable for younger swimmers. Children must be supervised by an adult in the pool and on excursions.',
  },
  {
    id: 'spa', question: 'How do spa appointments work?',
    answer: 'Serenity Spa is open daily from 9:00 AM to 8:00 PM, with individual and couples treatment rooms. Treatments are charged separately from your room and should be booked in advance, particularly during busier periods. When you enquire, let the team know about any health considerations, allergies, or preferences so they can recommend suitable treatments.',
  },
  {
    id: 'booking', question: 'Can I confirm a real reservation on this website?',
    answer: 'No. This website is a design demonstration for the fictional Hotely Kanchenjunga Lodge. Room availability, rates, offers, and reviews are illustrative, and a demo reservation is saved only in your own browser. Nothing is sent to a hotel, no payment details are collected, and no real booking is made. For real travel, please use a verified hotel or booking provider.',
  },
];

/* ---------- Location & getting here ---------- */

export const gettingHere = [
  { id: 'flight', icon: 'plane', title: 'Fly to Bagdogra Airport', detail: 'Bagdogra (IXB), West Bengal', text: 'Most guests arrive at Bagdogra Airport, the nearest major airport for the lodge. Flights and schedules vary by season.' },
  { id: 'welcome', icon: 'greeting', title: 'Meet our airport team', detail: 'Arrivals hall, by arrangement', text: 'A member of our team meets you in arrivals, helps with luggage, and confirms your transfer and arrival timing.' },
  { id: 'transfer', icon: 'car', title: 'Drive into the hills', detail: 'Around five hours from Bagdogra', text: 'A road transfer winds through the foothills to Pelling. Journey times vary with traffic and weather; our team will confirm the latest details before you travel.' },
];

export const hotelContact = {
  addressLine1: 'Hotely Kanchenjunga Lodge',
  addressLine2: 'Pelling, Sikkim, India',
  phone: '+91 3595 000 000 (demo number)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pelling%2C+Sikkim%2C+India',
};

/* ---------- Additional room types ---------- */

rooms.push(
  {
    id: 'premier-mountain', name: 'Premier Mountain Suite', category: 'Suites', image: images.sunsetPool,
    price: 365, guests: 3, beds: '1 king bed and daybed', size: 70, view: 'Elevated mountain view',
    description: 'Set on the upper floor with a wide balcony looking toward the Himalayan foothills. A separate daybed corner, a generous bathroom, and evening light that fills the suite make this a favourite for longer stays.',
    features: ['Wide shaded balcony with mountain view', 'Separate daybed lounge area', 'Bath and walk-in shower', 'Nespresso machine and minibar'],
  },
  {
    id: 'family-garden', name: 'Family Garden Room', category: 'Family', image: images.gardens,
    price: 265, guests: 4, beds: '1 king bed and 2 single beds', size: 54, view: 'Garden setting',
    description: 'A practical family room opening onto the gardens, with separate sleeping space for children and storage for all the extras that come with them.',
    features: ['Separate children\'s sleeping area', 'Garden patio with outdoor seating', 'Family bathroom with child-friendly bath', 'Travel cot and highchair on request'],
  },
  {
    id: 'accessible-mountain', name: 'Accessible Mountain Suite', category: 'Suites', image: images.mountainView,
    price: 275, guests: 2, beds: '1 king bed', size: 46, view: 'Ground floor, garden view',
    description: 'A spacious ground-floor suite with step-free access, wider doorways, clear circulation space, and an adapted bathroom. Please contact our team to discuss your individual accessibility requirements.',
    features: ['Step-free ground-floor access', 'Wider doorways and turning space', 'Roll-in shower with grab rails and seat', 'Lowered wardrobe rails and controls'],
  },
  {
    id: 'mountain-residence', name: 'Kanchenjunga Residence', category: 'Villas', image: images.hotel,
    price: 880, guests: 6, beds: '3 king beds', size: 180, view: 'Private mountain-view terrace',
    description: 'Our largest accommodation, with three bedrooms, a private pool, an open-plan living space, and a dedicated concierge. It is ideal for a family celebration or a stay with friends.',
    features: ['Three bedrooms, each with a bathroom', 'Private pool and mountain-view terrace', 'Open-plan living and dining space', 'Dedicated villa concierge and chef service'],
  },
);