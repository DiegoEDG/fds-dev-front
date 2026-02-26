import { api } from '.';

export const getComponentListApi = async () => {
  try {
    const response = await api.get(`/allcomponents`);
    return response.data;
  } catch (error) {
    console.error('Error fetching components:', error);
    throw error;
  }
};
