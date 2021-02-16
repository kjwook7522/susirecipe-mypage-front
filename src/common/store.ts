import { createStore, combineReducers } from 'redux';
import { todoListReducer } from 'reducers/todoList';

const rootReducer = combineReducers({
  todoListReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>
