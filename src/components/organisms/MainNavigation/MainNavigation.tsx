import { useState } from 'react';
import { StyledNavigation } from './MainNavigation.styled';
import NavDropdownMenu from 'components/molecules/NavDropdownMenu/NavDropdownMenu';

const Navigation: React.FC = () => {
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
      default:
        setActivceTab(null);
        return;
    }
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

  return (
    <StyledNavigation>
      <NavDropdownMenu active={activeTab === 'myinfo'} submenus={submenus} onClick={() => handleMenu('myinfo')}>
        김동빈
      </NavDropdownMenu>

      <NavDropdownMenu active={activeTab === 'consulting'} submenus={submenus} onClick={() => handleMenu('consulting')}>
        컨설팅 코스
      </NavDropdownMenu>

      <NavDropdownMenu active={activeTab === 'useinfo'} submenus={submenus} onClick={() => handleMenu('useinfo')}>
        이용 안내
      </NavDropdownMenu>
    </StyledNavigation>
  );
};

export default Navigation;
