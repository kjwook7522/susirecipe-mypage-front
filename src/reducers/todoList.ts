import { UPDATE_TODAY_TODO, UPDATE_MONTH_TODO, ADD_TODAY_TODO, ADD_MONTH_TODO } from 'actions/todoList';

const initState: MyTodoList = {
  today: [],
  month: [],
};

export const todoListReducer = (state = initState, action: TodoListAction): MyTodoList => {
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

    case ADD_TODAY_TODO:
      const addTodayState: MyTodoList = {
        today: [...state.today, action.todo],
        month: state.month,
      };
      return addTodayState;

    case ADD_MONTH_TODO:
      const addMonthState: MyTodoList = {
        today: state.today,
        month: [...state.month, action.todo],
      };
      return addMonthState;
    default:
      return state;
  }
};
