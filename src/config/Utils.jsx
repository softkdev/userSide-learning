import useJwt from "./useJwt";

export const isObjEmpty = (obj) => Object.keys(obj).length === 0;

export const isUserLoggedIn = () => {
  return (
    localStorage.getItem("userData") &&
    localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
  );
};

export const getUserData = () => JSON.parse(localStorage.getItem("userData"));

export const configAxios = () => ({
  headers: {
    Authorization: `Bearer ${useJwt.getToken() || null}`,
  },
});
