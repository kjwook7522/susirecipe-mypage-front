import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMonthTodo } from 'actions/todoList';
import ConfirmPopup from 'components/molecules/ConfirmPopup/ConfirmPopup';
import DatePicker from 'components/atoms/DatePicker/DatePicker';
import Input from 'components/atoms/Input/Input';
import { StyledAddSchedulePopup, StyledInputBox } from './AddSchedulePopup.styled';

interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  active?: boolean;
  clickRef?: React.RefObject<any>;
  canclePopup: () => void;
}

const AddSchedulePopup: React.FC<Props> = ({ clickRef, canclePopup, ...props }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const confirmPopup = () => {
    dispatch(addMonthTodo(title));
    setTitle('');
    canclePopup();
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    confirmPopup();
  };

  return (
    <StyledAddSchedulePopup ref={clickRef} {...props} onSubmit={handleSubmit}>
      <ConfirmPopup cancleCallback={canclePopup}>
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
      </ConfirmPopup>
    </StyledAddSchedulePopup>
  );
};

export default AddSchedulePopup;
