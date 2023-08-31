import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px 24px;
  margin-bottom: 6px;
  border-radius: 4px;
  font-weight: 700;
  color: #393e46;

  &.active {
    color: #fff;
    background-color: #00adb5;
  }

  @media only screen and (max-width: 600px) {
    padding: 12px 20px;
  }
`;
