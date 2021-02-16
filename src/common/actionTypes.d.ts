interface TodoListAction {
  type: 'UPDATE_TODAY_TODO' | 'UPDATE_MONTH_TODO';
  todoList: TodoList;
}
