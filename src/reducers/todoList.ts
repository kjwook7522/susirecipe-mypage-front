import { UPDATE_TODAY_TODO, UPDATE_MONTH_TODO } from 'actions/todoList';

const initState: MyTodoList = {
  today: [],
  month: [],
};

export const todoListReducer = (state = initState, action: TodoListAction) => {
  switch (action.type) {
    case UPDATE_TODAY_TODO:
      const updateTodayState: MyTodoList = {
        today: action.todoList,
        month: state.month,
      };
      return updateTodayState;

    case UPDATE_MONTH_TODO:
      const updateMonthState: MyTodoList = {
        today: state.today,
        month: action.todoList,
      };
      return updateMonthState;

    default:
      return state;
  }
};
