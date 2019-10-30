import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  padding: .375rem .75rem;

  font-size: .875em;
  font-weight: normal;
  text-align: center;
  text-decoration: none;
  color: #6772e5;

  border: 1px solid #eee;
  border-radius: .25rem;
  background-color: #fff;

  cursor: pointer;
  user-select: none;
  appearance: none; /* Removes platform specific styling */

  &:hover {
    color: #fff;
    background-color: #6772e5;
  }
`;

const Button = ({ onButtonClick, title, payload }) => {
  const handleClick = () => {
    onButtonClick(payload);
  };

  return (
    <StyledButton onClick={handleClick}>{title}</StyledButton>
  );
};

export default Button;
