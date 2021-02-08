import styled from 'styled-components';

export const StyledInput = styled.input<{ width?: string }>`
  margin-right: 1.6rem;
  width: ${props => props.width || '150px'};
  padding: 0.5rem 0.3rem;
  border: 1px solid transparent;
  border-radius: 7px;
  font-size: 0.8rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3d3d3d;
  }
`;
