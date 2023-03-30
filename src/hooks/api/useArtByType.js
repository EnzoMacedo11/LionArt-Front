import useAsync from '../useAsync';
import useToken from '../useToken';
import * as artsApi from '../../services/artsApi';

export default function useArtsByType(type) {
  const token = useToken();

  const {
    data: artByType,
    loading: artByTypeLoading,
    error: artByTypeError,
    act: getArtByType,
  } = useAsync(() => artsApi.getArtByType(token,type));

  return {
    artByType,
    artByTypeLoading,
    artByTypeError,
    getArtByType
  };
}
