import axios from "axios";

const api_url = `${process.env.REACT_APP_BACKEND_URL}/auth/register`

export const userRegister = async (credentials) => {
    const response = await axios.post(api_url, credentials);
    return response.data;
}