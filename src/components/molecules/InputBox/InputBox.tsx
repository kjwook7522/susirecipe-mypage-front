import React from 'react';
import { StyledInputBox } from './InputBox.styled';

interface Props {
  label: string;
  labelFor?: string;
  children?: React.ReactNode;
}

const InputBox: React.FC<Props> = ({ children, label, labelFor }: Props) => (
  <StyledInputBox>
    <label htmlFor={labelFor}>{label}</label>
    {children}
  </StyledInputBox>
);

export default InputBox;
