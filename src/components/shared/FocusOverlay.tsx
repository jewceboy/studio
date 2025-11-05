
'use client';
import { cn } from '@/lib/utils';

export default function FocusOverlay({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={cn(
        'fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 pointer-events-none',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    />
  );
}
