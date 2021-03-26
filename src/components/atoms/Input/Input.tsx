import React from 'react';
import { InputType } from '@objects';
import { StyledInput } from './Input.styled';

interface Props {
  id?: string;
  name?: string;
  width?: string;
  type?: InputType;
  className?: string;
  value?: string;
  placeholder?: string;
  backgroundColor?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = ({ type = 'text', ...props }: Props) => <StyledInput type={type} {...props} />;

export default React.memo(Input);
