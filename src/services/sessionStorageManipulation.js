const a = "sessionID";
export const setID = (id)  => sessionStorage.setItem(a, id);
export const getID = ()  => sessionStorage.getItem(a);
export const clearID = ()  => sessionStorage.removeItem(a);
export const isAuthenticated = ()  =>  !!sessionStorage.getItem("sessionID");
