
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState, useEffect, useContext, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import imageData from '@/lib/placeholder-images.json';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FocusContext } from '@/hooks/use-focus';


type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
    width: number;
    height: number;
  };
};
const images: ImageData = imageData;

export default function GuideSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const ref = useRef(null);
  // Re-triggers every time it enters/leaves the viewport margin
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px", amount: 'some' });
  const { setIsFocus } = useContext(FocusContext);

  useEffect(() => {
    setIsFocus(isInView);
  }, [isInView, setIsFocus]);
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Success!",
      description: "Thanks for subscribing. Your guide is on its way to your inbox.",
    });
  };

  return (
    <div ref={ref} className={cn("relative my-12 transition-all duration-300", isInView ? 'z-40' : 'z-auto')}>
        <Card className="overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="hidden md:flex justify-center p-8 bg-secondary/30 h-full items-center">
            <Image
                src={images['costa-del-sol-guide-cover'].url}
                alt="Cover of the free Costa del Sol PDF guide"
                width={images['costa-del-sol-guide-cover'].width}
                height={images['costa-del-sol-guide-cover'].height}
                className="rounded-md shadow-lg transform transition-transform hover:scale-105"
                data-ai-hint={images['costa-del-sol-guide-cover'].hint}
            />
            </div>
            <div className="md:col-span-2 p-8 md:p-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">Get Your Free Costa del Sol Guide!</h3>
            <p className="text-text-secondary mb-6">
                Subscribe to our monthly newsletter to receive new stories, exclusive travel deals, and behind-the-scenes updates direct to your inbox. As a thank-you, we'll send you a free copy of our PDF guide: <strong>Top 25 Things to Do in Costa del Sol</strong>.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                    type="text" 
                    name="first_name"
                    placeholder="First Name" 
                    required 
                    className="flex-1"
                />
                <Input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    required 
                    className="flex-1"
                />
                </div>
                <div className="flex items-start space-x-3 pt-2">
                <Checkbox id="terms-inline" name="terms" required />
                <Label htmlFor="terms-inline" className="text-xs text-muted-foreground font-normal">
                    I agree to my personal data being used for interest-based advertising as outlined in the <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Notice</Link>.
                </Label>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
                {isLoading ? 'Subscribing...' : 'SUBSCRIBE'}
                </Button>
            </form>
            </div>
        </div>
        </Card>
    </div>
  );
}
