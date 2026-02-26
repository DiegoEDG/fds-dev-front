import { api } from '.';

export const getComponentsCountApi = async () => {
  try {
    const response = await api.get(`/count`);
    return response.data;
  } catch (error) {
    console.error('Error counting components:', error);
    throw error;
  }
};
