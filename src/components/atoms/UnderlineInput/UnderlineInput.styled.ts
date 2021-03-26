import styled from 'styled-components';

export const StyledUnderlineInput = styled.input`
  width: 100%;
  padding: 0.4rem 0.2rem;
  border: none;
  border-bottom: 2px solid #ccced2;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #4a9cd3;
  }
`;
