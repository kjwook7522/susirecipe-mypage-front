import { StyledNavTodoList } from './NavTodoList.styled';

interface Props {
  todoList: TodoList;
}

const NavTodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <StyledNavTodoList>
      {todoList.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
    </StyledNavTodoList>
  );
};

export default NavTodoList;
