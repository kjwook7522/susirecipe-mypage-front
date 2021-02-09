import styled, { css } from 'styled-components';

export const StyledTakingConsulting = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const StyledTableRow = styled.div<{ active?: boolean }>`
  display: flex;
  margin-bottom: 0.8rem;

  .head-cell {
    text-align: center;
    font-weight: 600;
  }

  .head-cell:nth-child(1) {
    width: 100%;
    margin-right: 1.5rem;
  }

  .head-cell:nth-child(2) {
    width: 200px;
  }

  .content-cell {
    min-height: 70px;
    padding: 1.3rem 1rem;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 10px;
    background-color: #f6f6f6;
    font-size: 0.9rem;
  }

  .content-cell:nth-child(1) {
    width: 100%;
    margin-right: 1.5rem;
    justify-content: center;
    animation: test 1s backwards;
    transition: all 0.5s ease;
    cursor: pointer;

    ${props =>
      props.active &&
      css`
        transition: all 0.5s ease 0.5s;
      `}

    .more-icon {
      padding: 0.3rem;
      margin-left: auto;
    }

    .title {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
    }

    .content {
      max-height: 0;
      overflow: hidden;
      transition: all 0.5s ease;

      ${props =>
        props.active &&
        css`
          max-height: 180px;
          margin-top: 2rem;
          transition: all 0.5s ease 0.5s;
        `}
      
      p {
        margin-bottom: 1rem;
      }
    }
  }

  .content-cell:nth-child(2) {
    width: 200px;
    justify-content: center;
    align-items: center;

    transition: all 0.5s ease 0.3s;
    ${props =>
      props.active &&
      css`
        transition: all 0.5s;
        opacity: 0;
        margin-right: -300px;
      `}
  }
`;
