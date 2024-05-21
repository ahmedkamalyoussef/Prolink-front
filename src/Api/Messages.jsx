import axios from "axios";

const baseUrl = "http://localhost:5292/";
const authToken = localStorage.getItem("authToken");

export const fetchMessages = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}api/Message/get?recieverId=${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};