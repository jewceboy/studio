
'use client';

import { Globe } from 'lucide-react';

export default function SectionDivider() {
  return (
    <div className="flex items-center my-12 md:my-16" aria-hidden="true">
      <div className="flex-grow border-t border-dotted border-gray-300"></div>
      <div className="mx-4 text-gray-400">
        <Globe className="h-8 w-8" />
      </div>
      <div className="flex-grow border-t border-dotted border-gray-300"></div>
    </div>
  );
}
