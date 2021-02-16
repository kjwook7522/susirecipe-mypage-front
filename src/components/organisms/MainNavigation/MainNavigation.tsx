import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavDropdownMenu from 'components/molecules/NavDropdownMenu/NavDropdownMenu';
import { StyledNavigation } from './MainNavigation.styled';

const Navigation: React.FC = () => {
  const history = useHistory();
  const [activeTab, setActivceTab] = useState<NavMenuTab>(null);

  const handleMenu = (tab: NavMenuTab) => {
    switch (tab) {
      case 'myinfo':
        setActivceTab('myinfo');
        if (activeTab === 'myinfo') {
          setActivceTab(null);
        }
        return;
      case 'consulting':
        setActivceTab('consulting');
        if (activeTab === 'consulting') {
          setActivceTab(null);
        }
        return;
      case 'useinfo':
        setActivceTab('useinfo');
        if (activeTab === 'useinfo') {
          setActivceTab(null);
        }
        return;
      case 'videoclass':
        setActivceTab('videoclass');
        if (activeTab === 'videoclass') {
          setActivceTab(null);
        }
        return;
      default:
        setActivceTab(null);
        return;
    }
  };

  const goDashboard = () => {
    setActivceTab('dashboard');
    history.push('/');
  };

  const submenus: NavSubMenuList = [
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
  ];

  const submenus2: NavSubMenuList = [
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
  ];

  return (
    <StyledNavigation>
      <NavDropdownMenu active={activeTab === 'dashboard'} onClick={() => goDashboard()}>
        대쉬보드
      </NavDropdownMenu>

      <NavDropdownMenu active={activeTab === 'myinfo'} submenus={submenus} onClick={() => handleMenu('myinfo')}>
        김동빈
      </NavDropdownMenu>

      <NavDropdownMenu active={activeTab === 'consulting'} onClick={() => handleMenu('consulting')}>
        컨설팅 코스
      </NavDropdownMenu>

      <NavDropdownMenu active={activeTab === 'useinfo'} submenus={submenus2} onClick={() => handleMenu('useinfo')}>
        이용 안내
      </NavDropdownMenu>

      <NavDropdownMenu active={activeTab === 'videoclass'} onClick={() => handleMenu('videoclass')}>
        화상수업
      </NavDropdownMenu>
    </StyledNavigation>
  );
};

export default Navigation;
