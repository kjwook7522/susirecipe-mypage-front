import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/store';
import FlexButton from 'components/atoms/FlexButton/FlexButton';
import Input from 'components/atoms/Input/Input';
import Calendar from 'components/molecules/Calendar/Calendar';
import ConfirmPopup from 'components/molecules/ConfirmPopup/ConfirmPopup';
import ScheduleTodoList from 'components/molecules/ScheduleTodoList/ScheduleTodoList';
import styled from 'styled-components';
import { useClickOutside } from 'hooks/useClickOutside';
import {
  StyledScheduleTemplate,
  StyledPageTitle,
  StyledCalendarSection,
  StyledTodoSection,
} from './ScheduleTemplate.styled';
import { addMonthTodo } from 'actions/todoList';

const StyledPopupContent = styled.div`
  padding: 1.4em 2em;

  h1 {
    margin-bottom: 0.4rem;
    color: #333;
    font-size: 1rem;
  }

  .input-box {
    margin-bottom: 1rem;
  }
`;

const ScheduleTemplate: React.FC = () => {
  const dispath = useDispatch();
  const [activePopup, setActivePopup] = useState(false);
  const [popupRef, plusBtnRef] = useClickOutside(() => setActivePopup(false));
  const [popupInput, setPopupInput] = useState('');

  const handleAddButton = () => {
    setActivePopup(true);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPopupInput(value);
  };

  const canclePopup = () => {
    setActivePopup(false);
  };

  const confirmPopup = () => {
    dispath(addMonthTodo(popupInput));
    setPopupInput('');
    setActivePopup(false);
  };

  const myTodoList = useSelector((state: RootState) => state.todoListReducer);

  return (
    <StyledScheduleTemplate>
      <StyledPageTitle>일정 관리</StyledPageTitle>
      <StyledCalendarSection>
        <Calendar />
        <FlexButton className="plus-btn" width="30px" height="30px" clickRef={plusBtnRef} onClick={handleAddButton}>
          +
        </FlexButton>

        <ConfirmPopup
          top="10px"
          right="0"
          active={activePopup}
          clickRef={popupRef}
          cancleCallback={canclePopup}
          confirmCallback={confirmPopup}
        >
          <StyledPopupContent>
            <div className="input-box">
              <h1>일정</h1>
              <Input width="250px" backgroundColor="#f6f6f6" />
            </div>
            <div className="input-box">
              <h1>제목</h1>
              <Input
                width="250px"
                value={popupInput}
                backgroundColor="#f6f6f6"
                placeholder="일정 제목을 입력하세요"
                onChange={handleInput}
              />
            </div>
          </StyledPopupContent>
        </ConfirmPopup>
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
