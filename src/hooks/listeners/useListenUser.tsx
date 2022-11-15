import { useEffect } from "react";

import useAuth from "contexts/auth/auth.hooks";
import useGlobal from "contexts/global/global.hooks";
import { navigationRef } from "navigation/Navigator.helpers";
import { useFetchUser } from "services/user/user.services.hooks";

const useListenUser = () => {
  const { isNavigationReady } = useGlobal();
  const auth = useAuth();
  const { data: user } = useFetchUser();

  const { isAnonymous } = auth;

  useEffect(() => {
    const navigationReady = isNavigationReady || navigationRef.isReady();
    const userRegistered = !isAnonymous && !!user;

    if (!navigationReady || isAnonymous) return;

    if (userRegistered && navigationReady) {
      navigationRef.reset({
        routes: [
          {
            name: "TabNavigator"
          }
        ]
      });
      return;
    }

    navigationRef.navigate("SecondStep");
  }, [isAnonymous, isNavigationReady, user]);
};

export default useListenUser;
