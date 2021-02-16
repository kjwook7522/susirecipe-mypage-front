interface UpdateTodoListAction {
  type: 'UPDATE_TODAY_TODO' | 'UPDATE_MONTH_TODO';
  todoList: TodoList;
}

interface AddTodoListAction {
  type: 'ADD_TODAY_TODO' | 'ADD_MONTH_TODO';
  todo: Todo;
}

type TodoListAction = UpdateTodoListAction | AddTodoListAction;
