import { StyledSmallButton, StyledMiddleButton, StyledFlexButton, StyledSquareButton } from './Button.styled';

type colors = 'black' | 'blue' | 'kakao' | 'gray' | 'insta';

interface Theme {
  bgColor: string;
  hoverColor: string;
  textColor: string;
}

interface Props {
  theme?: colors;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  clickRef?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface FlexProps extends Props {
  width: string;
  height: string;
}

interface SquareProps extends Props {
  size: string;
}

const convertTheme = (color: colors | undefined): Theme => {
  switch (color) {
    case 'black':
      return { bgColor: '#000', hoverColor: '#303030', textColor: '#fff' };
    case 'blue':
      return { bgColor: '#006edc', hoverColor: '#2a89e7', textColor: '#fff' };
    case 'kakao':
      return { bgColor: '#f5e04c', hoverColor: '#fde85f', textColor: '#403631' };
    case 'gray':
      return { bgColor: '#444', hoverColor: '#606060', textColor: '#fff' };
    case 'insta':
      return { bgColor: '#a84e8e', hoverColor: '#cc4a76', textColor: '#fff' };
    default:
      return { bgColor: '#000', hoverColor: '#303030', textColor: '#fff' };
  }
};

export const SmallButton: React.FC<Props> = ({ children, theme, clickRef, ...props }) => {
  return (
    <StyledSmallButton theme={convertTheme(theme)} ref={clickRef} {...props}>
      {children}
    </StyledSmallButton>
  );
};

export const MiddleButton: React.FC<Props> = ({ children, theme, clickRef, ...props }) => {
  return (
    <StyledMiddleButton theme={convertTheme(theme)} ref={clickRef} {...props}>
      {children}
    </StyledMiddleButton>
  );
};

export const FlexButton: React.FC<FlexProps> = ({ children, theme, clickRef, ...props }) => {
  return (
    <StyledFlexButton theme={convertTheme(theme)} ref={clickRef} {...props}>
      {children}
    </StyledFlexButton>
  );
};

export const SquareButton: React.FC<SquareProps> = ({ children, theme, clickRef, ...props }) => {
  return (
    <StyledSquareButton theme={convertTheme(theme)} ref={clickRef} {...props}>
      {children}
    </StyledSquareButton>
  );
};
