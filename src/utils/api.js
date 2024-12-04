// frontend/src/utils/api.js
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      // Store token in local storage or handle it accordingly
      localStorage.setItem("token", data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error logging in:", error);
    return false;
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response.ok;
  } catch (error) {
    console.error("Error registering:", error);
    return false;
  }
};

// other API methods can go here
