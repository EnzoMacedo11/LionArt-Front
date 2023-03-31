import useAsync from "../useAsync";
import useToken from "../useToken";
import * as artsApi from "../../services/artsApi";
import useUser from "./useUsers";
import { useEffect } from "react";

export default function useArtsByUser() {
  const token = useToken();
  const userId = useUser();
  console.log("breel", userId.user);

  let {
    data: artByUser,
    loading: artByUserLoading,
    error: artByUserError,
    act: getArtByUser,
  } = useAsync(() => artsApi.getArtByUser(token, userId.user));


  return {
    artByUser,
    artByUserLoading,
    artByUserError,
    getArtByUser,
  };
}
