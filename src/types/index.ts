

export interface NavLink {
  href: string;
  label: string;
  icon?: React.ElementType;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export type QuizAnswers = {
  travelStyle: string;
  interests: string[];
  duration: number;
  budget: string;
};

export type TripRecommendation = {
  townRecommendation: string;
  suggestedActivities: string[];
  idealAccommodations: string;
  insiderTips?: string; // Optional based on PRD wording, AI output has it as part of accommodation
};

// Moved from src/app/hotels/[region]/page.tsx
export interface HotelCategory {
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
}

// Moved from src/app/interests/[niche]/page.tsx
export interface NicheSubCategory {
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  heroImage?: string;
}
