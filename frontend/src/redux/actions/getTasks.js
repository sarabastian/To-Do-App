import {
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
} from "./actionConstants";
import { API_URL } from "../../apiConstants";
const getTasks = () => (dispatch) => {
  dispatch({ type: FETCH_TASKS });

  fetch(API_URL + "/tasks")
    .then((r) => r.json())
    .then((tasks) => {
      return dispatch({ type: FETCH_TASKS_SUCCESS, payload: tasks });
    })
    .catch((err) => {
      return dispatch({ type: FETCH_TASKS_FAILURE, payload: err });
    });
};

export default getTasks;
