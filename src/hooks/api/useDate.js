import useAsync from '../useAsync';
import useToken from '../useToken';
import * as dateApi from '../../services/dateApi';

export default function useDate() {
  const token = useToken();

  const {
    data: date,
    loading: dateLoading,
    error: dateError,
    act: getDate,
  } = useAsync(() => dateApi.getDate(token));

  return {
    date,
    dateLoading,
    dateError,
    getDate,
  };
}
