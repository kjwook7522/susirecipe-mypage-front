import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from 'Router';
import { updateMonthTodo, updateTodayTodo } from 'actions/todoList';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const tempTodayTodo = ['김윤환 컨설턴트와 컨설팅 예약'];
  const tempMonthTodo = [
    '8일 김윤환 컨설턴트와 컨설팅',
    '15일 자기소개서 제출하기',
    '22일 면접 준비하기',
    '29일 김윤환 컨설턴트와 컨설팅',
  ];

  useEffect(() => {
    dispatch(updateTodayTodo(tempTodayTodo));
    dispatch(updateMonthTodo(tempMonthTodo));
  }, []);
  return <AppRouter />;
};

export default App;
