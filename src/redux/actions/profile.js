import * as t from "../constants/types";
import axios from "axios";
import { configAxios } from "../../config/Utils";

export const handleGetMyAddress = () => async (dispatch) => {
  console.log("First");
  try {
    // dispatch({ type: t.ADDRESS_REQUEST });
    const { data } = await axios.get("/auth/my/address/user/", configAxios());
    console.log("Secound: ", data);
    dispatch({
      type: t.GET_ADDRESS_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: t.ADDRESS_FAIL,
      payload: err?.response && err?.response?.data,
    });
  }
};

export const handleGetMyInfo = () => async (dispatch) => {
  try {
    // dispatch({ type: t.INFO_REQUEST });
    const { data } = await axios.post("/auth/my_info/user/", configAxios());

    dispatch({
      type: t.GET_INFO_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: t.INFO_FAIL,
      payload: err?.response && err?.response?.data,
    });
  }
};

export const handleSetMyAddress = (formData) => async (dispatch) => {
  try {
    dispatch({ type: t.ADDRESS_REQUEST });
    const { data } = await axios.post(
      "/auth/my/address/user/",
      formData,
      configAxios()
    );
    dispatch({
      type: t.SET_ADDRESS_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: t.ADDRESS_FAIL,
      payload: err?.response && err?.response?.data,
    });
  }
};
