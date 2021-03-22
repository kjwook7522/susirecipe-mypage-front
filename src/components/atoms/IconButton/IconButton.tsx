import React from 'react';
import { StyledIconButton } from './IconButton.styled';

interface Props {
  color?: string;
  clickRef?: React.RefObject<any>;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

const IconButton: React.FC<Props> = ({ children, clickRef, ...props }: Props) => (
  <StyledIconButton ref={clickRef} {...props}>
    {children}
  </StyledIconButton>
);

export default React.memo(IconButton);
