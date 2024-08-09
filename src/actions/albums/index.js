import { BASE_URL, getMethod } from "../../utils/api";

export const handleAlbumsAction = async () => {
    // const isAuthenticated = isAuthenticated();
    // if (!isAuthenticated) {
    //     return {
    //         status: 401,
    //         data: {
    //             message: 'Please login!'
    //         }
    //     }
    // }
    const response = await getMethod(`${BASE_URL}/photos`);
    if (response) return response;
    return null
}