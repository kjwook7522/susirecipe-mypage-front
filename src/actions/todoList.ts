import { TodoList, Todo } from '@objects';
import { TodoListAction } from '@actions';

export const UPDATE_TODAY_TODO = 'UPDATE_TODAY_TODO';
export const UPDATE_MONTH_TODO = 'UPDATE_MONTH_TODO';
export const ADD_TODAY_TODO = 'ADD_TODAY_TODO';
export const ADD_MONTH_TODO = 'ADD_MONTH_TODO';

export const updateTodayTodo = (todoList: TodoList): TodoListAction => ({
  type: UPDATE_TODAY_TODO,
  todoList,
});

export const updateMonthTodo = (todoList: TodoList): TodoListAction => ({
  type: UPDATE_MONTH_TODO,
  todoList,
});

export const addTodayTodo = (todo: Todo): TodoListAction => ({
  type: ADD_TODAY_TODO,
  todo,
});

export const addMonthTodo = (todo: Todo): TodoListAction => ({
  type: ADD_MONTH_TODO,
  todo,
});
