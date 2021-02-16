import { useSelector } from 'react-redux';
import { RootState } from 'common/store';
import Calendar from 'components/molecules/Calendar/Calendar';
import NavTodoList from 'components/molecules/NavTodoList/NavTodoList';
import { SmallButton } from 'components/atoms/Button/Button';
import SquareButton from 'components/atoms/SquareButton/SqureButton'
import { StyledNavigation, StyledNavSection, StyledQuickButtonWrapper } from './QuickNavigation.styled';

const QuickNavigation: React.FC = () => {
  const myTodoList = useSelector((state: RootState) => state.todoListReducer);
  return (
    <StyledNavigation>
      <StyledNavSection>
        <h1>입시 캘린더</h1>
        <Calendar />
        <SmallButton className="detail-btn" theme="kobalt">
          자세히 보기
        </SmallButton>
      </StyledNavSection>
      <StyledNavSection>
        <h1>오늘 할 일</h1>
        <NavTodoList todoList={myTodoList.today} />
      </StyledNavSection>
      <StyledNavSection>
        <h1>이번 달 할 일</h1>
        <NavTodoList todoList={myTodoList.month} />
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
