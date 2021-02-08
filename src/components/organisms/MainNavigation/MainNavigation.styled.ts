import { HEADER_HEIGHT, MAIN_NAVIGATION_WIDTH } from 'common/constants/FixStyle';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  width: ${MAIN_NAVIGATION_WIDTH}px;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  position: fixed;
  top: ${HEADER_HEIGHT}px;
  left: 0;
  background-color: #f6f6f6;
`;
