import axios from 'axios';

const API_URL = 'http://localhost:5292/api/Post/add-post';

export const addPost = async (postData, token) => {
  try {
    const formData = new FormData();
    formData.append('Title', postData.title);
    formData.append('Description', postData.text);
    if (postData.image) {
      formData.append('PostImage', postData.image);
    }

    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error during posting:', error.response);
    throw error;
  }
};
