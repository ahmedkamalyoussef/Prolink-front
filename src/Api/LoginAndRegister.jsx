import axios from 'axios';

const API_URL = 'http://localhost:5292/api/Authorization';

export const register = async (userData) => {
  try {
    console.log('Register request payload:', userData);
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    console.log('Login request payload:', credentials);
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response;
  } catch (error) {
    console.error('Error during login:', error.response);
    throw error;
  }
};
