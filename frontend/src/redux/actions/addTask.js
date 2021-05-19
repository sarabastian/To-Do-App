import { ADD_TASK } from "./actionConstants";
import { API_URL } from "../../apiConstants";

const addTask = (e, description, reminder, day) => (dispatch) => {
  e.preventDefault();

  fetch(API_URL + "/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      description: description,
      reminder: reminder,
      day_id: day.id,
    }),
  })
    .then((r) => r.json())
    .then((task) => {
      return dispatch({ type: ADD_TASK, payload: task });
    });
};

export default addTask;
