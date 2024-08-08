import axios from "axios";

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getMethod = async (url) => await axios.get(url).catch(console.error);
export const deleteMethod = async (url) => await axios.delete(url).catch(console.error);
export const patchMethod = async (url,data) => await axios.patch(url,data).catch(console.error);
export const postMethod = async (url,data) => await axios.post(url,data).catch(console.error);