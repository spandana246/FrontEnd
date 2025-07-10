// src/services/feedbackService.ts
import axios from 'axios';
import { getToken } from '../utils/tokenUtils';

const API = 'http://localhost:5000/api/feedback';

const feedbackService = {
  submitFeedback: async (data: any) => {
    const token = getToken();
    const form = new FormData();
    form.append('category', data.category);
    form.append('comment', data.comment);
    if (data.image) form.append('image', data.image);

    return axios.post(`${API}`, form, {
      headers: { Authorization: `Bearer ${token}` }
    });
  },

  getMyFeedback: async () => {
    const token = getToken();
    const res = await axios.get(`${API}/my-feedback`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  },

  getAnalytics: async () => {
    const token = getToken();
    const res = await axios.get(`http://localhost:5000/api/admin/analytics`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  }
};

export default feedbackService;
