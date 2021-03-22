import React, { useState } from 'react';
import { TodoList } from '@objects';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/store';
import { updateMonthTodo, updateTodayTodo } from 'actions/todoList';
import Input from 'components/atoms/Input/Input';
import { StyledScheduleTodoList, StyledButtonWrapper } from './ScheduleTodoList.styled';

interface Props {
  type: 'TODAY' | 'MONTH';
}

const ScheduleTodoList: React.FC<Props> = ({ type }: Props) => {
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
    } else if (window.confirm('작성중인 일정이 지워질 수 있습니다\n계속하시겠습니까?')) {
      setIsEdit(true);
      setEditLine(idx);
      setEditText(todo);
    }
  };

  const handleDelete = (idx: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) {
      return;
    }

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
    if (!editText) {
      return;
    }

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledScheduleTodoList>
      {todoList.map((todo, idx) => (
        <li key={idx}>
          {editLine === idx ? (
            <form onSubmit={handleSubmit}>
              <Input width="200px" value={editText} required onChange={handleEditText} />
              <StyledButtonWrapper>
                <button type="submit" className="edit-btn" onClick={() => handleEditOK(idx)}>
                  수정완료
                </button>{' '}
                |{' '}
                <button className="delete-btn" type="button" onClick={() => handleEditCancel()}>
                  수정취소
                </button>
              </StyledButtonWrapper>
            </form>
          ) : (
            <>
              {todo}
              <StyledButtonWrapper>
                <button type="button" className="edit-btn" onClick={() => handleEdit(idx, todo)}>
                  수정
                </button>{' '}
                |{' '}
                <button type="button" className="delete-btn" onClick={() => handleDelete(idx)}>
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
