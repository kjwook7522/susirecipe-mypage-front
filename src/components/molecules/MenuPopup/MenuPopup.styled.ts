import styled from 'styled-components';

export const StyledMenuPopup = styled.ul<{
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  active?: boolean;
}>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  display: ${props => (props.active ? 'inline-flex' : 'none')};
  flex-direction: column;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  text-align: center;
  font-size: 1rem;

  li {
    padding: 0.5em 1.5em;
    cursor: pointer;

    &:first-child {
      border-radius: 10px 10px 0 0;
    }

    &:last-child {
      border-radius: 0 0 10px 10px;
    }

    &:hover {
      background-color: #f6f6f6;
    }
  }
`;
