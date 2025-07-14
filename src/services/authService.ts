import axios from "axios";

const API_URL = "https://localhost:5140/api/Auth/";

export const login = (email: string, password: string) =>
  axios.post(API_URL + "login", null, { params: { email, password } });

export const register = (email: string, password: string) =>
  axios.post(API_URL + "register", null, { params: { email, password } });
