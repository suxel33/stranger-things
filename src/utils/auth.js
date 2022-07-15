export const logout = (setToken) => {
    window.localStorage.clear()
    setToken();
}