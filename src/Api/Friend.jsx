import axios from "axios";

const baseUrl = "http://localhost:5292/";
const authToken = localStorage.getItem("authToken");

export const AddFriend = async (userId) => {
  try {
    const response = await axios.post(
      `${baseUrl}api/FriendRequest/send-friendRequest?userId=${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};