import useAsync from '../useAsync';
import useToken from '../useToken';
import * as artsApi from '../../services/artsApi';

export default function useUser() {
  const token = useToken();

  const {
    data: user,
    loading: userLoading,
    error: userError,
    act: getUser,
  } = useAsync(() => artsApi.getUser(token));

  return {
    user,
    userLoading,
    userError,
    getUser,
  };
}


