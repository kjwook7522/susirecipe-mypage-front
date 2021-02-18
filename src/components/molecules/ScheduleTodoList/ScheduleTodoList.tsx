import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/store';
import { updateMonthTodo, updateTodayTodo } from 'actions/todoList';
import Input from 'components/atoms/Input/Input';
import { StyledScheduleTodoList, StyledButtonWrapper } from './ScheduleTodoList.styled';

interface Props {
  type: 'TODAY' | 'MONTH';
}

const ScheduleTodoList: React.FC<Props> = ({ type }) => {
  const dispatch = useDispatch();
  const myTodoList = useSelector((state: RootState) => state.todoListReducer);
  const todoList: TodoList = type === 'TODAY' ? myTodoList.today : myTodoList.month;
  
  const [isEdit, setIsEdit] = useState(false);
  const [editLine, setEditLine] = useState(-1);
  const [editText, setEditText] = useState('');

  const handleEdit = (idx: number, todo: string) => {
    if (!isEdit) {
      setIsEdit(true);
      setEditLine(idx);
      setEditText(todo);
    } else {
      if (window.confirm('작성중인 일정이 지워질 수 있습니다\n계속하시겠습니까?')) {
        setIsEdit(true);
        setEditLine(idx);
        setEditText(todo);
      }
    }
  };

  const handleDelete = (idx: number) => {
    todoList.splice(idx, 1);
    if (type === 'TODAY') {
      dispatch(updateTodayTodo([...todoList]));
    }

    if (type === 'MONTH') {
      dispatch(updateMonthTodo([...todoList]));
    }
  };

  const handleEditText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEditText(value);
  };

  const handleEditOK = (idx: number) => {
    todoList[idx] = editText;
    if (type === 'TODAY') {
      dispatch(updateTodayTodo([...todoList]));
    }

    if (type === 'MONTH') {
      dispatch(updateMonthTodo([...todoList]));
    }
    setIsEdit(false);
    setEditLine(-1);
  };

  const handleEditCancel = () => {
    setIsEdit(false);
    setEditLine(-1);
  };

  return (
    <StyledScheduleTodoList>
      {todoList.map((todo, idx) => (
        <li key={idx}>
          {editLine === idx ? (
            <>
              <Input width="200px" value={editText} onChange={handleEditText} />
              <StyledButtonWrapper>
                <button className="edit-btn" onClick={() => handleEditOK(idx)}>
                  수정완료
                </button>{' '}
                |{' '}
                <button className="delete-btn" onClick={() => handleEditCancel()}>
                  수정취소
                </button>
              </StyledButtonWrapper>
            </>
          ) : (
            <>
              {todo}
              <StyledButtonWrapper>
                <button className="edit-btn" onClick={() => handleEdit(idx, todo)}>
                  수정
                </button>{' '}
                |{' '}
                <button className="delete-btn" onClick={() => handleDelete(idx)}>
                  삭제
                </button>
              </StyledButtonWrapper>
            </>
          )}
        </li>
      ))}
    </StyledScheduleTodoList>
  );
};

export default React.memo(ScheduleTodoList);
