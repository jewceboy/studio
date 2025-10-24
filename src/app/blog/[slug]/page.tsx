

import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Article } from '@/lib/constants';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Section from '@/components/shared/Section';
import ArticleCard from '@/components/blog/ArticleCard';
import imageData from '@/lib/placeholder-images.json';
import { Metadata } from 'next';
import ArticleActions from '@/components/blog/ArticleActions';


type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;


// Placeholder data - replace with actual data fetching logic
const articlesData: { [key: string]: Article } = {
  'best-tapas-malaga': {
    id: '1', slug: 'best-tapas-malaga', title: 'Best Tapas Bars in Málaga Old Town', 
    imageUrl: images['Malaga-tapas-bar'].url, imageHint: images['Malaga-tapas-bar'].hint,
    date: '2024-05-15', author: 'Elena Rodriguez', 
    excerpt: 'A culinary journey through Málaga\'s most authentic tapas spots, from traditional bites to modern creations.',
    content: `<p>Málaga's old town is a labyrinth of charming streets, and hidden within are some of the best tapas bars you'll ever encounter. This guide will take you on a flavorful journey, highlighting must-try dishes and local favorites. From centuries-old taverns serving classic Andalusian recipes to innovative kitchens putting a modern spin on tapas, there's something for every palate.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">El Tapeo de Cervantes</h3>
    <p>A popular spot known for its creative tapas and extensive wine list. Booking is recommended. Their mini burgers and cod confit are divine.</p>
    <figure class="my-6">
      <img src="${images['restaurant-interior'].url}" alt="Interior of El Tapeo de Cervantes" class="rounded-lg shadow-md" data-ai-hint="${images['restaurant-interior'].hint}"/>
      <figcaption class="text-xs text-center text-muted-foreground mt-2">El Tapeo de Cervantes offers a cozy atmosphere.</figcaption>
    </figure>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Casa Lola</h3>
    <p>Vibrant and always bustling, Casa Lola offers a wide array of traditional tapas. Try their 'montaditos' and vermouth on tap.</p>
    <p>Exploring these culinary gems provides not just a meal, but an authentic taste of Malagueño culture. ¡Buen provecho!</p>
    <div class="my-6 p-4 info-box-custom-bg border-l-4"> {/* Updated class for info box */}
        <h4 class="font-montserrat font-semibold text-foreground">Insider Tip:</h4>
        <p class="text-muted-foreground">Many bars offer a free tapa with your first drink. Don't be afraid to ask or observe what locals are doing!</p>
    </div>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Relevant Tours & Hotels</h3>
    <p>Enhance your culinary journey by booking a guided tapas tour or staying in a hotel conveniently located in the Old Town. Check out these options:</p>
    <ul class="list-disc list-inside my-4 space-y-2">
        <li><a href="/restaurants/culinary-experiences/food-tours" class="text-primary hover:underline">Malaga Old Town Tapas Tour</a></li>
        <li><a href="/hotels/search?category=boutique-hotels-malaga" class="text-primary hover:underline">Boutique Hotels in Malaga Center</a></li>
    </ul>
    `,
    categories: ['Food & Drink', 'Malaga'],
    tags: ['tapas', 'old town', 'restaurants', 'malaga city']
  },
  'hidden-beaches-costa-del-sol': {
    id: '2', slug: 'hidden-beaches-costa-del-sol', title: 'Top 5 Hidden Beaches on the Costa del Sol',
    imageUrl: images['secluded-cove-beach'].url, imageHint: images['secluded-cove-beach'].hint,
    date: '2024-05-10', author: 'Mark Stevenson',
    excerpt: 'Discover tranquil coves and pristine sands away from the crowds for a perfect day of relaxation.',
    content: `<p>Escape the bustling tourist spots and discover the serene beauty of Costa del Sol\'s hidden beaches. This guide unveils five secluded gems where you can enjoy pristine sands and crystal-clear waters in peace. From hidden coves accessible only by foot to quiet stretches of coastline loved by locals, these beaches offer a perfect retreat.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Playa de Maro</h3>
    <p>Often cited as one of Spain's best beaches, Playa de Maro is a stunning cove near Nerja, boasting turquoise waters perfect for snorkeling and kayaking. Its protected status means marine life is abundant.</p>
    <figure class="my-6">
      <img src="https://picsum.photos/seed/maro-beach-kayak/800/400" alt="Kayaking at Playa de Maro" class="rounded-lg shadow-md" data-ai-hint="kayak beach cove"/>
      <figcaption class="text-xs text-center text-muted-foreground mt-2">The clear waters of Maro are ideal for water sports.</figcaption>
    </figure>
    <p>Each of these hidden spots provides a unique coastal experience, far from the typical tourist trail. Pack a picnic, bring your sunscreen, and get ready to discover the tranquil side of the Costa del Sol.</p>`,
    categories: ['Beaches', 'Travel Tips'],
    tags: ['beaches', 'costa del sol', 'nerja', 'hidden gems']
  },
  'day-trip-ronda': {
    id: '3', slug: 'day-trip-ronda', title: 'A Day Trip to Ronda: What to See and Do',
    imageUrl: images['Ronda-bridge-view'].url, imageHint: images['Ronda-bridge-view'].hint,
    date: '2024-05-01', author: 'Sofia Chen',
    excerpt: 'Explore the dramatic landscapes, iconic bridge, and historic charm of the stunning town of Ronda.',
    content: `<p>Perched dramatically atop the El Tajo gorge, Ronda is one of Andalusia's most breathtaking towns and makes for an unforgettable day trip from the Costa del Sol. This guide covers the must-see sights for a perfect visit.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Puente Nuevo (New Bridge)</h3>
    <p>The iconic Puente Nuevo is Ronda\'s most famous landmark, spanning the 120-meter-deep chasm. The views from the bridge are spectacular, but be sure to hike down into the gorge for the most impressive photo opportunities.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Plaza de Toros</h3>
    <p>Visit one of Spain's oldest and most revered bullrings, the Plaza de Toros. Its museum offers fascinating insights into the history of bullfighting. Whether you agree with the tradition or not, the architectural and historical significance is undeniable.</p>`,
    categories: ['Day Trips'],
    tags: ['ronda', 'day trip', 'andalucia', 'sightseeing']
  },
  'caminito-del-rey-guide': {
    id: '4', slug: 'caminito-del-rey-guide', title: 'Ultimate Guide to Hiking Caminito del Rey',
    imageUrl: images['Caminito-del-Rey-path'].url, imageHint: images['Caminito-del-Rey-path'].hint,
    date: '2024-04-25', author: 'Carlos Gomez',
    excerpt: 'Everything you need to know before tackling one of Spain\'s most breathtaking hiking trails.',
    content: `<p>Once known as the world's most dangerous footpath, the Caminito del Rey has been transformed into a safe and stunningly beautiful hiking trail. Suspended along the walls of the Gaitanes Gorge, this trail offers breathtaking views and a thrilling experience.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Booking Tickets</h3>
    <p>Tickets for the Caminito del Rey sell out weeks or even months in advance, especially during peak season. It is crucial to book online through the official website or a registered tour operator. Do not show up expecting to buy tickets on the day.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">The Trail</h3>
    <p>The hike is a one-way route of about 7.7 kilometers in total, which takes around 3-4 hours. Most of the path is flat, but it includes sections on boardwalks suspended over 100 meters above the river below. It is not suitable for those with a severe fear of heights.</p>`,
    categories: ['Adventure', 'Hiking'],
    tags: ['caminito del rey', 'hiking', 'adventure', 'malaga']
  },
  'malaga-christmas-lights': {
    id: '5', slug: 'malaga-christmas-lights', title: 'Málaga Christmas Lights: A Festive Spectacle',
    imageUrl: images['Christmas-lights-street'].url, imageHint: images['Christmas-lights-street'].hint,
    date: '2023-12-01', author: 'Laura Schmidt',
    excerpt: 'Experience the magic of Calle Larios adorned with spectacular Christmas lights and music.',
    content: `<p>Each year, Málaga transforms into a winter wonderland, with its spectacular Christmas light display on Calle Larios being the main event. Millions of LED lights create a stunning architectural structure, synchronized with popular Christmas music.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">The Main Show</h3>
    <p>The music and light shows on Calle Larios typically run several times each evening from late November until early January. It's a hugely popular free event, so expect large crowds. Arrive early to get a good viewing spot.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Beyond Calle Larios</h3>
    <p>While Calle Larios is the star, the entire historic center is beautifully decorated. Explore the surrounding streets, visit the Christmas markets at Paseo del Parque, and enjoy the festive atmosphere throughout the city.</p>`,
    categories: ['Festivals', 'Malaga'],
    tags: ['christmas', 'malaga', 'festivals', 'lights']
  },
  'andalusian-white-villages': {
    id: '6', slug: 'andalusian-white-villages', title: 'Exploring the Charm of Andalusian White Villages',
    imageUrl: images['white-village-street'].url, imageHint: images['white-village-street'].hint,
    date: '2024-03-18', author: 'David Miller',
    excerpt: 'A guide to the most picturesque "pueblos blancos" near Costa del Sol, rich in history and beauty.',
    content: `<p>The 'pueblos blancos,' or white villages of Andalusia, are a photographer\'s dream. Characterized by their simple white-washed walls, narrow cobbled streets, and vibrant floral displays, these villages offer a glimpse into a more traditional way of life.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Mijas Pueblo</h3>
    <p>One of the most accessible from the Costa del Sol, Mijas Pueblo is famous for its charming streets and donkey-taxis. The views of the coastline from its elevated position are simply stunning.</p>
    <h3 class="text-2xl font-montserrat font-semibold my-4">Frigiliana</h3>
    <p>Often voted the prettiest village in Spain, Frigiliana, near Nerja, is a maze of immaculate, winding streets. Its well-preserved Moorish old quarter is a delight to explore.</p>`,
    categories: ['Culture', 'Day Trips'],
    tags: ['pueblos blancos', 'andalucia', 'day trips', 'mijas', 'frigiliana']
  },
  'clubhotel-riu-review': {
    id: '7', slug: 'clubhotel-riu-review', title: 'Clubhotel Riu Costa del Sol: An Honest Review', 
    imageUrl: images['beach-resort-holiday'].url, imageHint: images['beach-resort-holiday'].hint,
    date: '2024-02-20', author: 'Travel Critic', 
    excerpt: 'Is the all-inclusive Clubhotel Riu worth it? We break down the rooms, food, pools, and overall experience.',
    content: `<p>This is placeholder content for the Clubhotel Riu review. Replace this with your full article, including details about the location, amenities, room quality, food and drink options, and overall value for money. Use headings to structure your review.</p><h3 class="text-2xl font-montserrat font-semibold my-4">Location & First Impressions</h3><p>Start by describing the hotel's location in Torremolinos and your initial thoughts upon arrival.</p><h3 class="text-2xl font-montserrat font-semibold my-4">Rooms & Accommodation</h3><p>Detail the room types, cleanliness, views, and any standout features.</p><h3 class="text-2xl font-montserrat font-semibold my-4">Food, Drink & Restaurants</h3><p>Provide an overview of the all-inclusive options, the quality of the buffet, and any specialty restaurants available.</p>`,
    categories: ['Hotels', 'Reviews'],
    tags: ['riu', 'costa del sol', 'all inclusive', 'hotel review']
  },
  'mystory-about-us': {
    id: '8', slug: 'mystory-about-us', title: 'Our Story',
    imageUrl: 'https://picsum.photos/seed/our-story-image/1200/500', imageHint: 'personal journey',
    date: '2024-01-10', author: 'Founder',
    excerpt: 'The story behind Malaga Travel Guide.',
    content: '<p>This is placeholder content for your "Our Story" page. Use this space to connect with your readers. Share your passion for Malaga, your background, and the mission behind your travel guide. Make it personal and engaging to build trust with your audience.</p>',
    categories: ['About'],
    tags: ['about us', 'our story']
  },
  'san-pedro-boulevard-review': {
    id: '9', slug: 'san-pedro-boulevard-review', title: 'San Pedro Boulevard: Is It Worth the Hype?',
    imageUrl: 'https://picsum.photos/seed/san-pedro-boulevard/1200/500', imageHint: 'modern city park',
    date: '2024-03-05', author: 'Local Explorer',
    excerpt: 'A deep dive into the San Pedro Boulevard.',
    content: '<p>This is placeholder content for your review of the San Pedro Boulevard. Describe the unique architecture, the playgrounds, the restaurants, and the overall atmosphere. Discuss whether it lives up to expectations and who you would recommend it to (e.g., families, couples).</p>',
    categories: ['Destinations', 'Reviews'],
    tags: ['san pedro', 'marbella', 'review']
  },
  'world-tourism-day-malaga': {
    id: '10', slug: 'world-tourism-day-malaga', title: 'World Tourism Day in Malaga',
    imageUrl: 'https://picsum.photos/seed/world-tourism-day/1200/500', imageHint: 'tourism event',
    date: '2023-09-27', author: 'Event Reporter',
    excerpt: 'Celebrating World Tourism Day in the heart of Costa del Sol.',
    content: '<p>This is placeholder content for your article about World Tourism Day in Malaga. Detail the events that took place, the impact on the city, and any special initiatives that were launched. This type of content is great for showing local engagement.</p>',
    categories: ['Events', 'Malaga'],
    tags: ['world tourism day', 'malaga', 'events']
  },
  'bullfighting-andalusia-ban-feature': {
    id: '11', slug: 'bullfighting-andalusia-ban-feature', title: 'The Controversial Ban on Bullfighting',
    imageUrl: 'https://picsum.photos/seed/bullfighting-ban/1200/500', imageHint: 'bullfighting arena',
    date: '2023-07-15', author: 'Cultural Analyst',
    excerpt: 'A look into the controversial decision to ban bullfighting in parts of Andalusia.',
    content: '<p>This is placeholder content for your feature on the bullfighting ban. Present a balanced view of the controversy, discussing the cultural significance of bullfighting in Andalusia, the arguments for the ban (animal welfare), and the economic and social impact of the decision. This is a topic that can generate significant discussion.</p>',
    categories: ['Culture', 'News'],
    tags: ['bullfighting', 'andalusia', 'culture']
  },
  'mayan-monkey-mijas-review': {
    id: '12', slug: 'mayan-monkey-mijas-review', title: 'Mayan Monkey Mijas: A Chocolate Lover\'s Dream',
    imageUrl: 'https://picsum.photos/seed/mayan-monkey-mijas/1200/500', imageHint: 'chocolate factory',
    date: '2024-04-01', author: 'Foodie Guide',
    excerpt: 'A review of the famous chocolate factory in Mijas Pueblo.',
    content: '<p>This is placeholder content for your review of Mayan Monkey Mijas. Describe the experience, from the chocolate-making workshops to the taste of the products. Is it a good activity for families? For couples? What are the must-try items? Include practical info like opening times and prices.</p>',
    categories: ['Food & Drink', 'Mijas', 'Reviews'],
    tags: ['mayan monkey', 'mijas', 'chocolate', 'review']
  },
  'child-free-date-night-review': {
    id: '13', slug: 'child-free-date-night-review', title: 'Our Child-Free Date Night: Did It Live Up to the Hype?',
    imageUrl: 'https://picsum.photos/seed/date-night-review/1200/500', imageHint: 'couple dining romantically',
    date: '2024-02-14', author: 'Parent Blogger',
    excerpt: 'A personal review of a much-needed child-free night out in Costa del Sol.',
    content: '<p>This is placeholder content for your date night review. Share your personal story. Where did you go? What did you do? What made it special? This type of relatable content can resonate strongly with a segment of your audience.</p>',
    categories: ['Lifestyle', 'Reviews'],
    tags: ['date night', 'review', 'lifestyle']
  },
  'chirimoya-organic-restaurant-review': {
    id: '14', slug: 'chirimoya-organic-restaurant-review', title: 'Chirimoya Organic Restaurant Review',
    imageUrl: 'https://picsum.photos/seed/chirimoya-restaurant/1200/500', imageHint: 'organic vegan food',
    date: '2024-01-20', author: 'Healthy Eater',
    excerpt: 'A review of the popular organic and vegan restaurant Chirimoya.',
    content: '<p>This is placeholder content for your review of Chirimoya. Detail the menu, the quality of the food, the ambiance, and the service. Is it worth visiting for non-vegans too? What are the standout dishes? This appeals to a specific, high-value niche.</p>',
    categories: ['Food & Drink', 'Reviews', 'Vegan'],
    tags: ['chirimoya', 'vegan', 'organic', 'restaurant', 'review']
  },
  'sunborn-gibraltar-yacht-hotel-review': {
    id: '15', slug: 'sunborn-gibraltar-yacht-hotel-review', title: 'Sunborn Gibraltar: A 5-Star Super Yacht Hotel',
    imageUrl: 'https://picsum.photos/seed/sunborn-gibraltar/1200/500', imageHint: 'super yacht hotel',
    date: '2023-11-10', author: 'Luxury Traveler',
    excerpt: 'Reviewing the unique experience of staying on a 5-star super yacht hotel in Gibraltar.',
    content: '<p>This is placeholder content for your Sunborn Gibraltar review. Describe the unique experience of staying on a luxury yacht hotel. Cover the rooms (cabins), the onboard facilities (pool, restaurants, casino), and the level of service. This is a high-value piece for your luxury travel audience.</p>',
    categories: ['Hotels', 'Reviews', 'Luxury'],
    tags: ['sunborn', 'gibraltar', 'luxury hotel', 'yacht']
  },
  'full-body-workout-women': {
    id: '16', slug: 'full-body-workout-women', title: 'Full Body Workout for Women',
    imageUrl: 'https://picsum.photos/seed/workout-women/1200/500', imageHint: 'woman fitness workout',
    date: '2023-10-01', author: 'Fitness Coach',
    excerpt: 'A full-body workout routine for women to stay fit while traveling.',
    content: '<p>This is placeholder content for your workout blog post. Provide a simple, effective workout routine that requires little to no equipment, making it perfect for travelers. Include descriptions and maybe even images or diagrams for each exercise.</p>',
    categories: ['Fitness', 'Wellness'],
    tags: ['fitness', 'workout', 'wellness']
  },
  'costa-del-sol-glamping': {
    id: '17', slug: 'costa-del-sol-glamping', title: 'Glamping on the Costa del Sol',
    imageUrl: 'https://picsum.photos/seed/costa-glamping/1200/500', imageHint: 'luxury glamping tent',
    date: '2023-08-15', author: 'Adventure Seeker',
    excerpt: 'Experience the outdoors without sacrificing comfort with these top glamping spots on the Costa del Sol.',
    content: '<p>This is placeholder content for your glamping article. Showcase 3-5 unique glamping spots in the region. Describe what makes each one special, the type of accommodation (yurts, safari tents, etc.), the amenities, and the target audience (e.g., romantic, family-friendly).</p>',
    categories: ['Hotels', 'Adventure'],
    tags: ['glamping', 'costa del sol', 'accommodation']
  },
  'expert-traveler-roundup': {
    id: '18', slug: 'expert-traveler-roundup', title: '7 Expert Travelers Share Their Tips',
    imageUrl: 'https://picsum.photos/seed/expert-travelers/1200/500', imageHint: 'group of travelers',
    date: '2023-06-25', author: 'Editor',
    excerpt: 'We asked 7 expert travelers for their best tips for visiting the Costa del Sol.',
    content: '<p>This is placeholder content for your expert roundup post. Structure it with a question for each expert, followed by their photo, name, and their insightful answer. This is a great way to add authority and diverse perspectives to your site.</p>',
    categories: ['Travel Tips'],
    tags: ['expert tips', 'travel', 'roundup']
  }
};

const allArticles = Object.values(articlesData);
