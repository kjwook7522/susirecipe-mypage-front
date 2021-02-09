import styled from 'styled-components';

export const StyledListRow = styled.div`
  display: flex;
  margin-bottom: 0.8rem;

  .content-cell {
    height: 70px;
    display: flex;
    border: none;
    border-radius: 10px;
    background-color: #f6f6f6;
    font-size: 0.9rem;
  }

  .content-cell:nth-child(1) {
    width: 100%;
    padding: 0 1rem;
    margin-right: 1.5rem;
    align-items: center;
  }

  .content-cell:nth-child(2) {
    width: 200px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`;
