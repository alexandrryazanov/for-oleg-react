import { combineReducers } from "redux";
import usersReducer from "../redux/users/reducers";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
