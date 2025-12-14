
export const setToken = (token) => {
  localStorage.setItem("token", token);
};


export const getToken = () => localStorage.getItem("token");

export const logout = () => {
  localStorage.removeItem("token");
};

export const getUserFromToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    return JSON.parse(atob(token.split(".")[1])); // { id, role }
  } catch {
    return null;
  }
};