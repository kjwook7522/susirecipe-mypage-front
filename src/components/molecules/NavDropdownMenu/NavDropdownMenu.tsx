import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledMainMenu, StyledSubMenu } from './NavDropdownMenu.styled';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

interface Props {
  active?: boolean;
  submenus?: NavSubMenuList;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: string;
}

const NavDropdownMenu: React.FC<Props> = ({ children, active, submenus, onClick }) => {
  return (
    <>
      <StyledMainMenu className={active ? 'active' : undefined} onClick={onClick}>
        <h3>{children}</h3>
        {submenus ? active ? <FiChevronUp /> : <FiChevronDown /> : undefined}
      </StyledMainMenu>
      <StyledSubMenu className={active && submenus ? 'active' : undefined}>
        <ul>
          {submenus?.map((submenu, idx) => (
            <NavLink key={idx} to={submenu.link} activeClassName="subactive">
              <li>{submenu.name}</li>
            </NavLink>
          ))}
        </ul>
      </StyledSubMenu>
    </>
  );
};

export default React.memo(NavDropdownMenu);
