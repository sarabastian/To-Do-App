import {
  FETCH_DAYS,
  FETCH_DAYS_SUCCESS,
  FETCH_DAYS_FAILURE,
} from "../actions/actionConstants";

const initialState = {
  days: [],
  isLoading: false,
  error: "",
};

const daysReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAYS:
      return { ...state, isLoading: true, error: "" };

    case FETCH_DAYS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        days: action.payload,
      };

    case FETCH_DAYS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default daysReducer;
