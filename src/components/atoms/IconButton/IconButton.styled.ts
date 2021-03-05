import styled from 'styled-components';

export const StyledIconButton = styled.span<{ color?: string }>`
  padding: 0.4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  font-size: 1.3rem;
  color: ${props => props.color || '#404040'};
  cursor: pointer;
  transition: all 0.4s ease-out;

  &:hover {
    background-color: ${props => props.color || '#404040'};
    color: #fff;
  }
`;
