import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 380px;
  padding: 40px;
  border-radius: 20px;
  background-color: #e9e9e9;
  box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;

  @media screen and (max-width: 480px) {
    width: 300px;
  }

  @media screen and (max-width: 600px) {
    width: 380px;
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
`;
