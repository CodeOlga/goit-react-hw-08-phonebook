import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px 16px;
  margin-bottom: 6px;
  // margin-left: 6px;
  border-radius: 4px;
  font-weight: 700;
  color: #393e46;

  &.active {
    color: #fff;
    background-color: #00adb5;
  }
`;
