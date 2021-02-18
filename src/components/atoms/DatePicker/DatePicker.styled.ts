import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  display: inline-block;

  .react-date-picker__wrapper {
    padding: 0.3rem;
    border: none;
    border-radius: 10px;
    background-color: #f6f6f6;
  }

  .react-calendar {
    padding: 0.3rem;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(17,17,26,0.05) 0px 1px 0px,rgba(17,17,26,0.1) 0px 0px 8px;
  }

  .react-date-picker__button {
    font-size: 1rem;
    color: #303030;

    &:hover {
      color: #909090;
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