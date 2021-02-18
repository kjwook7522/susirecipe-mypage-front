import React from 'react';
import { useState } from 'react';
import ReactDatePicker from 'react-date-picker';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { StyledDatePicker } from './DatePicker.styled';

const DatePicker: React.FC = () => {
  const [date, setDate] = useState<Date | Date[]>(new Date());
  return (
    <StyledDatePicker>
      <ReactDatePicker
        value={date}
        clearIcon={null}
        calendarIcon={<FaRegCalendarAlt />}
        onChange={value => setDate(value)}
      />
    </StyledDatePicker>
  );
};

export default React.memo(DatePicker);
