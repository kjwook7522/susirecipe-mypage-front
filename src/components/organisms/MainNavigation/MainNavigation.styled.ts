import { HEADER_HEIGHT, MAIN_NAVIGATION_WIDTH } from 'common/constant';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  width: ${MAIN_NAVIGATION_WIDTH}px;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  position: fixed;
  top: ${HEADER_HEIGHT}px;
  left: 0;
  background-color: #f6f6f6;
`;

export const StyledNavigationMenu = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #303030;
  color: #fff;
  cursor: pointer;

  &.active {
    background-color: #444;
  }
`;

export const StyledNavigationSubMenu = styled.div`
  width: 100%;
  max-height: 0px;
  padding: 0 2rem;
  overflow: hidden;
  background-color: #303030;
  color: #fff;
  transition: max-height 0.5s, padding 0.5s;

  &.active {
    max-height: 150px;
    padding: 1rem 2rem;
    background-color: #444;
  }

  @media (max-width: 1025px) {
  }

  ul {
    li {
      margin: 0.3rem 0;
      padding: 0.3rem 0;

      a {
        color: #fff;
        text-decoration: none;
      }
    }

    li::before {
      content: '-';
      margin-right: 0.4rem;
    }
  }
`;
