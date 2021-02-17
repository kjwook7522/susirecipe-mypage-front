import React from 'react';
import ReactCalendar from 'react-calendar';
import { StyledCalendar } from './Calendar.styled';
import 'react-calendar/dist/Calendar.css';

const Calendar: React.FC = () => {
  return (
    <StyledCalendar>
      <ReactCalendar calendarType="US" />
    </StyledCalendar>
  );
};

export default React.memo(Calendar);
