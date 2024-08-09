import { isAuthenticated } from "../utils/auth"

export const handleLoader = () => {
    return isAuthenticated();
}