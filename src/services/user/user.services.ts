import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import { CreateUserConfig } from "./user.services.types";

export const createUser = async (userConfig: CreateUserConfig) => {
  const { uid } = userConfig;

  await firestore().collection("users").doc(uid).set({ userData: userConfig });
};

export const getUserByUid = async (uid?: string) => {
  const uidUser = auth().currentUser?.uid;

  const userDocumentObject = await firestore()
    .collection("users")
    .doc(uidUser)
    .get();

  if (!userDocumentObject.exists) {
    throw new Error("No user for uid");
  }
  const userData = userDocumentObject.data();

  if (!userData?.userData.uid) {
    throw new Error("No user for uid");
  }

  return userData;
};
