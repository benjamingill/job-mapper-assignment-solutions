export const initialState = {
  filters: {
    priority: "",
    status: "",
  },
  jobs: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA_SUCCESS": {
      return {
        ...state,
        jobs: action.jobs,
      };
    }
    case "SET_PRIORITY_FILTER":
    default:
      return state;
  }
};
