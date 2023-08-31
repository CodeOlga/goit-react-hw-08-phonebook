import styled from 'styled-components';

export const Header = styled.header`
  width: 768px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;
