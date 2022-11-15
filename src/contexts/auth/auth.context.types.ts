// Interfaces and types from context Auth

import { FirebaseAuthTypes } from "@react-native-firebase/auth";

// Provider Props
export interface AuthProviderProps {
  children: React.ReactNode;
}

// Provider value
export interface AuthProviderValue {
  isAnonymous: boolean | undefined;
  uid: string | undefined;
  email: string | null | undefined;
  signInWithGoogle: () => Promise<FirebaseAuthTypes.UserCredential>;
  signInAnonymously: () => Promise<FirebaseAuthTypes.UserCredential>;
  logout: () => Promise<void>;
}
