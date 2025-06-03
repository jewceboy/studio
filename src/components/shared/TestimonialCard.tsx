
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react'; // Using Star as a generic quote icon or for rating
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  source?: string; // e.g., "TripAdvisor", "Travel Blogger"
  avatarUrl?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  source,
  avatarUrl,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn('bg-card shadow-lg h-full flex flex-col', className)}>
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatarUrl || `https://placehold.co/48x48.png?text=${author.charAt(0)}`} alt={author} data-ai-hint="person avatar" />
            <AvatarFallback>{author.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-montserrat font-semibold text-primary-dark">{author}</p>
            {source && <p className="text-xs text-muted-foreground">{source}</p>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <Star className="h-8 w-8 text-accent-3-light-blue/50 mb-3 transform -scale-x-100" fill="currentColor" /> {/* Quote mark style */}
        <blockquote className="text-muted-foreground italic leading-relaxed">
          "{quote}"
        </blockquote>
      </CardContent>
    </Card>
  );
}
