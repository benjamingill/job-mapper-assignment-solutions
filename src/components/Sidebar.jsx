import React from "react";
import Filter from "./Filter";

const Sidebar = () => (
  <div style={{ width: 256, padding: 32 }}>
    <h2>Job Filters</h2>
    <Filter name="Filter1" />
  </div>
);

export default Sidebar;
