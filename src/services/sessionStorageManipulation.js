const a = "sessionID";
const b = "userID";
export const setID = (id)  => sessionStorage.setItem(a, id);
export const setUserID = (id) => sessionStorage.setItem(b, id);
export const getUserID = () => sessionStorage.getItem(b);
export const getID = ()  => sessionStorage.getItem(a);
export const clearID = ()  => sessionStorage.removeItem(a);
export const isAuthenticated = ()  =>  !!sessionStorage.getItem("sessionID");
