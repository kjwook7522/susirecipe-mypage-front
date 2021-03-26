import React from 'react';
import { TodoList } from '@objects';
import { useSelector } from 'react-redux';
import { RootState } from 'common/store';
import { StyledNavTodoList } from './NavTodoList.styled';

interface Props {
  type: 'TODAY' | 'MONTH';
}

const NavTodoList: React.FC<Props> = ({ type }: Props) => {
  const myTodoList = useSelector((state: RootState) => state.todoListReducer);
  const todoList: TodoList = type === 'TODAY' ? myTodoList.today : myTodoList.month;
  return (
    <StyledNavTodoList>
      {todoList.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </StyledNavTodoList>
  );
};

export default NavTodoList;
