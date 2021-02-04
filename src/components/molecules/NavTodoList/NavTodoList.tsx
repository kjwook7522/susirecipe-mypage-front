import { StyledNavTodoList } from './NavTodoList.styled';

interface Props {
  todoList: Array<string>;
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
