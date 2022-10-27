type ReducerState = {
  filters: {
    priority: string;
  };
  jobs: any[];
};

export const initialState: ReducerState = {
  filters: {
    priority: "all",
  },
  jobs: [],
};

export const reducer = (state = initialState, action): ReducerState => {
  switch (action.type) {
    case "LOAD_DATA_SUCCESS": {
      return {
        ...state,
        jobs: action.jobs,
      };
    }
    case "SET_PRIORITY_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          priority: action.value,
        },
      };
    default:
      return state;
  }
};
