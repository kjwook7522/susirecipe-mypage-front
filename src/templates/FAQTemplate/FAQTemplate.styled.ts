import styled from 'styled-components';

export const StyledFAQTemplate = styled.div`
  padding: 2.5rem 4.5rem;
`;

export const StyledPageTitle = styled.h1`
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const StyledFAQBoardSection = styled.section`
  margin: 3rem 0;
`;

export const StyledSearchBar = styled.form`
  height: 30px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: flex-end;

  select {
    border: 1px solid #d6d6d6;

    &:focus {
      outline: none;
    }
  }

  input {
    width: 250px;
    margin-left: 0.6rem;
    padding: 0.5em;
    border: 1px solid #d6d6d6;
    font-size: 0.85rem;
    color: #333;

    &:focus {
      outline: none;
      border: 1px solid #a6a6a6;
    }
  }

  button {
    width: 35px;
    margin-left: 0.6rem;
    border: 1px solid transparent;
    background-color: #4a9cd3;
    color: #fff;
    cursor: pointer;
  }
`;
