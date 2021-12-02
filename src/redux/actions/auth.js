import * as t from "../constants/types";
import axios from "axios";
import useJwt from "../../config/useJwt";

export const handleLogin = (data) => {
  return (dispatch) => {
    localStorage.setItem("userData", JSON.stringify(data));
    dispatch({ type: t.LOGIN, data });
    useJwt.setRefreshToken(data.refreshToken);
    useJwt.setToken(data.accessToken);
    axios.interceptors.request.use(function (config) {
      const token = `Breare ${data.accessToken}`;
      config.headers.Authorization = token;
      return config;
    });
  };
};
