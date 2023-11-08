import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 15px;

  .header {
    padding: 20px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.6);
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 15px;
  transition: all 0.3s;

  &.active {
    color: red;
  }
`;
