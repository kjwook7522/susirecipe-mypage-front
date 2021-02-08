import { HEADER_HEIGHT, QUICK_NAVIGATION_WIDTH } from 'common/constants/FixStyle';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  width: ${QUICK_NAVIGATION_WIDTH}px;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  padding: 0 1rem;
  position: fixed;
  top: ${HEADER_HEIGHT}px;
  right: 0;
  background-color: #f6f6f6;
  overflow: scroll;

  /* for hide scroll bar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledNavSection = styled.section`
  margin: 1.8rem 0;
  position: relative;

  h1 {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .detail-btn {
    position: absolute;
    top: -5px;
    right: 0;
  }
`;

export const StyledQuickButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
