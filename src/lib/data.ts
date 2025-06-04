
import type { Destination } from '@/lib/constants';
import { PLACEHOLDER_IMAGE_URL, GETYOURGUIDE_AFFILIATE_LINK_MALAGA_ACTIVITY } from '@/lib/constants';
import type { HotelCategory, NicheSubCategory } from '@/types';

// Originally from src/app/destinations/[town]/page.tsx
export const destinationsData: { [key: string]: Destination } = {
  malaga: {
    id: 'malaga',
    name: 'Málaga City',
    slug: 'malaga',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: 'Malaga skyline port',
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
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: 'Marbella Puerto Banus',
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
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: 'Mijas white village',
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
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: 'Nerja Balcon Europa',
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
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: 'Benalmadena marina boats',
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
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: 'Fuengirola beach promenade',
    overview: 'Fuengirola is a popular resort town known for its long sandy beaches, lively promenade, Bioparc Fuengirola (a unique zoo), and the historic Sohail Castle which hosts concerts and events.',
    thingsToDo: ['Walk along the Paseo Marítimo (promenade)', 'Visit Bioparc Fuengirola', 'Explore Sohail Castle', 'Enjoy the beaches like Los Boliches or Las Gaviotas', 'Shop at the large Tuesday market'],
    beaches: ['Los Boliches Beach', 'Las Gaviotas Beach', 'Carvajal Beach (shared with Benalmádena)', 'Torreblanca Beach'],
    hotelsIntro: 'Fuengirola has a vast selection of hotels catering to all budgets, from high-rise beachfront hotels with full amenities to smaller, family-run establishments. It\'s a popular choice for families and package holidays.',
    foodAndDrink: 'Fuengirola offers a diverse culinary scene with numerous chiringuitos (beachfront restaurants), tapas bars, and international eateries. The "fish alley" area is famous for its seafood restaurants.',
    practicalInfo: 'Fuengirola is easily accessible by coastal train from Málaga and the airport (approx. 35 minutes). The town is largely flat and walkable, especially along the extensive promenade.'
  }
};

// Originally from src/app/hotels/[region]/page.tsx
export const hotelSiloData: { [key: string]: { name: string; categories: HotelCategory[] } } = {
  malaga: {
    name: 'Málaga',
    categories: [
      { name: 'Luxury Hotels', slug: 'luxury', description: 'Indulge in opulent stays with top-tier amenities and services.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "luxury hotel interior" },
      { name: 'Family-Friendly Hotels', slug: 'family-friendly', description: 'Find hotels with facilities and activities perfect for all ages.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "family pool fun" },
      { name: 'Beachfront Hotels', slug: 'beachfront', description: 'Wake up to stunning sea views and direct beach access.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "beach hotel view" },
      { name: 'Boutique Hotels', slug: 'boutique', description: 'Discover unique charm and personalized service in smaller, stylish hotels.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "boutique hotel lobby" },
    ],
  },
  marbella: {
    name: 'Marbella',
    categories: [
      { name: '5-Star Resorts', slug: '5-star-resorts', description: 'Experience ultimate luxury and exclusivity in Marbella\'s finest resorts.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "Marbella resort pool" },
      { name: 'Golf Hotels', slug: 'golf-hotels', description: 'Stay and play at hotels with access to world-class golf courses.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "golf course hotel" },
      { name: 'Spa Hotels', slug: 'spa-hotels', description: 'Relax and rejuvenate with exceptional spa facilities and treatments.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "spa massage therapy" },
    ],
  },
};

// Originally from src/app/interests/[niche]/page.tsx
export const nicheInterestData: { [key: string]: { name: string; heroImage: string; imageHint?: string; intro: string; subCategories: NicheSubCategory[] } } = {
  golf: {
    name: 'Golfing in Costa del Sol',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: "golf course landscape",
    intro: "Welcome to Europe's Golf Paradise! The Costa del Sol, often dubbed the 'Costa del Golf', boasts over 70 world-class golf courses, stunning coastal views, and year-round sunshine, making it a premier destination for golfers of all levels.",
    subCategories: [
      { name: 'Best Golf Courses', slug: 'best-courses', description: 'Discover top-rated championship courses and hidden gems.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"golf green fairway" },
      { name: 'Golf Resorts', slug: 'golf-resorts', description: 'Find luxurious resorts with on-site golf facilities and amenities.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"golf resort hotel" },
      { name: 'Marbella Golf Guide', slug: 'marbella-golf', description: 'Explore the prestigious golf scene in and around Marbella.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"Marbella golf view" },
    ],
  },
  // Example for another niche, e.g., Watersports
  watersports: {
    name: 'Watersports Adventures',
    heroImage: PLACEHOLDER_IMAGE_URL(1200, 400),
    imageHint: "kayaking sea coast",
    intro: "Dive into the crystal-clear waters of the Mediterranean with a wide array of watersports. From thrilling jet ski rides to peaceful paddleboarding, Costa del Sol has it all.",
    subCategories: [
      { name: 'Jet Ski & Boating', slug: 'jet-ski-boating', description: 'Experience high-speed thrills or leisurely boat trips.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"jet ski action" },
      { name: 'Scuba Diving & Snorkeling', slug: 'scuba-snorkeling', description: 'Explore vibrant underwater ecosystems and marine life.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"scuba diver underwater" },
      { name: 'Paddleboarding & Kayaking', slug: 'paddleboarding-kayaking', description: 'Enjoy serene waters and stunning coastal scenery.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"paddleboard sunset" },
    ],
  }
};
