import { ADD_DAY } from "./actionConstants";
import { API_URL } from "../../apiConstants";

const addDay = (day) => {
  return (dispatch) => {
    fetch(API_URL + "/days", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ date: day }),
    })
      .then((r) => r.json())
      .then((day) => {
        return dispatch({ type: ADD_DAY, payload: day });
      });
  };
};

export default addDay;
