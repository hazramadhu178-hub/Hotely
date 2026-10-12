const photo = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`;
const portrait = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=240&h=260&q=85`;

export const hotelInfo = {
  name: 'Hotely Beach Resort',
  location: 'North Male Atoll, Maldives',
  email: 'reservations@hotely.example',
  checkIn: '3:00 PM',
  checkOut: '11:00 AM',
};

export const images = {
  beach: '/images/tropical-beach.jpg',
  hotel: photo(14012389),
  pool: photo(261101),
  gardens: photo(14024794),
  loungers: photo(14036440),
  beachChairs: photo(3012297),
  sunsetPool: photo(7974839),
  oceanKing: photo(24807130),
  oceanTwin: photo(29702285),
  terraceKing: photo(29702284),
  juniorSuite: photo(28054852),
  cornerSuite: photo(26859049),
  familyRoom: photo(3688261),
  familySuite: photo(8082217),
  gardenRoom: photo(2725675),
  beachVilla: photo(2476632),
  poolVilla: photo(14024793),
  familyVilla: photo(14024788),
  restaurant: photo(14917393),
  terrace: photo(2092059),
  privateDining: photo(13005294),
  spa: photo(9146378),
  fitness: photo(38882512),
  breakfast: photo(6466304),
  reception: photo(7821349),
  sunset: '/images/resort-sunset.jpg',
  exterior: '/images/hotel-exterior.jpg',
};

export const heroSlides = [
  {
    lines: ['Hotely.', 'Your seaside', 'sanctuary.'],
    description: 'Ocean-view rooms, relaxed dining, and thoughtful service. Settle into a slower pace at Hotely Beach Resort.',
    image: images.beach,
    alt: 'A palm-lined beach and turquoise water beside a tropical hotel',
  },
  {
    lines: ['Hotely.', 'Rooms made', 'for rest.'],
    description: 'Soft linens, a private balcony, and the sea just beyond your window. Make yourself at home in our rooms and suites.',
    image: images.oceanKing,
    alt: 'A bright hotel bedroom opening onto a balcony with sea views',
  },
  {
    lines: ['Hotely.', 'Stay a little', 'longer.'],
    description: 'Unhurried breakfasts, afternoons by the pool, and dinner beneath the palms. Your time here is entirely your own.',
    image: images.pool,
    alt: 'A peaceful hotel swimming pool surrounded by tropical palms',
  },
  {
    lines: ['Hotely.', 'Evenings by', 'the water.'],
    description: 'Golden light on the infinity pool, a table at the Sunset Lounge, and nowhere else you need to be.',
    image: images.sunset,
    alt: 'The resort infinity pool at sunset with palms and golden light',
  },
];

export const roomCategories = ['All', 'Deluxe', 'Suites', 'Family', 'Villas'];
export const rooms = [
  {
    id: 'ocean-king', name: 'Deluxe Ocean King', category: 'Deluxe', image: images.oceanKing,
    price: 235, guests: 2, beds: '1 king bed', size: 38, view: 'Ocean view',
    description: 'Open the balcony doors to sea air and a view of the lagoon. A king-size bed, soft cotton linens, a rainfall shower, and a quiet sitting corner make this room an easy place to unwind.',
    features: ['Private ocean-facing balcony', 'Rainfall shower and bathrobes', 'Coffee machine and minibar', 'Daily housekeeping'],
  },
  {
    id: 'garden-king', name: 'Garden Terrace King', category: 'Deluxe', image: images.terraceKing,
    price: 195, guests: 2, beds: '1 king bed', size: 34, view: 'Garden terrace',
    description: 'A calm retreat overlooking the resort gardens. Enjoy a furnished terrace, a comfortable king-size bed, and thoughtful everyday essentials, with the pool and restaurant a short walk away.',
    features: ['Furnished garden terrace', 'Walk-in shower', 'Coffee and tea facilities', 'Daily housekeeping'],
  },
  {
    id: 'ocean-junior', name: 'Ocean Junior Suite', category: 'Suites', image: images.juniorSuite,
    price: 310, guests: 3, beds: '1 king bed and sofa bed', size: 58, view: 'Panoramic sea view',
    description: 'More room to slow down. This light-filled suite pairs a king-size sleeping area with a separate lounge, a sofa bed for a third guest, and broad views of the water.',
    features: ['Separate lounge with sofa bed', 'Ocean-facing windows', 'Bath and walk-in shower', 'Espresso machine'],
  },
  {
    id: 'poolside-family', name: 'Poolside Family Room', category: 'Family', image: images.familyRoom,
    price: 285, guests: 4, beds: '2 queen beds', size: 48, view: 'Poolside location',
    description: 'A comfortable base for days together. Two queen beds, generous storage, and an easy route to the pool give families the space and convenience they need.',
    features: ['Two queen-size beds', 'Space for a travel cot on request', 'Family-friendly bathroom', 'Close to the main pool'],
  },
  {
    id: 'beach', name: 'Beachfront ', category: 'Villas', image: images.beachVilla,
    price: 420, guests: 2, beds: '1 king bed', size: 80, view: 'Direct beach access',
    description: 'Step from your private terrace onto soft sand. A generous bedroom, indoor-outdoor living space, and a secluded garden bathroom bring a little more privacy to your seaside stay.',
    features: ['Direct access to the beach', 'Private furnished terrace', 'Indoor-outdoor bathroom', 'Dedicated villa concierge'],
  },
  {
    id: 'sunset-suite', name: 'Sunset Corner Suite', category: 'Suites', image: images.cornerSuite,
    price: 345, guests: 3, beds: '1 king bed and sofa bed', size: 65, view: 'Sunset-facing balcony',
    description: 'A peaceful corner of the hotel with room to stretch out. Enjoy a separate sitting area, a soaking tub, and a balcony made for quiet evenings as the sky changes color.',
    features: ['Corner balcony with sunset views', 'Separate living area', 'Deep soaking tub', 'Evening turndown service'],
  },
  {
    id: 'family-lagoon', name: 'Family Lagoon Suite', category: 'Family', image: images.familySuite,
    price: 460, guests: 6, beds: '2 queen beds and sofa bed', size: 92, view: 'Lagoon-facing suite',
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
    id: 'ocean-twin', name: 'Deluxe Ocean Twin', category: 'Deluxe', image: images.oceanTwin,
    price: 210, guests: 2, beds: '2 single beds', size: 35, view: 'Sea-view balcony',
    description: 'A bright and practical room for friends or family sharing a stay. Twin beds, a private balcony, and a modern bathroom provide the same thoughtful comforts as our king rooms.',
    features: ['Two comfortable single beds', 'Private sea-view balcony', 'Walk-in rainfall shower', 'Coffee and tea facilities'],
  },
  {
    id: 'accessible-garden', name: 'Accessible Garden Room', category: 'Deluxe', image: images.gardenRoom,
    price: 195, guests: 2, beds: '1 king bed', size: 42, view: 'Ground-floor garden view',
    description: 'Designed for a more comfortable, step-free stay. This ground-floor room includes a spacious layout, wider doorways, and an adapted bathroom. Contact our team to discuss your individual accessibility needs before booking.',
    features: ['Step-free ground-floor access', 'Wider doors and clear circulation space', 'Roll-in shower with grab rails', 'Lowered switches and storage'],
  },
  {
    id: 'honeymoon-suite', name: 'Honeymoon Suite', category: 'Suites', image: images.sunset,
    price: 390, guests: 2, beds: '1 king bed', size: 74, view: 'Private ocean terrace',
    description: 'A little more privacy for a special time together. A king bed, an oversized bath, and a private terrace set the scene for slow mornings and evenings with a view.',
    features: ['Secluded ocean-facing terrace', 'Oversized soaking bath', 'Separate dressing area', 'Celebration arrangements on request'],
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
    id: 'restaurant', name: 'The Palm Table', subtitle: 'Fresh coastal dining', image: images.restaurant,
    eyebrow: 'Restaurant & dining', location: 'Beachfront terrace', hours: 'Breakfast 7-10:30 AM / Dinner 6-10 PM',
    description: 'Start the day with fresh fruit, warm pastries, and breakfast cooked to order. In the evening, settle into seasonal seafood, garden vegetables, and relaxed dining by the water.',
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
    eyebrow: 'Lounge & bar', location: 'West-facing waterfront deck', hours: 'Daily, 4-11 PM',
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
    eyebrow: 'A special occasion', location: 'Beachside dining pavilion', hours: 'Evenings by prior arrangement',
    description: 'Celebrate an anniversary, a proposal, or simply time together with a private dinner beside the sea. Our dining team will help you plan the setting and menu.',
    details: ['Personalized menus by arrangement', 'Intimate tables and small celebrations', 'Advance booking recommended'],
    topic: 'dining', actionLabel: 'Plan a Private Dinner',
  },
];

export const facilities = [
  {
    id: 'beach', name: 'Resort Beach', subtitle: 'A few steps from your room', image: images.beach,
    eyebrow: 'Beachfront living', location: 'Along the resort shoreline', hours: 'Beach facilities, 7 AM-6 PM',
    description: 'A stretch of soft sand, clear water, and plenty of room to slow down. Enjoy the shore at your own pace, with loungers and shade close at hand.',
    details: ['Beach loungers and parasols', 'Towel service at the beach desk', 'Ask the team about daily swimming conditions'],
    topic: 'facilities', actionLabel: 'Ask About Beach Facilities',
  },
  { ...experiences[2], id: 'resort-pool', subtitle: 'Included with your stay' },
  { ...experiences[1], id: 'resort-spa', subtitle: 'Treatments by appointment' },
  {
    id: 'gardens', name: 'Palm Gardens', subtitle: 'Quiet paths and shaded seats', image: images.gardens,
    eyebrow: 'A quieter corner', location: 'Throughout the resort grounds', hours: 'Enjoy throughout your stay',
    description: 'Take the scenic route back to your room. Our palm-lined gardens offer shaded paths and quiet places to sit, with the scent of greenery and the sound of the sea nearby.',
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
    eyebrow: 'Mornings at Hotely', location: 'The Palm Table restaurant', hours: 'Daily, 7-10:30 AM',
    description: 'Start slowly with freshly baked pastries, seasonal fruit, and your favorite coffee. Breakfast at The Palm Table is included in the room rates shown on this website.',
    details: ['Breakfast included in displayed room rates', 'Hot dishes prepared to order', 'Please let us know about dietary requirements'],
    topic: 'dining', actionLabel: 'Ask About Breakfast',
  },
  {
    id: 'transfers', name: 'Airport Transfers', subtitle: 'An easier arrival', image: images.beachVilla,
    eyebrow: 'Getting here', location: 'Airport to resort arrival jetty', hours: 'Scheduled around your flight, by arrangement',
    description: 'Let our guest services team help coordinate your arrival from Velana International Airport. Share your flight details in advance so we can explain transfer options, timing, and charges.',
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
  { id: 'james', name: 'James Wilson', role: 'Executive Chef', department: 'Dining', image: portrait('photo-1500648767791-00dcc994a43e'), specialty: 'Fresh ingredients and coastal flavors', topic: 'dining', bio: 'James brings seasonal ingredients and a relaxed approach to The Palm Table. He works with the kitchen team on menus that feel generous, fresh, and perfectly suited to a day by the sea.' },
  { id: 'kristin', name: 'Kristin Watson', role: 'Guest Relations', department: 'Guest Services', image: portrait('photo-1524504388940-b1c1722653e1'), specialty: 'The details that make it your stay', topic: 'guest-services', bio: 'Whether you are visiting for a family holiday or an anniversary, Kristin helps with the details that matter to you. She is your point of contact for room preferences, special requests, and a smooth arrival.' },
  { id: 'benjamin', name: 'Benjamin Cooper', role: 'Head Concierge', department: 'Concierge', image: portrait('photo-1506794778202-cad84cf45f1d'), specialty: 'Helpful advice, thoughtful arrangements', topic: 'arrival', bio: 'Benjamin helps guests make the most of their time at the hotel. He coordinates transfers, dining plans, and practical requests so that your days feel easy from the moment you arrive.' },
  { id: 'darlene', name: 'Darlene Robertson', role: 'Spa Director', department: 'Wellness', image: portrait('photo-1544005313-94ddf0286df2'), specialty: 'Space to rest and recharge', topic: 'spa', bio: 'Darlene and her team create a calm, welcoming environment at Serenity Spa. She can help you choose a treatment, plan a couples appointment, or find a little quiet time during your stay.' },
  { id: 'marina', name: 'Marina McKinney', role: 'Events Manager', department: 'Celebrations', image: portrait('photo-1488426862026-3ee34a7d66df'), specialty: 'Occasions made personal', topic: 'events', bio: 'Marina turns your ideas into a thoughtful occasion, from intimate dinners to beachfront celebrations. She helps coordinate the setting, menus, and guest arrangements with care from start to finish.' },
];

export const testimonials = [
  { name: 'Eleanor Pena', stay: 'Deluxe Ocean King / Couples stay', image: portrait('photo-1534528741775-53994a69daeb'), quote: 'Our room was peaceful, the bed was wonderfully comfortable, and breakfast on the terrace became our favorite part of the day. The team made us feel welcome from the moment we arrived.' },
  { name: 'Theresa Webb', stay: 'Family Lagoon Suite / Family holiday', image: portrait('photo-1544005313-94ddf0286df2'), quote: 'The family suite gave us the space we needed, and the pool was an instant favorite with the children. Every request was met with a smile. A genuinely relaxing hotel for the whole family.' },
  { name: 'Darrell Steward', stay: 'Private Pool Villa / Weekend break', image: portrait('photo-1506794778202-cad84cf45f1d'), quote: 'We loved having our own little pool and a quiet terrace. Dinner at The Palm Table was excellent, and the concierge made our arrival and departure completely straightforward.' },
  { name: 'Cameron Williamson', stay: 'Sunset Corner Suite / Anniversary', image: portrait('photo-1500648767791-00dcc994a43e'), quote: 'A beautiful suite, a lovely sunset view, and a thoughtful anniversary dinner. It was the small touches from the hotel team that made the weekend feel so personal.' },
  { name: 'Savannah Nguyen', stay: 'Garden Terrace King / Spa break', image: portrait('photo-1524504388940-b1c1722653e1'), quote: 'Exactly the quiet break I needed. I spent the morning at the spa, the afternoon by the pool, and slept better than I had in weeks. The garden terrace was such a peaceful spot.' },
  { name: 'Dianne Russell', stay: 'Beachfront Villa / A week by the sea', image: portrait('photo-1488426862026-3ee34a7d66df'), quote: 'Being able to step straight onto the beach was wonderful. The villa was spacious and beautifully kept, and the staff remembered our preferences throughout the week.' },
];

export const films = [
  { id: 'resort-film', title: 'A closer look at resort life', location: 'Pools, palms, and room to unwind', image: images.pool, video: 'https://videos.pexels.com/video-files/32947362/14041585_1920_1080_25fps.mp4' },
  { id: 'pool-film', title: 'An afternoon by the pool', location: 'Find your favorite place to relax', image: images.loungers, video: 'https://videos.pexels.com/video-files/12701412/12701412-uhd_4096_2160_30fps.mp4' },
  { id: 'hotel-film', title: 'Your hotel, from a new perspective', location: 'A view across the resort grounds', image: images.beachVilla, video: 'https://videos.pexels.com/video-files/4185336/4185336-hd_1920_1080_25fps.mp4' },
];

export const articles = [
  {
    id: 'room-guide', title: 'Find your favorite room at Hotely.', image: images.oceanKing, date: '12 JUN 2026', readTime: '4 min', category: 'Rooms', action: 'rooms', actionLabel: 'Explore Rooms & Suites',
    intro: 'From a peaceful room for two to a villa with space for everyone, there is a comfortable corner of Hotely for your stay.',
    paragraphs: [
      'Our Deluxe rooms are a welcoming choice for a short break, with comfortable beds, modern bathrooms, and either sea or garden views. Choose an Ocean King for a balcony by the water, or a Garden Terrace King for a quieter setting among the palms.',
      'If you enjoy a little more space, our suites add separate sitting areas and generous bathrooms. Families can choose layouts with additional beds and shared living space, while our villas offer private terraces, beach access, or a pool of your own.',
      'Every room rate shown includes breakfast at The Palm Table, Wi-Fi, and access to the main pool and fitness studio. Check the room details for the exact bed arrangement and maximum occupancy. Our reservations team can help with accessibility requirements, cots, and special requests.',
    ],
  },
  {
    id: 'dining-guide', title: 'Fresh flavors, served beside the sea.', image: images.restaurant, date: '08 JUN 2026', readTime: '3 min', category: 'Dining', action: 'experience', experienceId: 'restaurant', actionLabel: 'Discover The Palm Table',
    intro: 'At The Palm Table, good food and an unhurried atmosphere are always on the menu.',
    paragraphs: [
      'Mornings begin with freshly baked pastries, seasonal fruit, eggs cooked to order, and coffee enjoyed on the terrace. Breakfast is included in our displayed room rates, so you can start the day without making any plans beyond your next cup.',
      'As evening arrives, the kitchen turns to coastal dishes, fresh vegetables, and plates designed for sharing. Choose a table inside or out under the palms. The Sunset Lounge is close by for a pre-dinner drink or a relaxed end to the night.',
      'For a birthday, anniversary, or quiet dinner for two, ask about our private dining pavilion. Please share dietary needs and allergies with the team in advance so we can discuss suitable menu options. Restaurant reservations and special arrangements are subject to confirmation.',
    ],
  },
  {
    id: 'wellness-guide', title: 'Make room for a little more relaxation.', image: images.spa, date: '02 JUN 2026', readTime: '4 min', category: 'Wellness', action: 'experience', experienceId: 'spa', actionLabel: 'Explore Serenity Spa',
    intro: 'A stay at Hotely is an invitation to do a little less and feel a little more rested.',
    paragraphs: [
      'Begin with a gentle swim or a short session in the fitness studio, then settle into breakfast without watching the clock. Our pool, shaded gardens, and beach loungers give you plenty of places to take the day at your own pace.',
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

/* ---------- Beach page ---------- */

export const beachHighlights = [
  { id: 'shore', title: 'A sheltered swimming lagoon', text: 'The reef sits a short swim offshore, so the water inside the lagoon stays calm, clear, and shallow for most of the day. It is an easy place to swim, float, or simply stand and watch the light move.' },
  { id: 'loungers', title: 'Loungers, shade, and towels', text: 'Cushioned loungers and parasols are spaced along the sand, with a towel station near the beach desk. There is no need to reserve a spot in the morning; our team will always find you somewhere comfortable.' },
  { id: 'sunsets', title: 'West-facing evenings', text: 'Our stretch of shoreline faces the sunset, so the last hour of daylight is the one most guests plan around. The Sunset Lounge sits just behind the sand if you would like a drink while you watch.' },
];

export const beachActivities = [
  { id: 'snorkelling', name: 'Snorkelling the house reef', detail: 'Equipment available / Guided sessions on request', text: 'The house reef is reachable from the beach and home to reef fish, rays, and occasional turtles. Masks and fins can be borrowed from the beach desk.' },
  { id: 'kayak', name: 'Kayaks and paddleboards', detail: 'Complimentary for resident guests', text: 'Take a kayak or paddleboard out across the lagoon in the calm of the early morning. Buoyancy aids are provided and the team will talk you through conditions.' },
  { id: 'sandbank', name: 'Sandbank picnic', detail: 'By arrangement, weather permitting', text: 'A short boat ride brings you to a quiet sandbank with a packed lunch, shade, and nothing else on the horizon.' },
  { id: 'sunset-cruise', name: 'Sunset cruise', detail: 'Evenings, by arrangement', text: 'A relaxed hour on the water as the light softens, with drinks on board and dolphins often following the boat.' },
];

export const beachNotes = [
  'Beach facilities are staffed from 7 AM to 6 PM, and towels are provided for resident guests.',
  'Swimming conditions are posted each morning at the beach desk. Please ask our team before entering the water.',
  'Children must be supervised by an adult at all times on the beach and in the sea.',
  'Reef-safe sun cream is available at reception; please avoid products containing oxybenzone.',
];

/* ---------- Amenities page ---------- */

export const amenityGroups = [
  {
    id: 'in-room', title: 'In your room', note: 'Included with every room, suite, and villa.',
    items: ['Air conditioning and ceiling fan', 'Complimentary high-speed Wi-Fi', 'Nespresso machine, kettle, and minibar', 'Safe, hairdryer, and bathrobes', 'Rainfall shower and refillable amenities', 'Daily housekeeping with evening turndown'],
  },
  {
    id: 'around', title: 'Around the resort', note: 'Open to all resident guests.',
    items: ['Infinity pool with poolside bar service', '120m of private beach with loungers', 'Serenity Spa treatment pavilions', 'Fitness studio open 6 AM to 10 PM', 'Palm gardens with shaded seating', 'Library corner with books and board games'],
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

export const galleryCategories = ['All', 'Rooms', 'Dining', 'Beach & pool', 'Wellness'];
export const galleryItems = [
  { id: 'g-exterior', category: 'Beach & pool', image: images.exterior, title: 'Villas among the palms', caption: 'Low-rise villas set between the gardens and the lagoon.' },
  { id: 'g-ocean-king', category: 'Rooms', image: images.oceanKing, title: 'Deluxe Ocean King', caption: 'Balcony doors opening onto the sea breeze.' },
  { id: 'g-restaurant', category: 'Dining', image: images.restaurant, title: 'The Palm Table', caption: 'Open-air tables a few steps from the sand.' },
  { id: 'g-sunset', category: 'Beach & pool', image: images.sunset, title: 'The infinity pool at dusk', caption: 'Golden light across the water before dinner.' },
  { id: 'g-spa', category: 'Wellness', image: images.spa, title: 'Serenity Spa', caption: 'Treatment pavilions tucked into the garden.' },
  { id: 'g-junior', category: 'Rooms', image: images.juniorSuite, title: 'Ocean Junior Suite', caption: 'A separate lounge with views across the lagoon.' },
  { id: 'g-breakfast', category: 'Dining', image: images.breakfast, title: 'Breakfast service', caption: 'Pastries, fruit, and coffee on the terrace.' },
  { id: 'g-pool', category: 'Beach & pool', image: images.pool, title: 'The main pool', caption: 'Palms, loungers, and an easy afternoon.' },
  { id: 'g-fitness', category: 'Wellness', image: images.fitness, title: 'Fitness studio', caption: 'Cardio and resistance equipment in the wellness wing.' },
  { id: 'g-villa', category: 'Rooms', image: images.poolVilla, title: 'Private Pool Villa', caption: 'Your own plunge pool and shaded terrace.' },
  { id: 'g-lounge', category: 'Dining', image: images.terrace, title: 'Sunset Lounge', caption: 'Cocktails on the west-facing deck.' },
  { id: 'g-beach', category: 'Beach & pool', image: images.beach, title: 'The resort beach', caption: 'Soft sand and a sheltered swimming lagoon.' },
];

/* ---------- Dining page ---------- */

export const diningVenues = [
  {
    id: 'palm-table', name: 'The Palm Table', style: 'All-day dining', image: images.restaurant,
    hours: 'Breakfast 7-10:30 AM / Dinner 6-10 PM', location: 'Beachfront terrace', dress: 'Relaxed; swimwear covered at dinner',
    text: 'Our main restaurant sits right on the sand, with tables inside and out. Mornings bring pastries, fruit, and eggs cooked to order. Evenings turn to grilled seafood, garden vegetables, and dishes made for sharing.',
    highlights: ['Breakfast included in all room rates', 'Daily catch from local boats', 'Vegetarian, vegan, and children\'s menus'],
  },
  {
    id: 'sunset-lounge', name: 'Sunset Lounge', style: 'Bar & small plates', image: images.terrace,
    hours: 'Daily, 4-11 PM', location: 'West-facing waterfront deck', dress: 'Casual',
    text: 'The natural place to end the afternoon. Signature cocktails, alcohol-free creations, chilled wine, and small sharing plates served as the sky changes colour over the lagoon.',
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
    hours: 'Evenings, booked in advance', location: 'Beachside pavilion or your villa', dress: 'As you wish',
    text: 'A table set apart for an anniversary, a proposal, or simply an evening to yourselves. Our dining team will help you shape the menu, the setting, and the timing.',
    highlights: ['Personalised menus with the chef', 'Beach, garden, or in-villa settings', 'Celebration cakes and flowers on request'],
  },
];

export const diningNotes = [
  'Breakfast at The Palm Table is included in every room rate shown on this website.',
  'Please share allergies and dietary requirements when enquiring and again on arrival.',
  'Dinner reservations are recommended during busier periods and can be arranged at reception.',
  'In-room dining is available daily from 7 AM to 11 PM.',
];

/* ---------- Shared: a day at the resort ---------- */

export const dayRhythm = [
  { id: 'dawn', time: '6:30 AM', title: 'First light on the water', text: 'The lagoon is at its stillest. Borrow a paddleboard, swim before the sun climbs, or take a coffee down to the sand.' },
  { id: 'morning', time: '7:00 AM', title: 'Breakfast at The Palm Table', text: 'Pastries from the oven, fruit cut that morning, and eggs cooked to order. Stay as long as you like; nobody is counting.' },
  { id: 'midday', time: '12:00 PM', title: 'Shade, water, repeat', text: 'Lunch at the pool bar, an hour with a book under a parasol, or a snorkel out to the house reef while the light is bright.' },
  { id: 'afternoon', time: '3:00 PM', title: 'Spa hour', text: 'The garden pavilions are quietest mid-afternoon. A massage, a facial, or simply somewhere cool and still to lie down.' },
  { id: 'sunset', time: '6:00 PM', title: 'The best seats face west', text: 'Drinks at the Sunset Lounge as the sky turns. This is the hour most guests end up planning their day around.' },
  { id: 'evening', time: '7:30 PM', title: 'Dinner under the palms', text: 'The day\'s catch, garden vegetables, and tables set close enough to the water that you can hear it.' },
];

export const awards = [
  { id: 'service', title: 'Excellence in Service', body: 'Island Hospitality Review', year: 'Sample award' },
  { id: 'design', title: 'Best Small Resort Design', body: 'Coastal Design Awards', year: 'Sample award' },
  { id: 'green', title: 'Green Key Certified', body: 'Sustainable Tourism Council', year: 'Sample award' },
  { id: 'dining', title: 'Island Restaurant of the Year', body: 'Atoll Food Guide', year: 'Sample award' },
];

/* ---------- Rooms page ---------- */

export const roomInclusions = [
  { id: 'breakfast', title: 'Breakfast every morning', text: 'A full breakfast at The Palm Table is included in every rate shown, served from 7:00 to 10:30 AM.' },
  { id: 'wifi', title: 'Wi-Fi throughout', text: 'Complimentary high-speed Wi-Fi in your room, by the pool and across the public areas.' },
  { id: 'facilities', title: 'Pool, beach & fitness', text: 'Loungers, towels, the infinity pool, the fitness studio, and the house reef are all included with your stay.' },
  { id: 'housekeeping', title: 'Daily housekeeping', text: 'Your room is serviced each morning, with an evening turndown in suites and villas.' },
  { id: 'water', title: 'Filtered drinking water', text: 'We bottle our own still and sparkling water on the island and refill it in your room each day.' },
  { id: 'kayaks', title: 'Kayaks & paddleboards', text: 'Non-motorised watercraft are free for resident guests whenever conditions allow.' },
];

export const roomPolicies = [
  { id: 'times', label: 'Check-in / Check-out', value: 'From 3:00 PM / By 11:00 AM' },
  { id: 'children', label: 'Children', value: 'Welcome at all ages; cots free of charge' },
  { id: 'extra-bed', label: 'Extra beds', value: 'Available in suites and villas on request' },
  { id: 'cancellation', label: 'Cancellation', value: 'Free up to 14 days before arrival (sample policy)' },
  { id: 'service', label: 'Service charge', value: '10%, added to the room summary' },
  { id: 'pets', label: 'Pets', value: 'Assistance animals welcome; please tell us in advance' },
];

/* ---------- Beach page ---------- */

export const marineLife = [
  { id: 'turtles', name: 'Green sea turtles', season: 'Year round', text: 'Often grazing on the seagrass beds just east of the jetty, usually in the first hours after sunrise.' },
  { id: 'rays', name: 'Eagle rays', season: 'Most mornings', text: 'They pass along the drop-off in small groups. Float still and they will usually carry on without minding you.' },
  { id: 'reef-fish', name: 'Reef fish', season: 'All day', text: 'Parrotfish, angelfish, and clown fish live on the house reef within easy snorkelling distance of the beach.' },
  { id: 'manta', name: 'Manta rays', season: 'Seasonal', text: 'During plankton blooms our boat team can often find mantas feeding at nearby cleaning stations.' },
];

export const beachDay = [
  { id: 'towels', time: 'From 7 AM', text: 'The beach desk opens. Collect towels, check the day\'s swimming conditions, and claim a lounger if you like an early start.' },
  { id: 'snorkel', time: '9 - 11 AM', text: 'The clearest water of the day. Best time for the house reef, with masks and fins available to borrow.' },
  { id: 'lunch', time: '12 - 3 PM', text: 'Lounger service from the pool bar, plus plenty of parasols and palm shade when the sun is at its strongest.' },
  { id: 'golden', time: '5 - 6:30 PM', text: 'Golden hour on the west-facing sand. The team brings out lanterns, and the Sunset Lounge opens behind you.' },
];

/* ---------- Amenities page ---------- */

export const serviceHours = [
  { id: 'reception', service: 'Reception & concierge', hours: 'Open 24 hours', location: 'Main lobby' },
  { id: 'breakfast-h', service: 'Breakfast', hours: '7:00 - 10:30 AM', location: 'The Palm Table' },
  { id: 'dinner-h', service: 'Dinner', hours: '6:00 - 10:00 PM', location: 'The Palm Table' },
  { id: 'pool-bar-h', service: 'Pool bar & light bites', hours: '10:00 AM - 6:00 PM', location: 'Poolside' },
  { id: 'lounge-h', service: 'Sunset Lounge', hours: '4:00 - 11:00 PM', location: 'Waterfront deck' },
  { id: 'spa-h', service: 'Serenity Spa', hours: '9:00 AM - 8:00 PM', location: 'Garden pavilion' },
  { id: 'gym-h', service: 'Fitness studio', hours: '6:00 AM - 10:00 PM', location: 'Wellness wing' },
  { id: 'beach-h', service: 'Beach desk & watersports', hours: '7:00 AM - 6:00 PM', location: 'Beachfront' },
  { id: 'room-service-h', service: 'In-room dining', hours: '7:00 AM - 11:00 PM', location: 'Your room' },
];

export const wellnessTreatments = [
  { id: 'massage', name: 'Island Calm Massage', duration: '50 or 80 minutes', text: 'A slow, full-body massage with warm coconut oil, built around however much pressure you prefer.' },
  { id: 'facial', name: 'Sea Mineral Facial', duration: '60 minutes', text: 'A cooling, hydrating facial using marine minerals, designed for skin that has spent a week in the sun.' },
  { id: 'couples', name: 'Two Together', duration: '80 minutes', text: 'Side-by-side treatments in the twin pavilion, finishing with tea on the private garden terrace.' },
  { id: 'yoga', name: 'Sunrise Yoga', duration: '45 minutes', text: 'A gentle group session on the beach deck, suitable for beginners. Mats and water are provided.' },
];

/* ---------- Dining page ---------- */

export const menuHighlights = [
  { id: 'breakfast-m', course: 'Breakfast', items: ['Tropical fruit with lime and mint', 'Coconut pancakes, palm syrup', 'Eggs any style, island sourdough', 'Freshly pressed juices and coffee'] },
  { id: 'starters', course: 'To begin', items: ['Reef fish ceviche, chilli and coriander', 'Grilled octopus, charred lemon', 'Garden tomato and herb salad', 'Warm flatbread, smoked aubergine'] },
  { id: 'mains', course: 'Mains', items: ['Catch of the day, grilled over coals', 'Maldivian tuna curry, steamed rice', 'Charred cauliflower, tahini, pomegranate', 'Slow-cooked lamb, island spices'] },
  { id: 'desserts', course: 'To finish', items: ['Coconut panna cotta', 'Mango and passionfruit sorbet', 'Dark chocolate tart, sea salt', 'Island cheese and honey'] },
];

export const chefNote = {
  name: 'James Wilson',
  role: 'Executive Chef',
  quote: 'We cook what the boats bring in and what the garden gives us that week. The menu changes because the island changes, and that is the best part of working here.',
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
  { id: 'quiet', title: 'How quiet it is', text: 'With 48 rooms there is rarely a queue, rarely a crowd at the pool, and always somewhere on the beach to sit alone.' },
  { id: 'food', title: 'Breakfast', text: 'The most-praised meal of the day, particularly the pastries, the fruit, and the fact that nobody rushes you out.' },
  { id: 'sunsets', title: 'The sunsets', text: 'Our west-facing shoreline comes up again and again, usually alongside a photograph taken from the Sunset Lounge.' },
];

/* ---------- Location page ---------- */

export const climate = [
  { id: 'dry', season: 'Dry season', months: 'December - April', temp: '28 - 31°C', text: 'Clear skies, light winds, and the calmest water of the year. The busiest and sunniest time to visit.' },
  { id: 'shoulder', season: 'Shoulder months', months: 'May & November', temp: '27 - 30°C', text: 'Warm with occasional short showers that pass quickly. Quieter beaches and better value room rates.' },
  { id: 'green', season: 'Green season', months: 'June - October', temp: '26 - 30°C', text: 'Lush gardens, dramatic skies, and good plankton activity, which is when manta sightings are most likely.' },
];

export const packingList = [
  'Reef-safe sun cream, a hat, and sunglasses',
  'Light, loose clothing and something for cooler evenings',
  'Swimwear for each day; laundry is available',
  'Any prescription medication in its original packaging',
  'A cover-up for walking between the beach and restaurant',
  'An adaptor for Type D and G sockets, 230V',
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
      { id: 'wifi-q', question: 'Is Wi-Fi really free everywhere?', answer: 'Yes, in rooms and across the resort, with no device limit and no premium tier. Signal is strongest in the rooms and public areas, and a little weaker at the far end of the beach.' },
      { id: 'power', question: 'What plugs and voltage do you use?', answer: 'Sockets are Type D and Type G at 230V, 50Hz. Universal adaptors can be borrowed from reception at no charge while you stay.' },
    ],
  },
  {
    id: 'practical', title: 'Practical questions',
    items: [
      { id: 'currency', question: 'What currency should I bring?', answer: 'The local currency is the Maldivian rufiyaa, but resorts generally work in US dollars and accept major cards. Cash is useful for tipping, though it is never expected.' },
      { id: 'medical', question: 'What happens if I need a doctor?', answer: 'Reception can arrange a doctor to visit the island, and our team includes first-aid trained staff. The nearest hospital is in Malé, around 35 minutes away by boat.' },
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
  { value: '48', label: 'Rooms, suites & villas', note: 'Across gardens and beachfront' },
  { value: '4.9', label: 'Average guest rating', note: 'From 1,240 demo reviews' },
  { value: '3', label: 'Restaurants & bars', note: 'Including beachfront dining' },
  { value: '120m', label: 'Private beachfront', note: 'With loungers and shade' },
];

/* ---------- Offers & packages ---------- */

export const offers = [
  {
    id: 'stay-longer', badge: 'Save up to 25%', title: 'Stay Longer, Slow Down', stay: '5 nights or more', image: images.poolVilla, from: 195,
    summary: 'The longer you stay, the more the island slows you down. Our longer-stay rates add extra dining and spa time to a restful break.',
    includes: ['Breakfast at The Palm Table each morning', 'One 50-minute spa treatment per stay', 'Room upgrade, subject to availability', 'Late check-out until 2 PM on departure day'],
    topic: 'offers', note: 'Sample rates for this demonstration. Inclusions and availability would be confirmed by the hotel at the time of booking.',
  },
  {
    id: 'honeymoon', badge: 'For two', title: 'Island Honeymoon', stay: '4 nights in a Beachfront Villa', image: images.beachVilla, from: 390,
    summary: 'A quiet villa, a private terrace, and evenings that belong entirely to the two of you. Our team can help with the small surprises too.',
    includes: ['Beachfront villa with private terrace', 'One private dinner for two on the beach', 'Couples treatment at Serenity Spa', 'Sparkling wine and fruit on arrival'],
    topic: 'offers', note: 'Celebration arrangements are made by request and confirmed separately by the hotel.',
  },
  {
    id: 'family-time', badge: 'Families', title: 'Family Time Together', stay: '3 nights, sleeping four or more', image: images.familySuite, from: 265,
    summary: 'Space for everyone, plus the practical things that make travelling with children easier. Family rooms and suites include additional bedding options.',
    includes: ['Family room or suite with extra bedding', 'Travel cot and highchair on request', 'Children\'s menu at The Palm Table', 'Complimentary access to the main pool'],
    topic: 'offers', note: 'Cots, highchairs, and children\'s dining are arranged by request, subject to availability.',
  },
  {
    id: 'rest-restore', badge: 'Wellness', title: 'Rest & Restore', stay: '3 nights with daily spa time', image: images.spa, from: 320,
    summary: 'Built around quiet mornings, gentle movement, and time at Serenity Spa. A good choice when the goal is simply to feel rested again.',
    includes: ['Daily 50-minute spa treatment', 'Breakfast at The Palm Table', 'Access to the fitness studio and pool', 'In-room dining credit for one evening'],
    topic: 'offers', note: 'Spa appointments are booked in advance and subject to therapist availability.',
  },
];

/* ---------- Good to know ---------- */

export const faqs = [
  {
    id: 'check-in', question: 'What are the check-in and check-out times?',
    answer: 'Rooms are ready from 3:00 PM on the day of arrival, and we ask that you check out by 11:00 AM. Reception is staffed 24 hours, so late arrivals are never a problem. If you arrive early, our team can store your luggage while you enjoy the pool or beach, and subject to availability we can often arrange an earlier check-in. Late check-out can be requested in advance and may carry an additional charge.',
  },
  {
    id: 'getting-here', question: 'How do we reach the resort from the airport?',
    answer: 'Most guests arrive at Velana International Airport near Malé. Our guest services team can help arrange a speedboat transfer, which takes roughly 35 minutes depending on conditions. Please share your flight number and arrival time at least 48 hours before you travel so we can coordinate timings. Transfers are arranged separately from your room rate.',
  },
  {
    id: 'breakfast', question: 'Is breakfast included in the room rate?',
    answer: 'Yes. All room rates shown on this website include a full breakfast at The Palm Table, served daily from 7:00 AM to 10:30 AM. Breakfast includes freshly baked pastries, seasonal fruit, hot dishes cooked to order, and coffee or tea. If you prefer to dine in your room, in-room dining is available from 7:00 AM.',
  },
  {
    id: 'dietary', question: 'Can you cater for dietary requirements and allergies?',
    answer: 'The kitchen team regularly prepares vegetarian, vegan, and gluten-free dishes, and can adapt most menus. Please tell us about any allergies or dietary needs when you make an enquiry, and again on arrival, so the team can discuss suitable options with you. While every care is taken, the hotel cannot guarantee a completely allergen-free environment.',
  },
  {
    id: 'accessible', question: 'Do you have accessible rooms and facilities?',
    answer: 'Yes. Our Accessible Garden Room offers step-free ground-floor access, wider doorways, and a roll-in shower with grab rails, and our Accessible Beach Suite adds a more spacious layout closer to the shore. The main restaurant, pool area, and spa are reachable without steps. Because individual needs vary, we encourage you to contact the team before booking so we can confirm the arrangement that suits you.',
  },
  {
    id: 'families', question: 'Are children welcome, and can you provide cots?',
    answer: 'Children are very welcome. Family rooms and suites offer additional bedding, and travel cots and highchairs can be requested in advance at no extra charge. The children\'s menu at The Palm Table is available at all services, and the main pool has a shallower area suitable for younger swimmers. Children must be supervised by an adult in the pool and sea at all times.',
  },
  {
    id: 'spa', question: 'How do spa appointments work?',
    answer: 'Serenity Spa is open daily from 9:00 AM to 8:00 PM, with individual and couples treatment rooms. Treatments are charged separately from your room and should be booked in advance, particularly during busier periods. When you enquire, let the team know about any health considerations, allergies, or preferences so they can recommend suitable treatments.',
  },
  {
    id: 'booking', question: 'Can I confirm a real reservation on this website?',
    answer: 'No. This website is a design demonstration for the fictional Hotely Beach Resort. Room availability, rates, offers, and reviews are illustrative, and a demo reservation is saved only in your own browser. Nothing is sent to a hotel, no payment details are collected, and no real booking is made. For real travel, please use a verified hotel or booking provider.',
  },
];

/* ---------- Location & getting here ---------- */

export const gettingHere = [
  { id: 'flight', icon: 'plane', title: 'Fly to Velana International', detail: 'Malé (MLE), Maldives', text: 'Most guests arrive on a direct or connecting flight to Velana International Airport, the main gateway to the Maldives.' },
  { id: 'welcome', icon: 'greeting', title: 'Meet our airport team', detail: 'Arrivals hall, by arrangement', text: 'A member of our team meets you in arrivals, helps with luggage, and confirms your transfer and arrival timing.' },
  { id: 'transfer', icon: 'boat', title: 'Scenic speedboat transfer', detail: 'Around 35 minutes', text: 'A short transfer across the lagoon brings you to our jetty, where a welcome drink and your room key are waiting.' },
];

export const hotelContact = {
  addressLine1: 'Hotely Beach Resort',
  addressLine2: 'North Male Atoll, Republic of Maldives',
  phone: '+960 665 0000 (demo number)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=North+Male+Atoll+Maldives',
};

/* ---------- Additional room types ---------- */

rooms.push(
  {
    id: 'premier-ocean', name: 'Premier Ocean Suite', category: 'Suites', image: images.sunsetPool,
    price: 365, guests: 3, beds: '1 king bed and daybed', size: 70, view: 'Elevated sea view',
    description: 'Set on the upper floor with a wide balcony overlooking the lagoon. A separate daybed corner, a generous bathroom, and evening light that fills the suite make this a favourite for longer stays.',
    features: ['Wide shaded balcony with sea view', 'Separate daybed lounge area', 'Bath and walk-in shower', 'Nespresso machine and minibar'],
  },
  {
    id: 'family-garden', name: 'Family Garden Room', category: 'Family', image: images.gardens,
    price: 265, guests: 4, beds: '1 king bed and 2 single beds', size: 54, view: 'Garden setting',
    description: 'A practical family room opening onto the gardens, with separate sleeping space for children and storage for all the extras that come with them.',
    features: ['Separate children\'s sleeping area', 'Garden patio with outdoor seating', 'Family bathroom with child-friendly bath', 'Travel cot and highchair on request'],
  },
  {
    id: 'accessible-beach', name: 'Accessible Beach Suite', category: 'Suites', image: images.beachChairs,
    price: 275, guests: 2, beds: '1 king bed', size: 46, view: 'Ground floor, close to the shore',
    description: 'A spacious ground-floor suite a short, level stroll from the beach, designed with wider doorways, clear circulation space, and an adapted bathroom. Please contact our team to discuss your individual accessibility requirements.',
    features: ['Step-free access to the beach path', 'Wider doorways and turning space', 'Roll-in shower with grab rails and seat', 'Lowered wardrobe rails and controls'],
  },
  {
    id: 'beach-residence', name: 'Beach House Residence', category: 'Villas', image: images.hotel,
    price: 880, guests: 6, beds: '3 king beds', size: 180, view: 'Absolute beachfront',
    description: 'Our largest accommodation, set directly on the sand. Three bedrooms, a private pool, an open-plan living space, and a dedicated concierge make it ideal for a family celebration or a stay with friends.',
    features: ['Three bedrooms, each with a bathroom', 'Private pool and beach terrace', 'Open-plan living and dining space', 'Dedicated villa concierge and chef service'],
  },
);