import React from 'react';
import { StyledCheckbox } from './Checkbox.styled';

interface Props {
  id: string;
  children?: React.ReactNode;
  agreementTheme?: 'all' | 'required' | 'selected';
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<Props> = ({ id, children, agreementTheme, ...props }: Props) => (
  <StyledCheckbox all={agreementTheme === 'all'}>
    <label htmlFor={id}>
      <input type="checkbox" id={id} {...props} />
      <span>{children}</span>
      {agreementTheme === 'required' && <span className="required">(필수)</span>}
      {agreementTheme === 'selected' && <span className="selected">(선택)</span>}
    </label>
  </StyledCheckbox>
);

export default React.memo(Checkbox);
