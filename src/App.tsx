import React, { useEffect } from "react";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import data from "./data.json";

// fake out the backend server fetch
// nock("https://grid.com").get("/data").reply(200, data);
const fetch = (_url) =>
  new Promise((resolve) =>
    new Promise((resolve) => setTimeout(resolve, 500)).then(() =>
      resolve({ json: () => new Promise((resolve) => resolve(data)) })
    )
  );

const App = () => {
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
