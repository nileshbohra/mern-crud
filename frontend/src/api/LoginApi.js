import axios from "axios";

const api_url = `${process.env.REACT_APP_BACKEND_URL}/login`

export const userLogin = async (credentials) => {
    const response = await axios.post(api_url, credentials);
    return response.data;
}