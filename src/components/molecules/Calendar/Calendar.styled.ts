import styled from 'styled-components';

export const StyledCalendar = styled.div`
  .react-calendar {
    border: none;
    background-color: transparent;

    button {
      border-radius: 10px;
    }
  }

  .react-calendar__tile--now {
    background-color: #006edc;
    color: #fff;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background-color: #1087ff;
  }

  .react-calendar__tile--active {
    background-color: #777;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #aaa;
  }
`;
