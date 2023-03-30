import useAsync from '../useAsync';
import useToken from '../useToken';
import * as ticketApi from '../../services/ticketApi';

function useTicketType() {
  const token = useToken();

  const {
    data: ticketTypes,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketType,
  } = useAsync(() => ticketApi.getTicketType(token));

  return {
    ticketTypes,
    ticketTypeLoading,
    ticketTypeError,
    getTicketType,
  };
}

export default useTicketType;
