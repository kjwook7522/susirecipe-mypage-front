import React from 'react';
import { StyledSqureButton } from './SqureButton.styled';

interface Props {
  size: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  clickRef?: React.RefObject<any>;
  disableSubmit?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SqureButton: React.FC<Props> = ({ children, clickRef, disableSubmit, ...props }) => {
  return (
    <StyledSqureButton ref={clickRef} type={disableSubmit ? 'button' : undefined} {...props}>
      {children}
    </StyledSqureButton>
  );
};

export default React.memo(SqureButton);
