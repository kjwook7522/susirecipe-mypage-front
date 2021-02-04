import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavigation, StyledNavigationMenu, StyledNavigationSubMenu } from './MainNavigation.styled';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
        return;
    }
  };

  return (
    <StyledNavigation>
      <StyledNavigationMenu data-tab="tab1" className={activeTab === 1 ? 'active' : undefined} onClick={handleMenu}>
        <h3>김동빈</h3>
        {activeTab === 1 ? <FiChevronUp /> : <FiChevronDown />}
      </StyledNavigationMenu>
      <StyledNavigationSubMenu className={activeTab === 1 ? 'active' : undefined}>
        <ul>
          <li>
            <Link to="#">개인 정보 수정</Link>
          </li>
          <li>
            <Link to="#">일정 관리</Link>
          </li>
          <li>
            <Link to="#">결제 관리</Link>
          </li>
        </ul>
      </StyledNavigationSubMenu>

      <StyledNavigationMenu data-tab="tab2" className={activeTab === 2 ? 'active' : undefined} onClick={handleMenu}>
        <h3>컨설팅 코스</h3>
        {activeTab === 2 ? <FiChevronUp /> : <FiChevronDown />}
      </StyledNavigationMenu>
      <StyledNavigationSubMenu className={activeTab === 2 ? 'active' : undefined}>
        <ul>
          <li>
            <Link to="#">개인 정보 수정</Link>
          </li>
          <li>
            <Link to="#">일정 관리</Link>
          </li>
          <li>
            <Link to="#">결제 관리</Link>
          </li>
        </ul>
      </StyledNavigationSubMenu>

      <StyledNavigationMenu data-tab="tab3" className={activeTab === 3 ? 'active' : undefined} onClick={handleMenu}>
        <h3>이용 안내</h3>
        {activeTab === 3 ? <FiChevronUp /> : <FiChevronDown />}
      </StyledNavigationMenu>
      <StyledNavigationSubMenu className={activeTab === 3 ? 'active' : undefined}>
        <ul>
          <li>
            <Link to="#">개인 정보 수정</Link>
          </li>
          <li>
            <Link to="#">일정 관리</Link>
          </li>
          <li>
            <Link to="#">결제 관리</Link>
          </li>
        </ul>
      </StyledNavigationSubMenu>
    </StyledNavigation>
  );
};

export default Navigation;
