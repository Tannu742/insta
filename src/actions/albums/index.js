import { BASE_URL, getMethod } from "../../utils/api";

export const handleAlbumsAction = async () => {
    const response = await getMethod(`${BASE_URL}/photos`);
    if (response) return response;
    // console.log(response);
    return null
}