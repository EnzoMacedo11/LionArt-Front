import api from './api';

export async function getTicketType(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.get('/tickets/types', config);
  return response.data;
}

export async function createTicket(body, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.post('/tickets', body, config);
  return response.data;
}

export async function getTicket(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get('/tickets', config);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
