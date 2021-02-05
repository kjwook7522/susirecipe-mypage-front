import { useState } from 'react';
import { StyledNavigation } from './MainNavigation.styled';
import NavDropdownMenu from 'components/molecules/NavDropdownMenu/NavDropdownMenu';

const Navigation: React.FC = () => {
  // ** ActiveTab ** //
  // 0. Null         //
  // 1. 내정보         //
  // 2. 컨설팅         //
  // 3. 이용 안내      //
  const [activeTab, setActivceTab] = useState(0);

  const handleMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { tab } = event.currentTarget.dataset;
    switch (tab) {
      case 'tab1':
        setActivceTab(1);
        if (activeTab === 1) {
          setActivceTab(0);
        }
        return;
      case 'tab2':
        setActivceTab(2);
        if (activeTab === 2) {
          setActivceTab(0);
        }
        return;
      case 'tab3':
        setActivceTab(3);
        if (activeTab === 3) {
          setActivceTab(0);
        }
        return;
      default:
        setActivceTab(0);
        return;
    }
  };

  const submenus: Array<NavSubMenu> = [
    {
      name: '개인 정보 수정',
      link: '/editprofile',
    },
    {
      name: '일정 관리',
      link: '/scedule',
    },
    {
      name: '결제 관리',
      link: '/paymanage',
    },
  ];

  return (
    <StyledNavigation>
      <NavDropdownMenu tabId="tab1" active={activeTab === 1} submenus={submenus} onClick={handleMenu}>
        김동빈
      </NavDropdownMenu>

      <NavDropdownMenu tabId="tab2" active={activeTab === 2} submenus={submenus} onClick={handleMenu}>
        컨설팅 코스
      </NavDropdownMenu>

      <NavDropdownMenu tabId="tab3" active={activeTab === 3} submenus={submenus} onClick={handleMenu}>
        이용 안내
      </NavDropdownMenu>
    </StyledNavigation>
  );
};

export default Navigation;
