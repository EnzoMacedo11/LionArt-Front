import api from './api';

export async function getHotels(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get('/hotels', config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getHotelsWithRooms(token, hotelId) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get(`/hotels/${hotelId}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
