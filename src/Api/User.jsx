import axios from 'axios';
const baseUrl="http://localhost:5292/";
const authToken = localStorage.getItem('authToken');

export const fetchUserData = async () => {
    try {
      const response = await axios.get(`${baseUrl}api/User/get-Current-user`,{
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };