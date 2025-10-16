
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Golf, Link2, MapPin } from 'lucide-react'; // Corrected import, GolfIcon might not exist
import type { GolfCourse } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface GolfCourseCardProps {
  course: GolfCourse;
  className?: string;
}

export default function GolfCourseCard({ course, className }: GolfCourseCardProps) {
  return (
    <Card className={cn('overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card', className)}>
      <CardHeader className="p-0 relative aspect-[16/10]">
        <Image
          src={course.imageUrl}
          alt={`Image of ${course.name}`}
          fill={true}
          className="object-cover"
          data-ai-hint={course.imageHint || "golf course"}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-montserrat text-xl font-semibold text-primary-dark mb-2 line-clamp-2 flex items-center">
          <Golf className="w-5 h-5 mr-2 text-accent shrink-0" /> {/* Using Golf icon */}
          {course.name}
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{course.description}</p>
        {course.keyFeatures && course.keyFeatures.length > 0 && (
          <ul className="space-y-1 text-sm mb-3">
            {course.keyFeatures.slice(0,2).map((feature) => (
              <li key={feature.label} className="text-muted-foreground">
                <span className="font-medium text-primary-dark/80">{feature.label}:</span> {feature.value}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {course.websiteUrl && (
          <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href={course.websiteUrl} target="_blank" rel="noopener noreferrer">
              Visit Website <Link2 className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
        {course.nearbyHotelsAffiliateLink && (
          <Button asChild variant="default" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={course.nearbyHotelsAffiliateLink} target="_blank" rel="noopener noreferrer">
              Nearby Hotels <MapPin className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
