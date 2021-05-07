import { API_URL } from "../../apiConstants";
import { DELETE_TASK } from "./actionConstants";

const deleteTask = (id) => (dispatch) => {
  fetch(API_URL + `/tasks/${id}`, {
    method: "DELETE",
  });

  return dispatch({ type: DELETE_TASK, payload: id });
};

export default deleteTask;
