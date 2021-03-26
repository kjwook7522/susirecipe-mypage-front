import React from 'react';
import { InputType } from '@objects';
import { StyledUnderlineInput } from './UnderlineInput.styled';

interface Props {
  id?: string;
  name?: string;
  width?: string;
  type?: InputType;
  className?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const UnderlineInput: React.FC<Props> = ({ type = 'text', ...props }: Props) => (
  <StyledUnderlineInput type={type} {...props} />
);

export default React.memo(UnderlineInput);
