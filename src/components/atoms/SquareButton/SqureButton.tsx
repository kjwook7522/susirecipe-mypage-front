import React from 'react';
import { StyledSqureButton } from './SqureButton.styled';

interface Props {
  size: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  clickRef?: React.RefObject<any>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SqureButton: React.FC<Props> = ({ children, clickRef, ...props }) => {
  return (
    <StyledSqureButton ref={clickRef} {...props}>
      {children}
    </StyledSqureButton>
  );
};

export default React.memo(SqureButton);
