import { combineReducers } from "redux";
import daysReducer from "./daysReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  daysReducer,
  tasksReducer,
});
