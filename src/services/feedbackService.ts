import axios from "axios";

const API_URL = "https://localhost:5140/api/Feedback/";

export const submitFeedback = (feedback: any, token: string) =>
  axios.post(API_URL, feedback, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getMyFeedback = (token: string) =>
  axios.get(API_URL + "my", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getAllFeedback = (token: string) =>
  axios.get(API_URL + "all", {
    headers: { Authorization: `Bearer ${token}` },
  });
