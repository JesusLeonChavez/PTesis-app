import AsyncStorage from "@react-native-async-storage/async-storage";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin as GoogleSignIn } from "@react-native-google-signin/google-signin";
import React, { createContext, useCallback, useEffect } from "react";
import { useMemo, useState } from "react";
import { ContextDevTool } from "react-context-devtool";

import { AuthProviderProps as Props } from "./auth.context.types";
import { AuthProviderValue } from "./auth.context.types";
import CONSTANTS from "config/constants";
import { getGoogleAuthErrorUtility } from "utils/auth.utils";
import { getFirebaseAuthErrorUtility } from "utils/auth.utils";

const { SSO_USER } = CONSTANTS.STORAGE;

export const AuthContext = createContext<AuthProviderValue | undefined>(
  undefined
);

const AuthProvider: React.FC<Props> = props => {
  const [isAnonymous, setIsAnonymous] = useState<boolean>();
  const [uid, setUid] = useState<string>();

  const setUserInLocalStorage = (
    userCredentials: FirebaseAuthTypes.UserCredential
  ) => {
    const { additionalUserInfo, user } = userCredentials;
    const { phoneNumber: phone, email } = user ?? {};
    const { profile } = additionalUserInfo ?? {};
    const { given_name, family_name, first_name, last_name } = profile ?? {};
    const name = given_name ?? first_name;
    const lastName = family_name ?? last_name;
    const phoneNumber = phone ?? "";
    AsyncStorage.setItem(
      SSO_USER,
      JSON.stringify({ name, lastName, phoneNumber, email })
    );
  };

  const signInAnonymously = useCallback(async () => {
    try {
      return await auth().signInAnonymously();
    } catch (error) {
      throw new Error(getFirebaseAuthErrorUtility(error));
    }
  }, []);

  const signInWithGoogle = useCallback(async () => {
    let idToken: string | null;
    try {
      await GoogleSignIn.hasPlayServices();
      const googleUser = await GoogleSignIn.signIn();
      idToken = googleUser.idToken;
    } catch (error) {
      throw new Error(getGoogleAuthErrorUtility(error));
    }
    if (!idToken) {
      throw new Error("Algo salió mal obteniendo el token de acceso");
    }
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    if (!googleCredentials) return googleCredentials;
    try {
      const response = await auth().signInWithCredential(googleCredentials);
      setUserInLocalStorage(response);
      return response;
    } catch (error) {
      throw new Error(getFirebaseAuthErrorUtility(error));
    }
  }, []);

  const getEmail = () => {
    return auth()?.currentUser?.email;
  };

  const authStateChangeHandler = useCallback(
    async (user: FirebaseAuthTypes.User | null) => {
      const { uid, isAnonymous } = user ?? {};
      setIsAnonymous(!!isAnonymous);
      setUid(uid);
      if (uid) return;
      try {
        await signInAnonymously();
      } catch (e: any) {
        console.warn(e.message);
      }
    },
    [signInAnonymously]
  );

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (e: any) {
      // TODO: add message to the user to explain error
      console.warn(e.message);
    }
  };

  useEffect(() => {
    const authSubscriber = auth().onAuthStateChanged(authStateChangeHandler);
    return authSubscriber;
  }, [authStateChangeHandler]);

  const value: AuthProviderValue = useMemo(() => {
    return {
      isAnonymous,
      uid,
      email: getEmail(),
      signInAnonymously,
      signInWithGoogle,
      logout
    };
  }, [isAnonymous, signInAnonymously, signInWithGoogle, uid]);

  return (
    <AuthContext.Provider value={value}>
      <ContextDevTool context={AuthContext} id="auth" displayName="Auth" />
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
