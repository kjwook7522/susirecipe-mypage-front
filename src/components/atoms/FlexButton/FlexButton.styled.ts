import { ButtonTheme } from '@objects';

import styled, { css } from 'styled-components';

const DefaultButtonCSS = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const StyledFlexButton = styled.button<{ width: string; height: string; theme: ButtonTheme }>`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.theme.bgColor};
  font-size: 0.9rem;
  color: ${props => props.theme.textColor};
  ${DefaultButtonCSS}

  &:hover {
    background: ${props => props.theme.hoverColor};
  }
`;
