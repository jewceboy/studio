// Placeholder Affiliate Links
export const BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL = "https://booking.com/malaga-hotels?aid=12345";
export const GETYOURGUIDE_AFFILIATE_LINK_MALAGA_ACTIVITY = "https://getyourguide.com/malaga-activities?partner_id=ABCDE";

// Helper function for placeholder images
export const PLACEHOLDER_IMAGE_URL = (width: number, height: number, seed: string) => `https://picsum.photos/seed/${seed}/${width}/${height}`;


// Placeholder data types (can be expanded)
export interface Destination {
  id: string;
  name: string;
  slug: string;
  heroImage: string;
  imageHint?: string;
  overview: string;
  thingsToDo: string[];
  beaches?: string[];
  hotelsIntro?: string;
  foodAndDrink: string;
  practicalInfo: string;
}

export interface Hotel {
  id: string;
  name:string;
  slug: string;
  categories: string[];
  region: string;
  imageUrl: string;
  imageHint?: string;
  description: string;
  features: string[];
  userScore?: number;
  priceGuide?: string; // e.g., "€€€"
  affiliateLink: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  imageHint?: string;
  date: string;
  author?: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  categories?: string[];
  tags?: string[];
}

export interface GolfCourse {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  imageHint?: string;
  description: string;
  keyFeatures: { label: string; value: string }[]; // e.g., Difficulty, Designer
  websiteUrl?: string;
  nearbyHotelsAffiliateLink?: string;
}