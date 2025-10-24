// src/components/blog/ArticleActions.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Printer, Share2 } from 'lucide-react';

export default function ArticleActions() {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            // Fallback for browsers that don't support the Web Share API
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };
    
    return (
        <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" aria-label="Print article" onClick={() => typeof window !== 'undefined' && window.print()}><Printer className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" aria-label="Share" onClick={handleShare}><Share2 className="h-4 w-4" /></Button>
        </div>
    );
}
