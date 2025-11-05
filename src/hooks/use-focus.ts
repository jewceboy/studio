
'use client';
import { createContext } from 'react';

interface FocusContextType {
  isFocus: boolean;
  setIsFocus: (isFocus: boolean) => void;
}

export const FocusContext = createContext<FocusContextType>({
  isFocus: false,
  setIsFocus: () => {},
});
