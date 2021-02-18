import { createStore, combineReducers } from 'redux';
import { todoListReducer } from 'reducers/todoList';
import { ddayReducer } from 'reducers/ddayList';
import { takeConsultingReducer } from 'reducers/takeConsultingList';
import { myFileReducer } from 'reducers/myFileList';
import { noticenewsReducer } from 'reducers/noticenewsList';

const rootReducer = combineReducers({
  todoListReducer,
  ddayReducer,
  takeConsultingReducer,
  myFileReducer,
  noticenewsReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
