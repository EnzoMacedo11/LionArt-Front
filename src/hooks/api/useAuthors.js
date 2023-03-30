import useAsync from '../useAsync';
import useToken from '../useToken';
import * as artsApi from '../../services/artsApi';

export default function useAuthors() {
  const token = useToken();

  const {
    data: authors,
    loading: authorsLoading,
    error: authorsError,
    act: getAuthors,
  } = useAsync(() => artsApi.getAuthors(token));

  return {
    authors,
    authorsLoading,
    authorsError,
    getAuthors,
  };
}
