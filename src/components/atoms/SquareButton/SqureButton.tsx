import { BLACK, GRAY, INSTA, KAKAO, KOBALT, LIGHTRED, RED, SKY } from 'common/constants/ButtonTheme';
import { StyledSqureButton } from './SqureButton.styled';

interface Props {
  size: string;
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

const SqureButton: React.FC<Props> = ({ children, theme, clickRef, ...props }) => {
  return (
    <StyledSqureButton theme={convertTheme(theme)} ref={clickRef} {...props}>
      {children}
    </StyledSqureButton>
  );
};

export default SqureButton;
