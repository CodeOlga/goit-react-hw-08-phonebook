import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 40px;
  border-radius: 30px;
  background-color: #e9e9e9;
  box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const FormInput = styled.input`
  height: 45px;
  margin: 8px;
  border-radius: 20px;
  font-size: 24px;
  text-align: end;
  border: 0;
  outline: 0;
  padding-right: 10px;
  background-color: #e9e9e9;
  box-shadow: -5px -7px 9px #fff inset, 5px 11px 17px -13px #000 inset;
`;

export const FormButton = styled.button`
  color: #00adb5;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600;
  background-color: #e9e9e9;
  width: 200px;
  height: 50px;
  margin: 8px;
  border: 0;
  box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;
  cursor: pointer;
  outline: 0;

  &:hover,
  &:focus {
    background-color: #d6d6d6;
  }
`;
