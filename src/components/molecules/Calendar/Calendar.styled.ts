import styled from 'styled-components';

export const StyledCalendar = styled.div`
  .react-calendar {
    width: 100%;
    border: none;
    background-color: transparent;

    button {
      border-radius: 10px;
    }
  }

  .react-calendar__tile--now {
    background-color: #a84e8e;
    color: #fff;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background-color: #6fabdd;
  }

  .react-calendar__tile--active {
    background-color: #5e9bce;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #6fabdd;
  }
`;
