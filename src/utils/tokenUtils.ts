// src/utils/tokenUtils.ts
export const getToken = () => localStorage.getItem('token');
export const saveToken = (token: string) => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');

export const parseToken = (token: string): any => {
  const payload = token.split('.')[1];
  return JSON.parse(atob(payload));
};
