import Calendar from 'components/molecules/Calendar/Calendar';
import NavTodoList from 'components/molecules/NavTodoList/NavTodoList';
import { SmallButton, SquareButton } from 'components/atoms/Button/Button';
import { StyledNavigation, StyledNavSection, StyledQuickButtonWrapper } from './QuickNavigation.styled';

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
      <StyledNavSection>
        <h1>입시 캘린더</h1>
        <Calendar />
        <SmallButton className="detail-btn" theme="blue">
          자세히 보기
        </SmallButton>
      </StyledNavSection>
      <StyledNavSection>
        <h1>오늘 할 일</h1>
        <NavTodoList todoList={tempTodayTodo} />
      </StyledNavSection>
      <StyledNavSection>
        <h1>이번 달 할 일</h1>
        <NavTodoList todoList={tempMonthTodo} />
      </StyledNavSection>
      <StyledNavSection>
        <h1>바로가기</h1>
        <StyledQuickButtonWrapper>
          <SquareButton size="45%" style={{ margin: '0.3rem' }}>
            일정 관리
          </SquareButton>
          <SquareButton size="45%" style={{ margin: '0.3rem' }}>
            결제 관리
          </SquareButton>
          <SquareButton size="45%" style={{ margin: '0.3rem' }}>
            공지사항
          </SquareButton>
          <SquareButton size="45%" style={{ margin: '0.3rem' }}>
            입시 뉴스
          </SquareButton>
          <SquareButton size="45%" style={{ margin: '0.3rem' }}>
            FAQ
          </SquareButton>
          <SquareButton size="45%" style={{ margin: '0.3rem' }}>
            FAQ
          </SquareButton>
        </StyledQuickButtonWrapper>
      </StyledNavSection>
    </StyledNavigation>
  );
};

export default QuickNavigation;
