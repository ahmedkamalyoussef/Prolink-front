import axios from "axios";

const baseUrl = "http://localhost:5292/";
const authToken = localStorage.getItem("authToken");

export const Follow = async (userId) => {
  try {
    const response = await axios.post(
      `${baseUrl}api/Follower/follow`,
      null, // Pass an empty body since the userId will be sent in the URL
      {
        params: { userId }, // Send userId in the URL parameters
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error following user:", error);
    throw error;
  }
};

export const UnFollow = async (userId) => {
  try {
    const response = await axios.put(
      `${baseUrl}api/Follower/unfollow`,
      null, // No request body needed
      {
        params: { userId }, // Send userId in the URL parameters
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error unfollowing user:", error);
    throw error;
  }
};
