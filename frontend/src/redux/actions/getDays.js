import {
  FETCH_DAYS,
  FETCH_DAYS_SUCCESS,
  FETCH_DAYS_FAILURE,
} from "./actionConstants";

import { API_URL } from "../../apiConstants";

const getDays = () => (dispatch) => {
  dispatch({ type: FETCH_DAYS });
  fetch(API_URL + "/days")
    .then((r) => r.json())
    .then((days) => {
      return dispatch({ type: FETCH_DAYS_SUCCESS, payload: days });
    })
    .catch((err) => {
      return dispatch({ type: FETCH_DAYS_FAILURE, payload: err });
    });
};

export default getDays;
