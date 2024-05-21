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
  export const editUserData = async (formData) => {
    try {
      const response = await axios.put(`${baseUrl}api/User/update-info`,formData,{
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

  export const fetchUserByIdData = async (senderId) => {
    try {
      const response = await axios.get(`${baseUrl}api/User/get-by-id?id=${senderId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error;
    }
  };
  export const fetchUserByNameData = async (name) => {
    try {
      const response = await axios.get(`${baseUrl}api/User/get-by-name?name=${name}`,{
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


  export const editPicData = async (profilePicture) => {
    try {
      const formData = new FormData();
      if (profilePicture) {
        formData.append('file', profilePicture);
      }
  
      const response = await axios.put(
        `${baseUrl}api/User/Update-picture`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.error('Error updating picture:', error);
      throw error;
    }
  };

  export const editBackImgData = async (backgroundImage) => {
    try {
      const formData = new FormData();
      if (backgroundImage) {  // Use backgroundImage instead of profilePicture
        formData.append('file', backgroundImage);
      }
  
      const response = await axios.put(
        `${baseUrl}api/User/Update-BackImage`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.error('Error updating background image:', error);
      throw error;
    }
  };
  
  