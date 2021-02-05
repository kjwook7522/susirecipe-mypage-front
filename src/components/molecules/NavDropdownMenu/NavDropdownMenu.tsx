import { NavLink } from 'react-router-dom';
import { StyledMainMenu, StyledSubMenu } from './NavDropdownMenu.styled';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

interface Props {
  tabId?: string;
  active?: boolean;
  submenus?: Array<NavSubMenu>;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const NavDropdownMenu: React.FC<Props> = ({ children, tabId, active, submenus, onClick }) => {
  return (
    <>
      <StyledMainMenu data-tab={tabId} className={active ? 'active' : undefined} onClick={onClick}>
        <h3>{children}</h3>
        {active ? <FiChevronUp /> : <FiChevronDown />}
      </StyledMainMenu>
      <StyledSubMenu className={active ? 'active' : undefined}>
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
export default NavDropdownMenu;
