import api from  './api-config';

export const addItemToLocation = async (locationId, itemId) => {
  const resp = await api.put(`/locations/${locationId}/items/${itemId}`);
  return resp.data;
}