import { StyledSmallButton, StyledMiddleButton, StyledFlexButton, StyledSquareButton } from './Button.styled';

type colors = 'black' | 'blue' | 'kakao';

interface Theme {
  bgColor: string;
  hoverColor: string;
  textColor: string;
}

interface Props {
  theme?: colors;
  id?: string;
  classname?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
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
      return { bgColor: '#f5d60b', hoverColor: '#fde85f', textColor: '#fff' };
    default:
      return { bgColor: '#000', hoverColor: '#303030', textColor: '#fff' };
  }
};

export const SmallButton: React.FC<Props> = ({ children, theme, ...props }) => {
  return (
    <StyledSmallButton theme={convertTheme(theme)} {...props}>
      {children}
    </StyledSmallButton>
  );
};

export const MiddleButton: React.FC<Props> = ({ children, theme, ...props }) => {
  return (
    <StyledMiddleButton theme={convertTheme(theme)} {...props}>
      {children}
    </StyledMiddleButton>
  );
};

export const FlexButton: React.FC<FlexProps> = ({ children, theme, ...props }) => {
  return (
    <StyledFlexButton theme={convertTheme(theme)} {...props}>
      {children}
    </StyledFlexButton>
  );
};

export const SquareButton: React.FC<SquareProps> = ({ children, theme, ...props }) => {
  return (
    <StyledSquareButton theme={convertTheme(theme)} {...props}>
      {children}
    </StyledSquareButton>
  );
};
