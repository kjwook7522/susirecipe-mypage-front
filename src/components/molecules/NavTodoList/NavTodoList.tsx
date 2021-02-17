import { useSelector } from 'react-redux';
import { RootState } from 'common/store';
import { StyledNavTodoList } from './NavTodoList.styled';

interface Props {
  type: 'TODAY' | 'MONTH';
}

const NavTodoList: React.FC<Props> = ({ type }) => {
  const myTodoList = useSelector((state: RootState) => state.todoListReducer);
  const todoList: TodoList = type === 'TODAY' ? myTodoList.today : myTodoList.month;
  return (
    <StyledNavTodoList>
      {todoList.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
    </StyledNavTodoList>
  );
};

export default NavTodoList;
