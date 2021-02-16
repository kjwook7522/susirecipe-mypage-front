import styled from 'styled-components';

export const StyledScheduleTodoList = styled.ul`
  margin-bottom: 1.4rem;
  li {
    padding: 0.3rem 0;
    font-size: 0.9rem;
    color: #3a3a3a;
  }
`;

export const StyledButtonWrapper = styled.span`
  margin-left: 1.5rem;
  color: #9a9a9a;

  .edit-btn {
    border: none;
    background-color: transparent;
    color: #a8b5e7;
    font-size: 0.8rem;
    cursor: pointer;

    &:hover {
      color: #6f83d1;
    }
  }

  .delete-btn {
    border: none;
    background-color: transparent;
    color: #e7797e;
    font-size: 0.8rem;
    cursor: pointer;

    &:hover {
      color: #e70f1a;
    }
  }
`;
