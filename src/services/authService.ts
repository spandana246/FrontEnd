// src/services/authService.ts
import axios from 'axios';

const API = 'http://localhost:5000/api/auth';

const authService = {
  loginUser: async (username: string, password: string) => {
    const res = await axios.post(`${API}/login`, { username, password });
    return res.data.token;
  },
  registerUser: async (username: string, email: string, password: string) => {
    return axios.post(`${API}/register`, { username, email, password });
  }
};

export default authService;
