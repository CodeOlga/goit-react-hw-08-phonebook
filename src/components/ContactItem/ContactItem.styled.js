import styled from 'styled-components';

export const ContactItems = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const ContactName = styled.span`
  margin-right: 10px;
`;

export const ContactNumber = styled.a`
  cursor: pointer;
  color: #1677ff;
`;

export const BtnEdit = styled.button`
  > svg {
    width: 30px;
    height: 22px;
    fill: #00adb5;
  }

  cursor: pointer;
  padding: 3px 10px 0 10px;
  margin-left: 20px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #00adb5;

  &:hover {
    background-color: #00adb5;
    > svg {
      fill: #ffffff;
    }
  }
`;

export const BtnDelete = styled.button`
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
  }

  > svg {
    width: 30px;
    height: 22px;
    fill: #f50505;
  }

  cursor: pointer;
  padding: 3px 10px 0 10px;
  margin-left: 5px;
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



