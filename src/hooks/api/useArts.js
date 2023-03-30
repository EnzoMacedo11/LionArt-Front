import useAsync from '../useAsync';
import useToken from '../useToken';
import * as artsApi from '../../services/artsApi';

export default function useArts() {
  const token = useToken();

  const {
    data: arts,
    loading: artsLoading,
    error: artsError,
    act: getArts,
  } = useAsync(() => artsApi.getArts(token));

  return {
    arts,
    artsLoading,
    artsError,
    getArts,
  };
}
