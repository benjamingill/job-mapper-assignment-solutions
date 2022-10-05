import { createStore } from "redux";

const initialState = {
  filters: {
    priority: "",
    status: ""
  },
  jobs: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA_SUCCESS": {
      return {
        ...state,
        jobs: action.jobs
      };
    }
    case "SET_PRIORITY_FILTER":
    default:
      return state;
  }
};

export default createStore(reducer, initialState);
