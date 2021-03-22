import React from 'react';
import Calendar from 'components/molecules/Calendar/Calendar';
import ScheduleTodoList from 'components/molecules/ScheduleTodoList/ScheduleTodoList';
import SchedulePopupModule from 'components/molecules/SchedulePopupModule/SchedulePopupModule';
import {
  StyledScheduleTemplate,
  StyledPageTitle,
  StyledCalendarSection,
  StyledTodoSection,
} from './ScheduleTemplate.styled';

const ScheduleTemplate: React.FC = () => (
  <StyledScheduleTemplate>
    <StyledPageTitle>일정 관리</StyledPageTitle>
    <StyledCalendarSection>
      <SchedulePopupModule />
      <Calendar />
    </StyledCalendarSection>
    <StyledTodoSection>
      <h1>- 이번 달 할일</h1>
      <ScheduleTodoList type="MONTH" />
      <h1>- 금일 할 일</h1>
      <ScheduleTodoList type="TODAY" />
    </StyledTodoSection>
  </StyledScheduleTemplate>
);

export default ScheduleTemplate;
