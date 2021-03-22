import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from 'Router';
import { updateMonthTodo, updateTodayTodo } from 'actions/todoList';
import { tempTodayTodo, tempMonthTodo} from 'common/constants/TempData'

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTodayTodo(tempTodayTodo));
    dispatch(updateMonthTodo(tempMonthTodo));
  }, [dispatch]);
  return <AppRouter />;
};

export default App;
