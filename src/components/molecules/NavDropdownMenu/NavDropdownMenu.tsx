import React from 'react';
import { NavSubMenuList } from '@objects';
import { NavLink } from 'react-router-dom';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { StyledMainMenu, StyledSubMenu } from './NavDropdownMenu.styled';

interface Props {
  active?: boolean;
  submenus?: NavSubMenuList;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: string;
}

const NavDropdownMenu: React.FC<Props> = ({ children, active, submenus, onClick }: Props) => (
  <>
    <StyledMainMenu className={active ? 'active' : undefined} onClick={onClick}>
      <h3>{children}</h3>
      {submenus && (active ? <FiChevronUp /> : <FiChevronDown />)}
    </StyledMainMenu>
    <StyledSubMenu className={active && submenus ? 'active' : undefined}>
      <ul>
        {submenus?.map(submenu => (
          <NavLink key={submenu.name} to={submenu.link} activeClassName="subactive">
            <li>{submenu.name}</li>
          </NavLink>
        ))}
      </ul>
    </StyledSubMenu>
  </>
);

export default React.memo(NavDropdownMenu);
