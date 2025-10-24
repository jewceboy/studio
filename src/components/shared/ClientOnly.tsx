
'use client';

import { useState, useEffect, type ReactNode } from 'react';

export default function ClientOnly({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  },