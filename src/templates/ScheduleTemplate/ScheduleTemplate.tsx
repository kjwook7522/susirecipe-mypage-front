import Calendar from 'components/molecules/Calendar/Calendar';
import ScheduleTodoList from 'components/molecules/ScheduleTodoList/ScheduleTodoList';
import {
  StyledScheduleTemplate,
  StyledPageTitle,
  StyledCalendarSection,
  StyledTodoSection,
} from './ScheduleTemplate.styled';
import SchedulePopupModule from 'components/molecules/SchedulePopupModule/SchedulePopupModule';

const ScheduleTemplate: React.FC = () => {
  return (
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
};

export default ScheduleTemplate;
