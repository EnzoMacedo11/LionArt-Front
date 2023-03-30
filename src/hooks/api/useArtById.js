import useAsync from '../useAsync';
import useToken from '../useToken';
import * as artsApi from '../../services/artsApi';

export default function useArtsById(id) {
  const token = useToken();
  console.log("teste3", id)

  const {
    data: artById,
    loading: artByIdLoading,
    error: artByIdError,
    act: getArtById,
  } = useAsync(() => artsApi.getArtById(token,id));

  return {
    artById,
    artByIdLoading,
    artByIdError,
    getArtById,
  };
}
