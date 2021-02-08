import { HEADER_HEIGHT, MAIN_NAVIGATION_WIDTH, QUICK_NAVIGATION_WIDTH } from 'common/constants/FixStyle';
import styled from 'styled-components';

export const StyledContent = styled.div`
  margin-top: ${HEADER_HEIGHT}px;
  margin-left: ${MAIN_NAVIGATION_WIDTH}px;
  margin-right: ${QUICK_NAVIGATION_WIDTH}px;
`;