export const isAuthenticated = () => {
    const isAuthenticated = JSON.parse(sessionStorage.getItem('userInfo'));
    return isAuthenticated || null
}