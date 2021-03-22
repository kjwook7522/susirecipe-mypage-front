import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NavMenuTab, NavSubMenuList } from '@objects';
import { useHistory, useLocation } from 'react-router-dom';
import NavDropdownMenu from 'components/molecules/NavDropdownMenu/NavDropdownMenu';
import { StyledNavigation } from './MainNavigation.styled';

const MainNavigation: React.FC = () => {
  const { pathname } = useLocation();
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
      }
      return 'myinfo';
    });
  }, []);

  const goConsulting = useCallback(() => {
    setActivceTab('consulting');
    history.push('/consulting');
  }, [history]);

  const goUseinfo = useCallback(() => {
    setActivceTab(prev => {
      if (prev === 'useinfo') {
        return null;
      }
      return 'useinfo';
    });
  }, []);

  const goVideoclass = useCallback(() => {
    setActivceTab('videoclass');
    history.push('/videoclass');
  }, [history]);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setActivceTab('dashboard');
        break;
      case '/editprofile':
        setActivceTab('myinfo');
        break;
      case '/schedule':
        setActivceTab('myinfo');
        break;
      case '/paymanage':
        setActivceTab('myinfo');
        break;
      case '/consulting':
        setActivceTab('consulting');
        break;
      case '/notice':
        setActivceTab('useinfo');
        break;
      case '/news':
        setActivceTab('useinfo');
        break;
      case '/faq':
        setActivceTab('useinfo');
        break;
      default:
        break;
    }
  }, [pathname]);

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
