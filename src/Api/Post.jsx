import axios from 'axios';

const baseUrl="http://localhost:5292/";
const authToken = localStorage.getItem('authToken');
export const addPost = async (postData) => {
  try {
    const formData = new FormData();
    formData.append('Title', postData.title);
    formData.append('Description', postData.text);
    if (postData.image) {
      formData.append('PostImage', postData.image);
    }

    const response = await axios.post(`${baseUrl}api/Post/add-post`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authToken}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error during posting:', error.response);
    throw error;
  }
};


export const editPost = async (postId, postData) => {
  try {
    console.log(postData.PostImage);
    const formData = new FormData();
    if (postData.PostImage) {
      formData.append('PostImage', postData.PostImage);
    }

    const response = await axios.put(`${baseUrl}api/Post/update-post?id=${postId}&Title=${postData.title}&Description=${postData.Description}`,
     formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authToken}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error during posting:', error.response);
    throw error;
  }
};



export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}api/Post/get-all-posts`, {
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


export const addComment = async (postId, content) => {
  try {
    const response = await axios.post(`${baseUrl}api/Post/add-comment?postId=${postId}`, {
      content
    }, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addLike = async (postId) => {
  try {
    const response = await axios.post(`${baseUrl}api/Post/add-like?Postid=${postId}`, null, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLike = async (likeId) => {
  try {
    const response = await axios.delete(`${baseUrl}api/Post/delete-Like?likeId=${likeId}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${baseUrl}api/Post/delete-post?id=${postId}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

