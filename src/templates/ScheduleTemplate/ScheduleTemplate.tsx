import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'common/store';
import { FlexButton } from 'components/atoms/Button/Button';
import Calendar from 'components/molecules/Calendar/Calendar';
import MenuPopup from 'components/molecules/MenuPopup/MenuPopup';
import ScheduleTodoList from 'components/molecules/ScheduleTodoList/ScheduleTodoList';
import { useClickOutside } from 'hooks/useClickOutside';
import {
  StyledScheduleTemplate,
  StyledPageTitle,
  StyledCalendarSection,
  StyledTodoSection,
} from './ScheduleTemplate.styled';

const ScheduleTemplate: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const plusBtnRef = useClickOutside(() => setActiveMenu(false));

  const handleClick = () => {
    setActiveMenu(true);
  };

  const myTodoList = useSelector((state: RootState) => state.todoListReducer);
  const scheduleMenu = ['일정 추가', '일정 수정'];

  return (
    <StyledScheduleTemplate>
      <StyledPageTitle>일정 관리</StyledPageTitle>
      <StyledCalendarSection>
        <Calendar />
        <FlexButton className="plus-btn" width="30px" height="30px" clickRef={plusBtnRef} onClick={handleClick}>
          +
        </FlexButton>
        <MenuPopup menuList={scheduleMenu} top="10px" right="0" active={activeMenu} />
      </StyledCalendarSection>
      <StyledTodoSection>
        <h1>- 이번 달 할일</h1>
        <ScheduleTodoList todoList={myTodoList.month} type="MONTH" />
        <h1>- 금일 할 일</h1>
        <ScheduleTodoList todoList={myTodoList.today} type="TODAY" />
      </StyledTodoSection>
    </StyledScheduleTemplate>
  );
};

export default ScheduleTemplate;
