import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  border: 1px solid gray;
  border-radius: 16px;
  padding: 16px;
  background: lightblue;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const Filter = ({ name, value, onChange }) => (
  <FilterContainer>
    <label htmlFor={name}>{name}</label>
    <select
      style={{ width: "100%", marginLeft: 12 }}
      name={name}
      id={name}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      <option value="all">All</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
  </FilterContainer>
);
export default Filter;
