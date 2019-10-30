import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from './Button';

const StyledForm = styled.form`
  display: inline-block;
  padding-right: 1em;
`;

const StyledLabel = styled.label`
  color: #666;
`;

const StyledInput = styled.input`
  display: inline-block;
  margin-right: .5em;
  margin-left: .5em;

  font-size: 1em;
  text-align: center;
  color: #6772e5;

  border: 0;
  border-bottom: 2px solid rgba(103,114,229,.32);
  border-radius: 0;
  background-color: transparent;

  appearance: none; /* Removes platform specific styling */
`;


const FilterForm = (props) => {
  const [state, setState] = useState(props.data);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onFilterChange(state);
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setState({
      ...state,
      [name]: parseInt(value, 10),
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>Next games starting between</StyledLabel>
      <StyledInput
        name="min"
        type="number"
        min="0"
        max="24"
        value={state.min}
        onChange={handleInputChange}
      />
      <StyledLabel>and</StyledLabel>
      <StyledInput
        name="max"
        type="number"
        min="0"
        max="24"
        value={state.max}
        onChange={handleInputChange}
      />
      <StyledButton as="input" type="submit" value="Filter" />
    </StyledForm>
  );
};

export default FilterForm;
