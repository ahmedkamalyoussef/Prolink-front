import axios from "axios";

const baseUrl = "http://localhost:5292/";
const authToken = localStorage.getItem("authToken");

export const sendJobRequest = async (userId, postId) => {
  try {
    const response = await axios.post(
      `${baseUrl}api/JobReques/add-jobRequest?userId=${userId}&postId=${postId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchJobRequest = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}api/JobReques/Get-jobRequests`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching job requests:", error);
      throw error;
    }
  };
  
 export const acceptJobRequest = async (id) => {
  try {
    const response = await axios.put(
      `${baseUrl}api/JobReques/accept-jobRequest?jobRequestId=${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching job requests:", error);
    throw error;
  }
};

export const declinJobRequest = async (id) => {
  try {
    const response = await axios.put(
      `${baseUrl}api/JobReques/decline-jobRequest?requestId=${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching job requests:", error);
    throw error;
  }
};
