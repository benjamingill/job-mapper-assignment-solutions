import React, { useEffect, useReducer } from "react";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import { initialState, reducer } from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // fetch data using mock asyncronous fetch above
  });

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Map />
      <Sidebar />
    </div>
  );
};

export default App;
