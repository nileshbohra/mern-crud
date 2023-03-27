import axios from "axios";

const api_url = `${process.env.REACT_APP_BACKEND_URL}/books`;

//addbook

export const addBook = async (book) => {
    const response = await axios.post(api_url, book);
    return response.data;
}
//getallbooks
export const getAllBooks = async () => {
    const response = await axios.get(api_url);
    return response.data;
}

//updatebook
export const updateBook = async (id, book) => {
    const response = await axios.put(`${api_url}/${id}`, book);
    return response.data;
}
//deletebook

export const deleteBook = async (id) => {
    const response = await axios.delete(`${api_url}/${id}`);
    return response.data;
}