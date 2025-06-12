import axios from 'axios';
import Cookies from 'js-cookie';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface AuthPayload {
  email: string;
  password: string;
}

const loginUser = async (payload: AuthPayload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, payload);
    const data = response.data;

    console.log("data: ", data);
    if (typeof window !== 'undefined' && data.token) {
      Cookies.set('token', data.token, { expires: 7 });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
    throw new Error('Login failed');
  }
};


const registerUser = async (payload: AuthPayload) => {
  try {
    console.log("Inside userApi.registerUser, payload =", payload);
    const response = await axios.post(`${API_BASE_URL}/register`, payload);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
    throw new Error('Registration failed');
  }
};

const userApi = {
  loginUser,
  registerUser,
};

export default userApi;
