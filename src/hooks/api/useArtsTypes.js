import useAsync from '../useAsync';
import useToken from '../useToken';
import * as artsApi from '../../services/artsApi';

export default function useArtTypes() {
  const token = useToken();

  const {
    data: types,
    loading: typesLoading,
    error: typesError,
    act: getTypes,
  } = useAsync(() => artsApi.getTypes(token));

  return {
    types,
    typesLoading,
    typesError,
    getTypes,
  };
}
