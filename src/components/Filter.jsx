import React from "react";

const Filter = ({ name }) => (
  <div
    style={{
      border: "1px solid gray",
      borderRadius: "16px",
      padding: "16px",
      background: "lightBlue",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between"
    }}
  >
    <label htmlFor={name}>{name}</label>
    <select
      style={{ width: "100%", marginLeft: 12 }}
      name={name}
      id={name}
      onChange={() => {}}
      value={""}
    >
      <option value="all">All</option>
      <option value="filterValue1">Value1</option>
      <option value="filterValue2">Value2</option>
      <option value="filterValue3">Value3</option>
    </select>
  </div>
);
export default Filter;
