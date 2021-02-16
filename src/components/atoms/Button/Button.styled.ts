import styled, { css } from 'styled-components';

const DefaultButtonCSS = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const StyledSmallButton = styled.button<{ theme: ButtonTheme }>`
  width: 90px;
  height: 25px;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  font-size: 0.8rem;
  ${DefaultButtonCSS}

  &:hover {
    background-color: ${props => props.theme.hoverColor};
  }
`;

export const StyledMiddleButton = styled.button<{ theme: ButtonTheme }>`
  width: 160px;
  height: 70px;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  font-size: 0.9rem;
  ${DefaultButtonCSS}

  &:hover {
    background-color: ${props => props.theme.hoverColor};
  }
`;
