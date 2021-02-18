import { useCallback, useState } from 'react';
import FlexButton from 'components/atoms/FlexButton/FlexButton';
import Calendar from 'components/molecules/Calendar/Calendar';
import ScheduleTodoList from 'components/molecules/ScheduleTodoList/ScheduleTodoList';
import { useClickOutside } from 'hooks/useClickOutside';
import {
  StyledScheduleTemplate,
  StyledPageTitle,
  StyledCalendarSection,
  StyledTodoSection,
} from './ScheduleTemplate.styled';
import AddSchedulePopup from 'components/organisms/AddSchedulePopup/AddSchedulePopup';

const ScheduleTemplate: React.FC = () => {
  const [activePopup, setActivePopup] = useState(false);
  const [popupRef, plusBtnRef] = useClickOutside(() => setActivePopup(false));

  const handleAddButton = useCallback(() => {
    setActivePopup(true);
  }, []);

  const canclePopup = useCallback(() => {
    setActivePopup(false);
  }, []);

  return (
    <StyledScheduleTemplate>
      <StyledPageTitle>일정 관리</StyledPageTitle>
      <StyledCalendarSection>
        <Calendar />
        <FlexButton className="plus-btn" width="30px" height="30px" clickRef={plusBtnRef} onClick={handleAddButton}>
          +
        </FlexButton>
        <AddSchedulePopup active={activePopup} clickRef={popupRef} top="10px" right="7px" canclePopup={canclePopup} />
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
