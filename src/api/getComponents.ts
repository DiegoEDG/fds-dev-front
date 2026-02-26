import { api } from '.';

export const getComponentsApi = async () => {
  try {
    const response = await api.get(`/components`);
    return response.data;
  } catch (error) {
    console.error('Error fetching components:', error);
    throw error;
  }
};
