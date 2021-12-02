import * as t from "./../constants/types";

const initialState = {
  userAddresses: [],
  profile: {},
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case t.ADDRESS_REQUEST:
      return {
        loading: true,
        userAddresses: [],
      };
    case t.INFO_REQUEST:
      return {
        loading: true,
        profile: {},
      };
    case t.GET_INFO_SUCCESS || t.SET_INFO_SUCCESS:
      return {
        loading: false,
        profile: action.payload,
      };
    case t.GET_ADDRESS_SUCCESS || t.SET_ADDRESS_SUCCESS:
      return {
        loading: false,
        userAddresses: action.payload,
      };
    case t.INFO_FAIL || t.ADDRESS_FAIL:
      return {
        loading: false,
        error: action.payLoad,
      };
    default:
      return state;
  }
};

export default profile;
