import { useQuery } from "react-query";

import { getUserByUid } from "./user.services";
import useAuth from "contexts/auth/auth.hooks";

export const useFetchUser = () => {
  const { isAnonymous, uid } = useAuth();

  return useQuery<any, Error>("userData", () => getUserByUid(uid), {
    enabled:
      typeof isAnonymous !== undefined &&
      typeof uid !== "undefined" &&
      !isAnonymous
  });
};
