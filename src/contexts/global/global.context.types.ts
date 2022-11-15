// Interfaces and types from context Global

import { Dispatch, SetStateAction } from "react";

// Provider Props
export interface GlobalProviderProps {
  children: React.ReactNode;
}

// Provider value
export interface GlobalProviderValue {
  isNavigationReady: boolean;
  setIsNavigationReady: Dispatch<SetStateAction<boolean>>;
}
