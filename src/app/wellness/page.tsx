
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';
import { Heart, Droplets, User, Sun, Stethoscope, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export const metadata = {
  title: 'Wellness & Medical Tourism in Costa del Sol | The Ultimate 2025 Guide',
  description: 'The ultimate 2025 guide to wellness and medical tourism in the Costa del Sol. Discover luxury spa retreats, world-class medical facilities in Marbella, and holistic yoga retreats.',
};

const wellnessCategories = [
  {
    slug: 'spa-retreats',
    name: 'Spa & Relaxation Retreats',
    description: 'Unwind at exclusive spa resorts offering rejuvenating treatments and tranquil atmospheres.',
    imageKey: 'spa-massage-therapy',
    linkHref: '/wellness/spa-retreats',
    linkText: 'Find Spa Retreats',
  },
  {
    slug: 'medical-tourism',
    name: 'Advanced Medical Tourism',
    description: 'Access leading private clinics for cosmetic, dental, and other specialized medical treatments.',
    imageKey: 'modern-clinic-interior',
    linkHref: '/wellness/medical-tourism',
    linkText: 'Explore Medical Services',
  },
  {
    slug: 'wellness-retreats',
    name: 'Holistic Wellness Retreats',
    description: 'Embark on a journey of self-care with yoga, meditation, and detox retreats in beautiful locations.',
    imageKey: 'yoga-class-sunrise',
    linkHref: '/wellness/wellness-retreats',
    linkText: 'Discover Retreats',
  },
];

export default function WellnessPage() {
  return (
    <div>
        <div className="max-w-4xl mx-auto">
            <PageHeader
                title="Wellness, Spa & Medical Tourism in Costa del Sol"
                subtitle="Rejuvenate your mind, body, and soul. Southern Spain is a premier destination for health, wellness, and world-class private medical care."
            />
        </div>
      <Section className="pt-0">
        <div className="prose lg:prose-xl max-w-4xl mx-auto prose-headings:font-display prose-a:text-primary prose-strong:text-text-primary">
            <p>
                The Costa del Sol has long been celebrated for its life-enhancing sunshine and tranquil Mediterranean lifestyle. In recent years, it has matured into a world-class destination for wellness and medical tourism, attracting discerning clients from across the globe. Here, the pursuit of health and well-being transcends the ordinary, blending state-of-the-art medical facilities with luxurious spa environments and holistic retreats set against a backdrop of stunning natural beauty.
            </p>
             <p>
               Whether you are seeking a rejuvenating escape at a five-star spa, planning a cosmetic or dental procedure with a top European specialist, or looking to embark on a transformative yoga and detox journey, the Costa del Sol provides a discreet, serene, and highly professional environment. This guide is your gateway to the region's elite wellness offerings, helping you find the perfect services to restore your balance and enhance your quality of life.
            </p>

            <h2>Explore Your Path to Well-being</h2>
            <p>
               The region's wellness ecosystem is diverse. To help you navigate the options, we've organized them into three core pillars: luxurious spa and relaxation retreats, advanced medical tourism, and holistic wellness programs.
            </p>
        </div>
      </Section>

      <Section className="py-0">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {wellnessCategories.map((category) => (
                <InfoCard
                key={category.slug}
                title={category.name}
                imageUrl={images[category.imageKey].url}
                imageHint={images[category.imageKey].hint}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                />
            ))}
            </div>
        </div>
      </Section>

      <Section>
        <div className="prose lg:prose-xl max-w-4xl mx-auto prose-headings:font-display prose-a:text-primary prose-strong:text-text-primary">
            
            <div id="spa-relaxation" className="scroll-mt-24">
                <h3><Sparkles className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Spa & Relaxation: The Art of Unwinding</h3>
                <p>
                  The Costa del Sol is home to some of Europe's most luxurious and sophisticated spas. These are not just add-ons to hotels; they are comprehensive wellness destinations in their own right, offering a sanctuary for deep relaxation and rejuvenation.
                </p>
                <ul>
                    <li><strong>World-Class Facilities:</strong> Expect expansive thermal circuits with dynamic pools, saunas, steam rooms, and ice fountains. Many <Link href="/wellness/spa-retreats/luxury-spas">luxury spa hotels in Marbella</Link> offer thalassotherapy (seawater-based treatments) and state-of-the-art treatment rooms.</li>
                    <li><strong>Bespoke Treatments:</strong> Go beyond standard massages and facials. Indulge in advanced anti-aging protocols, body wraps using local ingredients like olive oil and sea salt, and holistic therapies administered by expert practitioners.</li>
                     <li><strong>Complete Packages:</strong> Many spas offer curated <Link href="/wellness/spa-retreats/wellness-packages">wellness packages</Link> that combine accommodation, healthy meals, and a schedule of treatments designed to achieve specific goals, from stress reduction to detoxification.</li>
                </ul>
                <Button asChild variant="outline">
                    <Link href="/wellness/spa-retreats">Explore Spa & Relaxation Retreats</Link>
                </Button>
            </div>

            <div id="medical-tourism" className="scroll-mt-24 mt-12">
                 <h3><Stethoscope className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Medical Tourism: Excellence in Care</h3>
                <p>
                    Marbella and the wider Costa del Sol have become a leading hub for medical tourism, offering the perfect combination of discretion, luxury, and access to highly skilled medical professionals. Patients can recover in a serene, holiday-like environment while receiving top-tier medical care at a fraction of the cost of other countries.
                </p>
                 <ul>
                    <li><strong>Cosmetic & Plastic Surgery:</strong> The region is renowned for its world-class <Link href="/wellness/medical-tourism/cosmetic-surgery">cosmetic surgery clinics</Link>. Internationally recognized surgeons specialize in a full range of procedures, from facelifts to body contouring, in state-of-the-art facilities.</li>
                    <li><strong>Luxury Dental Tourism:</strong> Combine a holiday with top-quality dental work. Clinics offer everything from routine check-ups to complex implants and cosmetic smile makeovers, using the latest technology in a spa-like setting. Explore our guide to <Link href="/wellness/medical-tourism/dental-tourism">luxury dental tourism</Link>.</li>
                     <li><strong>Specialized Treatments:</strong> Beyond cosmetics, the area's private hospitals offer excellent services in orthopedics, cardiology, and general health check-ups for international clients.</li>
                 </ul>
                 <Button asChild variant="outline">
                    <Link href="/wellness/medical-tourism">Learn More About Medical Tourism</Link>
                </Button>
            </div>

             <div id="holistic-wellness" className="scroll-mt-24 mt-12">
                <h3><Heart className="inline-block h-6 w-6 -mt-1 mr-2 text-primary" />Holistic Wellness Retreats: Nurturing the Soul</h3>
                <p>
                    For those looking for a deeper transformation, the Costa del Sol provides the perfect backdrop for holistic wellness retreats. These programs focus on nurturing the mind, body, and spirit in a supportive and beautiful environment.
                </p>
                <ul>
                    <li><strong>Yoga Retreats:</strong> Whether you are a beginner or an advanced practitioner, you will find a <Link href="/wellness/wellness-retreats/yoga">yoga retreat</Link> to suit your needs. From beachfront Vinyasa classes to silent meditation in the mountains, the options are plentiful.</li>
                    <li><strong>Detox & Nutrition:</strong> Reset your system with a professionally supervised <Link href="/wellness/wellness-retreats/detox">detox retreat</Link>. These programs often include juice fasting, plant-based nutrition plans, and educational workshops to help you build healthier habits.</li>
                    <li><strong>Fitness Bootcamps:</strong> For a more active approach, join a fitness bootcamp that combines invigorating workouts in the fresh air with healthy food and a supportive group atmosphere.</li>
                </ul>
                 <Button asChild variant="outline">
                    <Link href="/wellness/wellness-retreats">Discover Wellness Retreats</Link>
                </Button>
            </div>
            
        </div>
      </Section>
    </div>
  );
}
