import { BLACK, GRAY, INSTA, KAKAO, KOBALT, LIGHTRED, RED, SKY } from 'common/constants/ButtonTheme';
import { StyledFlexButton } from './FlexButton.styled';

interface Props {
  width: string;
  height: string;
  theme?: ButtonColors;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  clickRef?: React.RefObject<any>;
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

const FlexButton: React.FC<Props> = ({ children, theme, clickRef, ...props }) => {
  return (
    <StyledFlexButton theme={convertTheme(theme)} ref={clickRef} {...props}>
      {children}
    </StyledFlexButton>
  );
};

export default FlexButton;