import api from './api-config';

export const getAllItems = async () => {
  const resp = await api.get('/items');
  return resp.data;
}

export const getOneItem = async (id) => {
  const resp = await api.get(`/items/${id}`);
  return resp.data;
}

export const postItem = async (locationId, itemData) => {
  const resp = await api.post('/items', { item: itemData });
  return resp.data;
}

export const putItem = async (id, itemData) => {
  const resp = await api.put(`/items/${id}`, { item: itemData });
  return resp.data;
}

export const destroyItem = async (id) => {
  const resp = await api.delete(`/items/${id}`);
  return resp;
}
