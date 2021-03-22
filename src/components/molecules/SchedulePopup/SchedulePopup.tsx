import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMonthTodo } from 'actions/todoList';
import DatePicker from 'components/atoms/DatePicker/DatePicker';
import Input from 'components/atoms/Input/Input';
import FlexButton from 'components/atoms/FlexButton/FlexButton';
import { StyledSchedulePopup, StyledInputBox, StyledContentWrapper, StyledButtonWrapper } from './SchedulePopup.styled';

interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  clickRef?: React.RefObject<any>;
  handleCancle: () => void;
}

const SchedulePopup: React.FC<Props> = ({ clickRef, handleCancle, ...props }: Props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleOk = () => {
    dispatch(addMonthTodo(title));
    setTitle('');
    handleCancle();
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOk();
  };

  return (
    <StyledSchedulePopup ref={clickRef} {...props} onSubmit={handleSubmit}>
      <StyledContentWrapper>
        <StyledInputBox>
          <h1>일정</h1>
          <DatePicker />
        </StyledInputBox>
        <StyledInputBox>
          <h1>제목</h1>
          <Input
            width="250px"
            value={title}
            required
            backgroundColor="#f6f6f6"
            placeholder="일정 제목을 입력하세요"
            onChange={handleInput}
          />
        </StyledInputBox>
      </StyledContentWrapper>
      <StyledButtonWrapper>
        <FlexButton
          width="50%"
          height="50px"
          className="cancle-btn"
          theme="lightred"
          disableSubmit
          onClick={handleCancle}
        >
          취소
        </FlexButton>
        <FlexButton width="50%" height="50px" className="confirm-btn" theme="gray" onClick={handleOk}>
          확인
        </FlexButton>
      </StyledButtonWrapper>
    </StyledSchedulePopup>
  );
};

export default SchedulePopup;
