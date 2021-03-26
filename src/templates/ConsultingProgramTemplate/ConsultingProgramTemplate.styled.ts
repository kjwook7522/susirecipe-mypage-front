import styled from 'styled-components';

export const StyledConsultingHeader = styled.div`
  width: 100%;
  padding: 1rem 4.5rem;
  display: flex;
  justify-content: space-between;
  background-color: #1b313f;
`;

export const StyledProgramTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-bottom: 0.25rem;
    color: #fff;
    font-weight: 700;
    font-size: 0.9rem;
  }

  h2 {
    color: #fff;
    font-size: 0.8rem;
  }

  img {
    width: 80px;
    margin-right: 1.2rem;
    border-radius: 50%;
  }
`;

export const StyledProgramPeriod = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #fff;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;

export const StyledConsultingProgramTemplate = styled.div`
  padding: 2.5rem 4.5rem;
`;

export const StyledToggleTitle = styled.div`
  margin-bottom: 4rem;

  button {
    border: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 1.125rem;
    color: #909090;
    cursor: pointer;
  }

  .active {
    color: #000;
  }
`;
