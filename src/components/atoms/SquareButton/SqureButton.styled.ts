import styled, { css } from 'styled-components';

const DefaultButtonCSS = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const StyledSqureButton = styled.button<{ size: string }>`
  width: ${props => props.size};
  position: relative;
  background-color: #47759b;
  color: #fff;
  font-size: 0.9rem;
  z-index: 1;
  transition: all 0.5s;
  ${DefaultButtonCSS};

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
