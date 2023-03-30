import api from './api';

export async function getEnrolledActivities(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get('/activity/user', config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
