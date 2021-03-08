import api from './api-config';

export const getAllItems = async () => {
  const resp = await api.get('/Items');
  return resp.data;
}

export const getOneItem = async (id) => {
  const resp = await api.get(`/Items/${id}`);
  return resp.data;
}

export const postItem = async (ItemData) => {
  const resp = await api.post('/Items', { Item: ItemData });
  return resp.data;
}

export const putItem = async (id, ItemData) => {
  const resp = await api.put(`/Items/${id}`, { Item: ItemData });
  return resp.data;
}

export const destroyItem = async (id) => {
  const resp = await api.delete(`/Items/${id}`);
  return resp;
}
