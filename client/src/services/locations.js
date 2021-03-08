import api from './api-config';

export const getAllLocations = async () => {
  const resp = await api.get('/locations');
  return resp.data;
}