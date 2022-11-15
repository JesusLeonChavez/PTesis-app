// useSignOut customHook
import auth from "@react-native-firebase/auth";
import { GoogleSignin as GoogleSignIn } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";

import { NavigatorPropList } from "navigation/Navigator.types";

const useSignOut = (goToHome = true) => {
  const { reset } = useNavigation<NavigatorPropList>();
  const signOut = async () => {
    auth().signOut();
    GoogleSignIn.signOut();

    if (!goToHome) return;

    reset({
      routes: [
        {
          name: "TabNavigator"
        }
      ]
    });
  };

  return signOut;
};

export default useSignOut;
