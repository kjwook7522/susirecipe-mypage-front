import React from 'react';
import { ButtonColors, ButtonTheme } from '@objects';
import { BLACK, GRAY, INSTA, KAKAO, KOBALT, LIGHTGRAY, LIGHTRED, RED, SKY } from 'common/constants/ButtonTheme';
import { StyledFlexButton } from './FlexButton.styled';

interface Props {
  width: string;
  height: string;
  theme?: ButtonColors;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  clickRef?: React.RefObject<any>;
  disableSubmit?: boolean;
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

const FlexButton: React.FC<Props> = ({ children, theme, clickRef, disableSubmit, ...props }: Props) => (
  <StyledFlexButton theme={convertTheme(theme)} ref={clickRef} type={disableSubmit ? 'button' : undefined} {...props}>
    {children}
  </StyledFlexButton>
);

export default React.memo(FlexButton);
