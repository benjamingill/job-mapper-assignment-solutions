import React from "react";
import Filter from "./Filter";

const Sidebar = ({ filters, onFilterChange }) => (
  <div style={{ width: 256, padding: 32 }}>
    <h2>Job Filters</h2>
    <Filter
      name="Priority"
      value={filters.priority}
      onChange={onFilterChange}
    />
  </div>
);

export default Sidebar;
