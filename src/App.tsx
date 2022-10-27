import React, { useCallback, useEffect, useReducer } from "react";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import { initialState, reducer } from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch("https://data.nationalgrid.com");
      const jobs = await response.json();
      dispatch({ type: "LOAD_DATA_SUCCESS", jobs });
    };
    callApi();
  });

  const isFilterMatch = useCallback(
    (job) =>
      state.filters.priority === "all" ||
      job.priority === state.filters.priority,
    [state]
  );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Map jobs={state.jobs.filter(isFilterMatch)} />
      <Sidebar
        filters={state.filters}
        onFilterChange={(value) =>
          dispatch({ type: "SET_PRIORITY_FILTER", value })
        }
      />
    </div>
  );
};

export default App;
