export const UPDATE_TODAY_TODO = 'UPDATE_TODAY_TODO';
export const UPDATE_MONTH_TODO = 'UPDATE_MONTH_TODO';

export const updateTodayTodo = (todoList: TodoList): TodoListAction => ({
  type: UPDATE_TODAY_TODO,
  todoList,
});

export const updateMonthTodo = (todoList: TodoList): TodoListAction => ({
  type: UPDATE_MONTH_TODO,
  todoList,
});
