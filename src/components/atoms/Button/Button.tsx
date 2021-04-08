import React from 'react';
import { ButtonColors, ButtonTheme } from '@objects';
import { BLACK, GRAY, INSTA, KAKAO, KOBALT, LIGHTGRAY, LIGHTRED, RED, SKY } from 'common/constants/ButtonTheme';
import { StyledSmallButton, StyledMiddleButton } from './Button.styled';

interface Props {
  theme?: ButtonColors;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  clickRef?: React.RefObject<any>;
  disableSubmit?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
    case 'lightgray':
      return LIGHTGRAY;
    case 'insta':
      return INSTA;
    default:
      return BLACK;
  }
};

export const SmallButton: React.FC<Props> = React.memo(
  ({ children, theme, clickRef, disableSubmit, ...props }: Props) => (
    <StyledSmallButton
      theme={convertTheme(theme)}
      ref={clickRef}
      type={disableSubmit ? 'button' : undefined}
      {...props}
    >
      {children}
    </StyledSmallButton>
  )
);

export const MiddleButton: React.FC<Props> = React.memo(({ children, theme, clickRef, ...props }: Props) => (
  <StyledMiddleButton theme={convertTheme(theme)} ref={clickRef} {...props}>
    {children}
  </StyledMiddleButton>
));
