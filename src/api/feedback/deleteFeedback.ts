import { AxiosResponse } from 'axios';
import { IFeedback } from '../../redux/slices/feedbackSlice';
import { api } from '../../lib/api';

export const deleteFeedback = async (feedback: IFeedback): Promise<AxiosResponse<any>> => {
  try {
    const response = await api.delete(`/message/${feedback.id}`);
    return response;
  } catch (error) {
    console.error('Error deleting feedback:', error);
    throw error;
  }
};
