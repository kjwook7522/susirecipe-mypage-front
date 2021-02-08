import styled from 'styled-components';

interface Theme {
  bgColor: string;
  hoverColor: string;
  textColor: string;
}

export const DefaultButton = styled.button<{ theme: Theme }>`
  display: inline-block;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.hoverColor};
  }
`;

export const StyledSmallButton = styled(DefaultButton)`
  width: 90px;
  height: 25px;
  font-size: 0.8rem;
`;

export const StyledMiddleButton = styled(DefaultButton)`
  width: 160px;
  height: 70px;
  font-size: 0.9rem;
`;

export const StyledFlexButton = styled(DefaultButton)<{ width: string; height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: 0.9rem;
`;

export const StyledSquareButton = styled(DefaultButton)<{ size: string }>`
  width: ${props => props.size};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  z-index: 1;
  transition: all 0.5s;

  /* for ratio 1:1 box */
  &::after {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  /* for slide animation */
  &::before {
    content: '';
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 9px;
    background-color: #fff;
    z-index: -1;
    transition: all 0.5s;
  }

  &:hover {
    color: #333;

    &::before {
      width: 100%;
    }
  }
`;
