
import type { Destination } from '@/lib/constants';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';
import type { HotelCategory, NicheSubCategory } from '@/types';

// Originally from src/app/destinations/[town]/page.tsx
export const destinationsData: { [key: string]: Destination } = {
  malaga: {
    id: 'malaga',
    name: 'Málaga',
    slug: 'malaga',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, 'malaga-port'),
    imageHint: 'Malaga port',
    overview: 'Málaga, the vibrant capital of the Costa del Sol, offers a rich tapestry of history, art, and culture. From ancient fortresses to modern museums, sun-kissed beaches to bustling tapas bars, Málaga captivates every visitor.',
    thingsToDo: ['Explore the Alcazaba and Gibralfaro Castle', 'Visit the Picasso Museum', 'Stroll along Muelle Uno waterfront', 'Relax on Malagueta Beach'],
    beaches: ['Malagueta Beach', 'La Misericordia Beach', 'Pedregalejo Beach'],
    hotelsIntro: 'Málaga boasts a wide range of accommodations, from luxurious hotels with stunning sea views to charming boutique guesthouses in the historic center. Find your perfect stay and enjoy Andalusian hospitality.',
    foodAndDrink: 'Indulge in Málaga\'s culinary delights, from fresh seafood and traditional espetos (sardine skewers) to innovative tapas and sweet Málaga wine. The Atarazanas Market is a must-visit for food lovers.',
    practicalInfo: 'Málaga is well-connected with an international airport (AGP). The city is easily navigable on foot, and public transport is efficient. Best time to visit is spring or autumn for pleasant weather.'
  },
  marbella: {
    id: 'marbella',
    name: 'Marbella',
    slug: 'marbella',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, 'marbella-yacht'),
    imageHint: 'Marbella yacht',
    overview: 'Marbella is synonymous with luxury, glamour, and sophistication. Famous for its upscale boutiques, Michelin-starred restaurants, exclusive beach clubs, and the dazzling Puerto Banús marina, Marbella is a playground for the rich and famous.',
    thingsToDo: ['Wander through Marbella Old Town (Casco Antiguo)', 'Shop at luxury boutiques in Puerto Banús', 'Relax at Nikki Beach Marbella', 'Play golf at world-class courses'],
    beaches: ['Playa de Puerto Banús', 'Cabopino Beach', 'Playa de Fontanilla'],
    hotelsIntro: 'Experience opulent stays in Marbella, with a plethora of five-star resorts, lavish villas, and chic beachfront hotels. Pamper yourself with top-notch amenities and impeccable service.',
    foodAndDrink: 'Marbella offers a gastronomic paradise, from high-end dining experiences to traditional chiringuitos serving fresh seafood. Enjoy international cuisine and vibrant nightlife.',
    practicalInfo: 'Marbella is about a 45-minute drive from Málaga Airport. Taxis and car rentals are readily available. The Golden Mile connects Marbella town with Puerto Banús.'
  },
   mijas: {
    id: 'mijas',
    name: 'Mijas Pueblo',
    slug: 'mijas',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, 'mijas-village'),
    imageHint: 'Mijas village',
    overview: 'Mijas Pueblo is a picturesque white-washed Andalusian village nestled in the mountainside, offering stunning panoramic views of the Mediterranean coast. Its charming narrow streets, donkey-taxis, and traditional crafts make it a popular day trip.',
    thingsToDo: ['Take a donkey-taxi ride', 'Visit the Ermita de la Virgen de la Peña', 'Explore the Plaza de Toros (bullring)', 'Enjoy the views from the Mirador'],
    beaches: ['Mijas Costa offers several beaches like La Cala de Mijas, a short drive away.'],
    hotelsIntro: 'While Mijas Pueblo has charming guesthouses, many visitors opt for hotels in nearby Mijas Costa for beach access. Options range from family-friendly resorts to quiet retreats.',
    foodAndDrink: 'Savor traditional Andalusian cuisine in Mijas Pueblo\'s cozy restaurants. Enjoy tapas, local wines, and homemade desserts while soaking in the village atmosphere.',
    practicalInfo: 'Mijas Pueblo is about a 30-minute drive from Málaga Airport. It can get crowded, especially during peak season. Wear comfortable shoes for walking the hilly streets.'
  },
   nerja: {
    id: 'nerja',
    name: 'Nerja',
    slug: 'nerja',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, 'nerja-coast'),
    imageHint: 'Nerja coast',
    overview: 'Nerja, located on the eastern tip of the Costa del Sol, is famed for its spectacular Nerja Caves, the stunning Balcón de Europa viewpoint, and its beautiful coves and beaches. It retains a more traditional Spanish charm compared to some other coastal towns.',
    thingsToDo: ['Explore the Nerja Caves (Cuevas de Nerja)', 'Walk along the Balcón de Europa', 'Kayak to Maro waterfalls', 'Hike in the Sierra de Almijara Natural Park'],
    beaches: ['Burriana Beach', 'Playa de Maro', 'Playa Carabeillo', 'Calahonda Beach'],
    hotelsIntro: 'Nerja offers a variety of accommodations, including beachfront hotels, charming villas with private pools, and budget-friendly apartments. Many options provide easy access to beaches and town amenities.',
    foodAndDrink: 'Enjoy fresh seafood paella at chiringuitos on Burriana Beach, sample local tapas in the old town, and try regional specialties. Nerja has a lively dining scene with options for all tastes.',
    practicalInfo: 'Nerja is about an hour\'s drive east of Málaga Airport. The town center is pedestrian-friendly. Consider renting a car to explore the surrounding natural parks and villages.'
  },
  benalmadena: {
    id: 'benalmadena',
    name: 'Benalmádena',
    slug: 'benalmadena',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, 'benalmadena-marina'),
    imageHint: 'Benalmadena marina',
    overview: 'Benalmádena is a diverse town offering something for everyone, from its bustling Puerto Marina and lively beaches to the charming old village (Benalmádena Pueblo) and the heights of Mount Calamorro accessible by cable car.',
    thingsToDo: ['Visit Puerto Marina, an award-winning marina', 'Take the cable car up Mount Calamorro for panoramic views', 'Explore Selwo Marina dolphinarium and Sea Life Benalmádena', 'Relax on Santa Ana Beach or Carvajal Beach', 'Wander through the traditional streets of Benalmádena Pueblo'],
    beaches: ['Santa Ana Beach', 'Carvajal Beach', 'Malapesquera Beach', 'Bil Bil Beach'],
    hotelsIntro: 'Benalmádena offers a wide array of hotels, from large family-friendly resorts along the coast to quieter options in Benalmádena Pueblo. Many hotels provide excellent amenities and sea views.',
    foodAndDrink: 'Discover a variety of dining options in Benalmádena, from international cuisine at the marina to traditional Spanish restaurants in the old village. Fresh seafood is a highlight.',
    practicalInfo: 'Benalmádena is conveniently located between Málaga and Fuengirola, approximately 20 minutes from Málaga Airport. It has good public transport links, including a coastal train.'
  },
  fuengirola: {
    id: 'fuengirola',
    name: 'Fuengirola',
    slug: 'fuengirola',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, 'fuengirola-castle'),
    imageHint: 'Fuengirola castle',
    overview: 'Fuengirola is a popular resort town known for its long sandy beaches, lively promenade, Bioparc Fuengirola (a unique zoo), and the historic Sohail Castle which hosts concerts and events.',
    thingsToDo: ['Walk along the Paseo Marítimo (promenade)', 'Visit Bioparc Fuengirola', 'Explore Sohail Castle', 'Enjoy the beaches like Los Boliches or Las Gaviotas', 'Shop at the large Tuesday market'],
    beaches: ['Los Boliches Beach', 'Las Gaviotas Beach', 'Carvajal Beach (shared with Benalmádena)', 'Torreblanca Beach'],
    hotelsIntro: 'Fuengirola has a vast selection of hotels catering to all budgets, from high-rise beachfront hotels with full amenities to smaller, family-run establishments. It\'s a popular choice for families and package holidays.',
    foodAndDrink: 'Fuengirola offers a diverse culinary scene with numerous chiringuitos (beachfront restaurants), tapas bars, and international eateries. The "fish alley" area is famous for its seafood restaurants.',
    practicalInfo: 'Fuengirola is easily accessible by coastal train from Málaga and the airport (approx. 35 minutes). The town is largely flat and walkable, especially along the extensive promenade.'
  },
  'puerto-banus': {
    id: 'puerto-banus',
    name: 'Puerto Banús',
    slug: 'puerto-banus',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, 'puerto-banus-shopping'),
    imageHint: 'Puerto Banus shopping',
    overview: 'Puerto Banús is a world-renowned luxury marina and shopping complex known for its high-end boutiques, superyachts, and vibrant nightlife near Marbella.',
    thingsToDo: ['Admire superyachts in the marina', 'Shop at designer boutiques', 'Enjoy celebrity spotting', 'Experience the nightlife at exclusive clubs'],
    beaches: ['Playa Puerto Banús', 'Playa Nueva Andalucía'],
    hotelsIntro: 'Puerto Banús offers glamorous hotels and apartments, many with direct views of the marina and easy access to its vibrant atmosphere.',
    foodAndDrink: 'Dine at chic restaurants overlooking the marina, enjoy cocktails at trendy bars, or have a meal at one of the many international eateries.',
    practicalInfo: 'Located near Marbella, Puerto Banús is known for its exclusivity. Parking can be expensive. It is a hotspot for luxury tourism.'
  },
  estepona: {
    id: 'estepona',
    name: 'Estepona',
    slug: 'estepona',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, 'estepona-flowers'),
    imageHint: 'Estepona flowers',
    overview: 'Estepona is a charming coastal town that has retained its traditional Andalusian character, featuring a beautiful old town with flower-filled streets and lovely beaches.',
    thingsToDo: ['Explore the picturesque Old Town (Centro Histórico)', 'Walk along the Paseo Marítimo', 'Visit the Orchidarium Estepona', 'Relax on Playa de la Rada'],
    beaches: ['Playa de la Rada', 'Playa El Cristo', 'Playa Bahía Dorada'],
    hotelsIntro: 'Estepona offers a range of hotels, from modern beachfront resorts to charming boutique hotels in the old town, catering to various tastes and budgets.',
    foodAndDrink: 'Enjoy fresh seafood at chiringuitos, traditional tapas in the old town, and a variety of international cuisines. Estepona has a growing culinary scene.',
    practicalInfo: 'Estepona is located west of Marbella. It has a more relaxed atmosphere than some other Costa del Sol towns, making it popular for families and those seeking authentic Spanish charm.'
  },
  'la-cala-de-mijas': {
    id: 'la-cala-de-mijas',
    name: 'La Cala de Mijas',
    slug: 'la-cala-de-mijas',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, 'la-cala-boardwalk'),
    imageHint: 'La Cala boardwalk',
    overview: 'La Cala de Mijas is a popular former fishing village in Mijas Costa, offering beautiful sandy beaches, a charming town center, and a scenic coastal boardwalk.',
    thingsToDo: ['Walk or cycle the Senda Litoral (coastal path)', 'Relax on La Cala beach', 'Explore the local market (Wednesdays & Saturdays)', 'Enjoy a meal at one of an array of restaurants'],
    beaches: ['Playa de La Cala (Butibamba)', 'Playa El Bombo', 'Playa de Calahonda (nearby)'],
    hotelsIntro: 'La Cala de Mijas provides a mix of beachfront hotels, holiday apartments, and villas, suitable for both families and couples.',
    foodAndDrink: 'La Cala has a good selection of restaurants and bars, from traditional Spanish eateries and chiringuitos to international cuisine.',
    practicalInfo: 'Located between Fuengirola and Marbella, La Cala is easily accessible. It has a friendly, village-like atmosphere.'
  }
};

const defaultHotelCategories: HotelCategory[] = [
  { name: 'Luxury Hotels', slug: 'luxury-hotels', description: 'Indulge in opulent stays with top-tier amenities and services.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "luxury hotel interior"), imageHint: "luxury hotel interior" },
  { name: 'Family-Friendly Hotels', slug: 'family-hotels', description: 'Find hotels with facilities and activities perfect for all ages.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "family pool fun"), imageHint: "family pool fun" },
  { name: 'Beachfront Hotels', slug: 'beachfront-hotels', description: 'Wake up to stunning sea views and direct beach access.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "beach hotel view"), imageHint: "beach hotel view" },
  { name: 'Boutique Hotels', slug: 'boutique-hotels', description: 'Discover unique charm and personalized service in smaller, stylish hotels.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "boutique hotel lobby"), imageHint: "boutique hotel lobby" },
  { name: 'Budget-Friendly Stays', slug: 'budget-hotels', description: 'Comfortable and affordable options for savvy travelers.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "hostel budget room"), imageHint: "hostel budget room" },
];


const initialHotelSiloData: { [key: string]: { name: string; categories: HotelCategory[] } } = {
  malaga: {
    name: 'Málaga',
    categories: [
      { name: 'Luxury Hotels', slug: 'luxury-hotels-malaga', description: 'Indulge in opulent stays with top-tier amenities and services in Málaga.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "malaga luxury hotel"), imageHint: "Málaga luxury hotel" },
      { name: 'Family-Friendly Hotels', slug: 'family-hotels-malaga', description: 'Find Málaga hotels with facilities and activities perfect for all ages.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "malaga family hotel"), imageHint: "Málaga family hotel" },
      { name: 'Beachfront Hotels', slug: 'malaga-beaches', description: 'Wake up to stunning sea views and direct beach access in Málaga.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "malaga beach hotel"), imageHint: "Málaga beach hotel" },
      { name: 'Boutique Hotels', slug: 'boutique-hotels-malaga', description: 'Discover unique charm and personalized service in Málaga\'s stylish hotels.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "malaga boutique hotel"), imageHint: "Málaga boutique hotel" },
    ],
  },
  marbella: {
    name: 'Marbella',
    categories: [
      { name: '5-Star Resorts', slug: 'luxury-hotels-marbella', description: 'Experience ultimate luxury and exclusivity in Marbella\'s finest resorts.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "Marbella resort pool"), imageHint: "Marbella resort pool" },
      { name: 'Golf Hotels', slug: 'golf-resorts', description: 'Stay and play at hotels with access to world-class golf courses.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "golf course hotel"), imageHint: "golf course hotel" },
      { name: 'Spa Hotels', slug: 'spa-retreats', description: 'Relax and rejuvenate with exceptional spa facilities and treatments.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "spa massage therapy"), imageHint: "spa massage therapy" },
    ],
  },
};


export const hotelSiloData = Object.keys(destinationsData).reduce((acc, slug) => {
    if (!acc[slug]) {
        acc[slug] = {
            name: destinationsData[slug].name,
            categories: defaultHotelCategories.map(category => ({
                ...category,
                slug: `${category.slug}-${slug}`,
                description: `Find and book ${category.name.toLowerCase()} in ${destinationsData[slug].name}. ${category.description}`,
                imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, `${slug}-${category.slug}`),
                imageHint: `${destinationsData[slug].name} ${category.name}`
            }))
        };
    }
    return acc;
}, initialHotelSiloData);



export const nicheInterestData: { [key: string]: { name: string; heroImage: string; imageHint?: string; intro: string; subCategories: NicheSubCategory[] } } = {
  golf: {
    name: 'Golfing in Costa del Sol',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, "golf course landscape"),
    imageHint: "golf course landscape",
    intro: "Welcome to Europe's Golf Paradise! The Costa del Sol, often dubbed the 'Costa del Golf', boasts over 70 world-class golf courses, stunning coastal views, and year-round sunshine, making it a premier destination for golfers of all levels.",
    subCategories: [
      { name: 'Best Golf Courses', slug: 'best-courses', description: 'Discover top-rated championship courses and hidden gems.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "golf green fairway"), imageHint:"golf green fairway" },
      { name: 'Golf Resorts', slug: 'golf-resorts', description: 'Find luxurious resorts with on-site golf facilities and amenities.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "golf resort hotel"), imageHint:"golf resort hotel" },
      { name: 'Marbella Golf Guide', slug: 'marbella-golf', description: 'Explore the prestigious golf scene in and around Marbella.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "Marbella golf view"), imageHint:"Marbella golf view" },
    ],
  },
  // Example for another niche, e.g., Watersports
  watersports: {
    name: 'Watersports Adventures',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400, "kayaking sea coast"),
    imageHint: "kayaking sea coast",
    intro: "Dive into the crystal-clear waters of the Mediterranean with a wide array of watersports. From thrilling jet ski rides to peaceful paddleboarding, Costa del Sol has it all.",
    subCategories: [
      { name: 'Jet Ski & Boating', slug: 'jet-ski-boating', description: 'Experience high-speed thrills or leisurely boat trips.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "jet ski action"), imageHint:"jet ski action" },
      { name: 'Scuba Diving & Snorkeling', slug: 'scuba-snorkeling', description: 'Explore vibrant underwater ecosystems and marine life.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "scuba diver underwater"), imageHint:"scuba diver underwater" },
      { name: 'Paddleboarding & Kayaking', slug: 'paddleboarding-kayaking', description: 'Enjoy serene waters and stunning coastal scenery.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "paddleboard sunset"), imageHint:"paddleboard sunset" },
    ],
  }
};
