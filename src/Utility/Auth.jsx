export const getAuthStatus = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      return true;
    }
    return false;
  };