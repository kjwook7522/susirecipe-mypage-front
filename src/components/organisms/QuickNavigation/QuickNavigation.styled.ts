import { HEADER_HEIGHT, QUICK_NAVIGATION_WIDTH } from 'common/constant';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  width: ${QUICK_NAVIGATION_WIDTH}px;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  position: fixed;
  top: ${HEADER_HEIGHT}px;
  right: 0;
  background-color: #f6f6f6;
`;
