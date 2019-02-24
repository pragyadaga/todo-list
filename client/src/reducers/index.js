import { combineReducers } from "redux";

import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import todoReducer from "./todoReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  todo: todoReducer
});
