import styled from 'styled-components';

export const StyledNavTodoList = styled.ul`
  li {
    margin: 0.5rem 0;
    font-size: 0.8rem;
  }

  li::before {
    content: '-';
    margin-right: 0.4rem;
  }
`;
