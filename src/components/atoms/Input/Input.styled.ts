import styled from 'styled-components';

export const StyledInput = styled.input<{ width?: string; backgroundColor?: string }>`
  margin-right: 1.6rem;
  width: ${props => props.width || '150px'};
  padding: 0.5rem 0.3rem;
  border: 1px solid transparent;
  border-radius: 7px;
  background-color: ${props => props.backgroundColor || '#fff'};
  font-size: 0.8rem;

  &:focus {
    outline: none;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  }
`;
