import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentsApi from '../../services/paymentsApi';

export default function useProcessPayment() {
  const token = useToken();

  const {
    loading: paymentProcessLoading,
    error: paymentProcessError,
    act: processPayment
  } = useAsync((data) => paymentsApi.processPayment(data, token), false);

  return {
    paymentProcessLoading,
    paymentProcessError,
    processPayment
  };
}
