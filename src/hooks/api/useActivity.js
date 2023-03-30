import useAsync from '../useAsync';
import useToken from '../useToken';
import * as dateApi from '../../services/dateApi';

export default function useActivity(date) {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getActivitiesByDate,
  } = useAsync(() => dateApi.getActivitiesByDate(token, date), false);

  return {
    activities,
    activitiesLoading,
    activitiesError,
    getActivitiesByDate,
  };
}
