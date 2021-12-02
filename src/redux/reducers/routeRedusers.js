import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";

const rootReducers = combineReducers({
  auth,
  profile,
});
export default rootReducers;
