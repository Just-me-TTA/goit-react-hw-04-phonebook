import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const FieldsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 4px;
`;

export const Label = styled.label`
  font-size: 20px;
  display: flex;
  gap: 8px;
  color: #21ebff;
  text-shadow: 0 0 10px #ffffff;
`;

export const Input = styled(Field)`
  font-family: inherit;
  background-color: inherit;
  color: #21ebff;
  outline: none;
  border: 1px solid #21ebff;
  &:focus {
    border: 2px solid #21ebff;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  color: #fff;
  width: 130px;
  height: 28px;
  padding: 4px 10px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  color: #21ebff;
  border: 1px solid#21ebff;
  box-shadow: 0 0 5px #21ebff, 0 0 5px #21ebff inset;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #21ebff;
    box-shadow: 0 0 20px #21ebff;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: #ff9aff;
  text-shadow: 0 0 10px #ffffff;
`;

export const FormStyled = styled(Form)`
  margin-bottom: 20px;
`;
