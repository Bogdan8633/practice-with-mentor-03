// import Navigation from "./Navigation";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 24px;
  &.active {
    color: purple;
  }
`;
