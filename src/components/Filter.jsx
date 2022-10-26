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

const Filter = ({ name }) => (
  <FilterContainer>
    <label htmlFor={name}>{name}</label>
    <select
      style={{ width: "100%", marginLeft: 12 }}
      name={name}
      id={name}
      onChange={() => {}}
      value={"All"}
    >
      <option value="all">All</option>
      <option value="filterValue1">Value1</option>
      <option value="filterValue2">Value2</option>
      <option value="filterValue3">Value3</option>
    </select>
  </FilterContainer>
);
export default Filter;
