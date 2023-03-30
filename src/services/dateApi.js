import api from './api';

export async function getDate(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get('/activity', config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getActivitiesByDate(token, date) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get(`/activity/day/${date}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getActivityVenues(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get('/activity/venues', config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function enrollInActivity(token, body) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.post('/activity', body, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
