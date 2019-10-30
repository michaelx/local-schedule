import React from 'react';
import styled from 'styled-components';

const StyledListSubheader = styled.li`
  padding-top: .5em;
  padding-bottom: .5em;

  font-weight: 500;
  text-align: center;
  color: #6772e5;
`;

const ListSubheader = ({ date }) => (
  <StyledListSubheader>{date}</StyledListSubheader>
);

export default ListSubheader;
