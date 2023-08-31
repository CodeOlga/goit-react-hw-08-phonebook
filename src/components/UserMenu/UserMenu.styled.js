import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const WelcomeWrap = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  margin-right: 20px;
  width: 40px;
  @media only screen and (max-width: 600px) {
    width: 30px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export const Name = styled.span`
  font-weight: 700;
  margin-right: 20px;
`;

export const UserButton = styled.button`
  > svg {
    width: 30px;
    height: 22px;
    fill: red;
  }

  padding: 3px 10px 0 10px;
  margin-right: 20px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid red;

  &:hover {
    background-color: red;
    > svg {
      fill: #fff;
    }
  }
`;
