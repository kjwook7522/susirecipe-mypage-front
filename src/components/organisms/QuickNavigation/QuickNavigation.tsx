import Calendar from 'components/molecules/Calendar/Calendar';
import NavTodoList from 'components/molecules/NavTodoList/NavTodoList';
import { SmallButton } from 'components/atoms/Button/Button';
import SquareButton from 'components/atoms/SquareButton/SqureButton';
import { StyledNavigation, StyledNavSection, StyledQuickButtonWrapper } from './QuickNavigation.styled';
import { Link } from 'react-router-dom';

const QuickNavigation: React.FC = () => {
  return (
    <StyledNavigation>
      <StyledNavSection>
        <h1>입시 캘린더</h1>
        <Calendar />
        <Link to="/schedule">
          <SmallButton className="detail-btn" theme="sky">
            자세히 보기
          </SmallButton>
        </Link>
      </StyledNavSection>
      <StyledNavSection>
        <h1>오늘 할 일</h1>
        <NavTodoList type="TODAY" />
      </StyledNavSection>
      <StyledNavSection>
        <h1>이번 달 할 일</h1>
        <NavTodoList type="MONTH" />
      </StyledNavSection>
      <StyledNavSection>
        <h1>바로가기</h1>
        <StyledQuickButtonWrapper>
          <SquareButton size="45%" style={{ margin: '0.3rem' }}>
            이용 중인
            <br />
            프로그램
          </SquareButton>
          <SquareButton size="45%" style={{ margin: '0.3rem' }}>
            결제 관리
          </SquareButton>
          <SquareButton size="45%" style={{ margin: '0.3rem' }}>
            화상 수업
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
