import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import data from "./data.json";
import "./index.css";

// fake the fetch to the backend server and return data
globalThis.fetch = (_url): Promise<Response> =>
  new Promise((resolve) =>
    new Promise((resolve) => setTimeout(resolve, 50)).then(() =>
      resolve({
        json: () => new Promise((resolve) => resolve(data)),
      } as unknown as Promise<Response>)
    )
  );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
