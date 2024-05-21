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

export const fetchFriendRequests = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/FriendRequest/Get-friendRequests`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching friend requests:", error);
    throw error;
  }
};

export const acceptFriendRequest = async (id) => {
try {
  const response = await axios.put(
    `${baseUrl}api/FriendRequest/accept-friendRequest?friendRequestId=${id}`,
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

export const declinFriendRequest = async (id) => {
try {
  const response = await axios.put(
    `${baseUrl}api/FriendRequest/decline-friendRequest?friendId=${id}`,
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


export const fetchFriendsData = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/Friend/get`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data; // Return only the data array
  } catch (error) {
    console.error('Error fetching friends:', error);
    throw error;
  }
};
