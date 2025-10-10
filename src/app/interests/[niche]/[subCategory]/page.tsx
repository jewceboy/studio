'use client'; // Mark as client component

import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import GolfCourseCard from '@/components/interests/GolfCourseCard'; // Specific card for golf, adapt for other niches
import type { GolfCourse } from '@/lib/constants';
import { PLACEHOLDER_IMAGE_URL, BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL } from '@/lib/constants';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

// Placeholder data - replace with actual data fetching
const subCategoryData: { [key: string]: { [key: string]: { name: string; items: any[] } } } = {
  golf: {
    'best-courses': {
      name: 'Best Golf Courses',
      items: [
        { id: 'gc1', name: 'Real Club Valderrama', slug: 'real-club-valderrama', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "Valderrama golf"), imageHint: "Valderrama golf", description: 'Legendary course, host of the Ryder Cup and Volvo Masters.', keyFeatures: [{label: 'Designer', value: 'Robert Trent Jones Sr.'}, {label: 'Difficulty', value: 'Very High'}], websiteUrl: 'https://www.valderrama.com/', nearbyHotelsAffiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
        { id: 'gc2', name: 'Finca Cortesin Golf Club', slug: 'finca-cortesin-golf', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "Finca Cortesin golf"), imageHint: "Finca Cortesin golf", description: 'Championship course known for its pristine condition and challenging layout.', keyFeatures: [{label: 'Designer', value: 'Cabell Robinson'}, {label: 'Difficulty', value: 'High'}], websiteUrl: 'https://www.fincacortesin.com/golf', nearbyHotelsAffiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
        { id: 'gc3', name: 'La Reserva Club Sotogrande', slug: 'la-reserva-sotogrande', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "Sotogrande golf"), imageHint: "Sotogrande golf", description: 'Exclusive club with a stunning course and luxurious amenities.', keyFeatures: [{label: 'Designer', value: 'Cabell Robinson'}, {label: 'Difficulty', value: 'High'}], websiteUrl: 'https://www.lareservaclubsotogrande.com/golf', nearbyHotelsAffiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
      ] as GolfCourse[],
    },
    'golf-resorts': {
        name: 'Top Golf Resorts',
        items: [ // Assuming these are also GolfCourse type or a similar Resort type for consistency
             { id: 'gr1', name: 'Anantara Villa Padierna Palace Resort', slug:'anantara-padierna-resort', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "Anantara golf resort"), imageHint: "Anantara golf resort", description: 'Luxurious palace resort with three 18-hole golf courses.', keyFeatures: [{label: 'Courses', value: '3 x 18-hole'}, {label: 'Style', value: 'Luxury Palace'}], websiteUrl: '#', nearbyHotelsAffiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
             { id: 'gr2', name: 'La Cala Resort', slug:'la-cala-resort', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "La Cala golf resort"), imageHint:"La Cala golf resort", description: 'Expansive resort featuring three championship courses and a golf academy.', keyFeatures: [{label: 'Courses', value: '3 Championship'}, {label: 'Amenities', value: 'Spa, Pools'}], websiteUrl: '#', nearbyHotelsAffiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
        ] as GolfCourse[],
    },
     'marbella-golf': {
        name: 'Marbella Golf Guide',
        items: [
            { id: 'mg1', name: 'Marbella Golf & Country Club', slug: 'marbella-golf-country-club', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "Marbella country club"), imageHint:"Marbella country club", description: 'Designed by Robert Trent Jones Sr., offering challenging holes and sea views.', keyFeatures: [{label: 'Designer', value: 'Robert Trent Jones Sr.'}, {label: 'Views', value: 'Sea & Mountain'}], websiteUrl: '#', nearbyHotelsAffiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
            { id: 'mg2', name: 'Santa Clara Golf Marbella', slug: 'santa-clara-golf-marbella', imageUrl: PLACEHOLDER_IMAGE_URL(600,400, "Santa Clara golf"), imageHint:"Santa Clara golf", description: 'A well-regarded course suitable for various skill levels, close to Marbella center.', keyFeatures: [{label: 'Accessibility', value: 'Easy to reach'}, {label: 'Suits', value: 'All levels'}], websiteUrl: '#', nearbyHotelsAffiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
        ] as GolfCourse[],
    }
  },
  // Add other niches' subcategories here
};

// generateStaticParams needs to be in a Server Component or separate file.
// Commented out as this page is now 'use client'.
// export async function generateStaticParams() {
//   const params = [];
//   for (const niche in subCategoryData) {
//     for (const subCategory in subCategoryData[niche]) {
//       params.push({ niche, subCategory });
//     }
//   }
//   return params;
// }

export default function NicheInterestSubCategoryPage({ params }: { params: { niche: string; subCategory: string } }) {
  const nicheName = params.niche.charAt(0).toUpperCase() + params.niche.slice(1);
  const data = subCategoryData[params.niche]?.[params.subCategory];

  if (!data) {
    notFound();
  }
  
  const { name: subCategoryName, items } = data;

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Interests', href: '/interests' },
    { label: nicheName, href: `/interests/${params.niche}` },
    { label: subCategoryName, href: `/interests/${params.niche}/${params.subCategory}` },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title={subCategoryName}
        subtitle={`Explore the best ${subCategoryName.toLowerCase()} in Costa del Sol. ${params.niche === 'golf' ? 'Detailed information on courses, amenities, and booking.' : ''}`}
      />
      
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* This assumes 'golf' niche. Other niches might need different card components or data structures */}
          {params.niche === 'golf' && items.map((item: GolfCourse) => (
            <GolfCourseCard key={item.id} course={item} />
          ))}
          {/* Add rendering for other niches if necessary */}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">No items listed for this category yet. Check back soon!</p>
      )}
    </div>
  );
}
