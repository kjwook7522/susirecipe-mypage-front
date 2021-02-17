import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMonthTodo } from 'actions/todoList';
import ConfirmPopup from 'components/molecules/ConfirmPopup/ConfirmPopup';
import Input from 'components/atoms/Input/Input';
import { StyledAddSchedulePopup } from './AddSchedulePopup.styled';

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

  return (
    <StyledAddSchedulePopup ref={clickRef} {...props}>
      <ConfirmPopup
        cancleCallback={canclePopup}
        confirmCallback={confirmPopup}
      >
        <div className="input-box">
          <h1>일정</h1>
          <Input width="250px" backgroundColor="#f6f6f6" />
        </div>
        <div className="input-box">
          <h1>제목</h1>
          <Input
            width="250px"
            value={title}
            backgroundColor="#f6f6f6"
            placeholder="일정 제목을 입력하세요"
            onChange={handleInput}
          />
        </div>
      </ConfirmPopup>
    </StyledAddSchedulePopup>
  );
};

export default AddSchedulePopup;
