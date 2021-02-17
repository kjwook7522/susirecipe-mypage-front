import { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavDropdownMenu from 'components/molecules/NavDropdownMenu/NavDropdownMenu';
import { StyledNavigation } from './MainNavigation.styled';

const MainNavigation: React.FC = () => {
  const history = useHistory();
  const [activeTab, setActivceTab] = useState<NavMenuTab>(null);

  const goDashboard = useCallback(() => {
    setActivceTab('dashboard');
    history.push('/');
  }, [history]);

  const goMyinfo = useCallback(() => {
    setActivceTab(prev => {
      if (prev === 'myinfo') {
        return null;
      } else {
        return 'myinfo';
      }
    });
  }, []);

  const goConsulting = useCallback(() => {
    setActivceTab(prev => {
      if (prev === 'consulting') {
        return null;
      } else {
        return 'consulting';
      }
    });
  }, []);

  const goUseinfo = useCallback(() => {
    setActivceTab(prev => {
      if (prev === 'useinfo') {
        return null;
      } else {
        return 'useinfo';
      }
    });
  }, []);

  const goVideoclass = useCallback(() => {
    setActivceTab(prev => {
      if (prev === 'videoclass') {
        return null;
      } else {
        return 'videoclass';
      }
    });
  }, []);

  const submenus: NavSubMenuList = useMemo(
    () => [
      {
        name: '개인 정보 수정',
        link: '/editprofile',
      },
      {
        name: '일정 관리',
        link: '/schedule',
      },
      {
        name: '결제 관리',
        link: '/paymanage',
      },
    ],
    []
  );

  const submenus2: NavSubMenuList = useMemo(
    () => [
      {
        name: '공지사항',
        link: '/notice',
      },
      {
        name: '입시뉴스',
        link: '/news',
      },
      {
        name: 'FAQ',
        link: '/faq',
      },
    ],
    []
  );

  return (
    <StyledNavigation>
      <NavDropdownMenu active={activeTab === 'dashboard'} onClick={goDashboard}>
        대쉬보드
      </NavDropdownMenu>

      <NavDropdownMenu active={activeTab === 'myinfo'} submenus={submenus} onClick={goMyinfo}>
        김동빈
      </NavDropdownMenu>

      <NavDropdownMenu active={activeTab === 'consulting'} onClick={goConsulting}>
        컨설팅 코스
      </NavDropdownMenu>

      <NavDropdownMenu active={activeTab === 'useinfo'} submenus={submenus2} onClick={goUseinfo}>
        이용 안내
      </NavDropdownMenu>

      <NavDropdownMenu active={activeTab === 'videoclass'} onClick={goVideoclass}>
        화상수업
      </NavDropdownMenu>
    </StyledNavigation>
  );
};

export default MainNavigation;
