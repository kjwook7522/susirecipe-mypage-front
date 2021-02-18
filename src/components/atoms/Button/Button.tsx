import React from 'react';
import { BLACK, GRAY, INSTA, KAKAO, KOBALT, LIGHTRED, RED, SKY } from 'common/constants/ButtonTheme';
import { StyledSmallButton, StyledMiddleButton } from './Button.styled';

interface Props {
  theme?: ButtonColors;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  clickRef?: React.RefObject<any>;
  disableSubmit?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const convertTheme = (color: ButtonColors | undefined): ButtonTheme => {
  switch (color) {
    case 'black':
      return BLACK;
    case 'red':
      return RED;
    case 'lightred':
      return LIGHTRED;
    case 'sky':
      return SKY;
    case 'kobalt':
      return KOBALT;
    case 'kakao':
      return KAKAO;
    case 'gray':
      return GRAY;
    case 'insta':
      return INSTA;
    default:
      return BLACK;
  }
};

export const SmallButton: React.FC<Props> = React.memo(({ children, theme, clickRef, disableSubmit, ...props }) => {
  return (
    <StyledSmallButton
      theme={convertTheme(theme)}
      ref={clickRef}
      type={disableSubmit ? 'button' : undefined}
      {...props}
    >
      {children}
    </StyledSmallButton>
  );
});

export const MiddleButton: React.FC<Props> = React.memo(({ children, theme, clickRef, ...props }) => {
  return (
    <StyledMiddleButton theme={convertTheme(theme)} ref={clickRef} {...props}>
      {children}
    </StyledMiddleButton>
  );
});
