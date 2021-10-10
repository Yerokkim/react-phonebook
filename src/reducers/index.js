import { combineReducers } from "redux";
import addReducer from "./addReducers";

export default combineReducers({
  items: addReducer,
});
