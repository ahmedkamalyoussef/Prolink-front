import axios from 'axios';

const baseUrl = "http://localhost:5292/";
const authToken = localStorage.getItem('authToken');

export const fetchNotifications = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/Notification/get-user-all`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};
