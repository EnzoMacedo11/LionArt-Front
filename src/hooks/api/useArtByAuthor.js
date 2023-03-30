import useAsync from '../useAsync';
import useToken from '../useToken';
import * as artsApi from '../../services/artsApi';

export default function useArtsByAuthor(author) {
  const token = useToken();

  const {
    data: artByAuthor,
    loading: artByAuthorLoading,
    error: artByAuthorError,
    act: getArtByAuthor,
  } = useAsync(() => artsApi.getArtByAuthor(token,author));

  return {
    artByAuthor,
    artByAuthorLoading,
    artByAuthorError,
    getArtByAuthor
  };
}
