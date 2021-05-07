import {
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK,
} from "../actions/actionConstants";

const initialState = {
  tasks: [],
  isLoading: false,
  error: "",
};
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, isLoading: true, error: "" };
    case FETCH_TASKS_SUCCESS:
      return { ...state, isLoading: false, tasks: action.payload };
    case FETCH_TASKS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case ADD_TASK:
      console.log(action.payload);
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default tasksReducer;
