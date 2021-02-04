import { StyledNavigation, StyledCalendar, StyledTodo, StyledQuickButtonWrapper } from './QuickNavigation.styled';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const QuickNavigation: React.FC = () => {
  const tempTodayTodo = ['김윤환 컨설턴트와 컨설팅 예약'];
  const tempMonthTodo = [
    '8일 김윤환 컨설턴트와 컨설팅',
    '15일 자기소개서 제출하기',
    '22일 면접 준비하기',
    '29일 김윤환 컨설턴트와 컨설팅',
  ];
  return (
    <StyledNavigation>
      <StyledCalendar>
        <h1>입시 캘린더</h1>
        <Calendar calendarType="US" />
      </StyledCalendar>
      <StyledTodo>
        <h1>오늘 할 일</h1>
        <ul>
          {tempTodayTodo.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </StyledTodo>
      <StyledTodo>
        <h1>이번 달 할 일</h1>
        <ul>
          {tempMonthTodo.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </StyledTodo>
      <StyledQuickButtonWrapper>
        <h1>바로가기</h1>
        <div className="button-wrapper">
          <button>일정 관리</button>
          <button>결제 관리</button>
          <button>공지사항</button>
          <button>입시 뉴스</button>
          <button>FAQ</button>
          <button>FAQ</button>
        </div>
      </StyledQuickButtonWrapper>
    </StyledNavigation>
  );
};

export default QuickNavigation;
