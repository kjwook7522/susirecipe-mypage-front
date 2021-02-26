import styled from 'styled-components';

export const StyledFAQBoard = styled.div``;

export const StyledTable = styled.table`
  width: 100%;

  thead {
    background-color: #d6d6d6;
  }

  tbody {
    background-color: #f6f6f6;
  }
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

export const StyledHeaderRow = styled.tr`
  th {
    padding: 0.6em;
    font-weight: 600;
    font-size: 1rem;
  }

  th:nth-child(1) {
    width: 10%;
  }

  th:nth-child(2) {
    width: 60%;
    text-align: left;
  }

  th:nth-child(3) {
    width: 15%;
  }

  th:nth-child(4) {
    width: 15%;
  }
`;

export const StyledBodyRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }

  td {
    position: relative;
    padding: 0.8em 0.6em;
    text-align: center;
    font-size: 0.9rem;
  }

  td:nth-child(2) {
    text-align: left;
    color: #39759f;
    font-weight: 600;
  }

  .more-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    color: #606060;
  }
`;

export const StyledHiddenRow = styled.tr<{ active?: boolean }>`
  td {
    font-size: ${props => (props.active ? '1rem' : 0)};
  }

  td:nth-child(2) {
    text-align: left;
    color: #333;
    font-weight: 600;
  }

  div {
    max-height: ${props => (props.active ? '300px' : '0')};
    padding: ${props => (props.active ? '2.5em 0.6em' : '0 3em')};
    overflow: ${props => (props.active ? 'scroll' : 'hidden')};
    transition: max-height 0.3s, padding 0.5s;
  }
`;

export const StyledPagination = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPageButton = styled.button<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  margin: 0 0.3rem;
  border: none;
  background-color: ${props => (props.active ? '#39759f' : '#f6f6f6')};
  color: ${props => (props.active ? '#fff' : '#333')};
  font-size: 0.9rem;
  cursor: pointer;
`;

export const StyledArrowButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 0.3rem;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
`;
