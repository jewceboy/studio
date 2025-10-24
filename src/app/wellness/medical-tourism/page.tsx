
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export const metadata = {
  title: 'Medical Tourism Malaga | Costa del Sol Navigator',
  description: 'Access leading medical facilities and specialists in Costa del Sol.',
};

const medicalCategories = [
    {
        slug: 'cosmetic-surgery',
        name: 'Cosmetic Surgery',
        description: 'Access world-class cosmetic and plastic surgery clinics in the Costa del Sol.',
        imageKey: 'cosmetic-clinic',
        linkHref: '/wellness/medical-tourism/cosmetic-surgery',
        linkText: 'Explore Clinics',
    },
    {
        slug: 'dental-tourism',
        name: 'Luxury Dental Tourism',
        description: 'Combine a luxury holiday with top-quality dental care in the Costa del Sol.',
        imageKey: 'luxury-dental-clinic',
        linkHref: '/wellness/medical-tourism/dental-tourism',
        linkText: 'Discover Dental Care',
    },
];

export default function MedicalTourismPage() {
  return (
    <div>
      <PageHeader
        title="Medical Tourism"
        subtitle="Access leading private clinics and specialists for a range of treatments in a comfortable and serene environment."
      />
      <Section className="pt-0" title="Medical Services">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {medicalCategories.map((category) => (
                <InfoCard
                key={category.slug}
                title={category.name}
                imageUrl={images[category.imageKey].url}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                imageHint={images[category.imageKey].hint}
                />