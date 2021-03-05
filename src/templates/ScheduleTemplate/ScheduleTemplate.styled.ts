import styled from 'styled-components';

export const StyledScheduleTemplate = styled.div`
  padding: 2.5rem 4.5rem;
`;

export const StyledPageTitle = styled.div`
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const StyledCalendarSection = styled.section`
  margin-bottom: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .react-calendar {
    button {
      border-radius: 10px;
      font-size: 1rem;
    }
    .react-calendar__tile {
      padding: 1.6em 0.5em;
      box-sizing: border-box;
    }

    .react-calendar__month-view__days {
    }
  }
`;

export const StyledTodoSection = styled.section`
  padding: 2rem;
  border: none;
  border-radius: 10px;
  background-color: #f6f6f6;

  h1 {
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1rem;
  }
`;