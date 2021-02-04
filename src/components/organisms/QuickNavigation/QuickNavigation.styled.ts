import { HEADER_HEIGHT, QUICK_NAVIGATION_WIDTH } from 'common/constant';
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

export const StyledCalendar = styled.div`
  margin: 1.5rem 0;

  h1 {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .react-calendar {
    border: none;
    background-color: transparent;

    button {
      border-radius: 10px;
    }
  }

  .react-calendar__tile--now {
    background-color: #006edc;
    color: #fff;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background-color: #1087ff;
  }

  .react-calendar__tile--active {
    background-color: #777;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #aaa;
  }
`;

export const StyledTodo = styled.div`
  margin: 1.8rem 0;

  h1 {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  ul {
    li {
      margin: 0.5rem 0;
      font-size: 0.8rem;
    }

    li::before {
      content: '-';
      margin-right: 0.4rem;
    }
  }
`;

export const StyledQuickButtonWrapper = styled.div`
  margin: 1rem 0;

  h1 {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .button-wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  button {
    width: 40%;
    margin: 0.3rem 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    background-color: #000;
    font-size: 0.9rem;
    color: #fff;
    cursor: pointer;
    z-index: 1;
    transition: all 0.5s;

    /* for ratio 1:1 box */
    &::after {
      content: '';
      padding-bottom: 100%;
      display: block;
    }

    /* for slide animation */
    &::before {
      content: '';
      width: 0;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: 9px;
      background-color: #fff;
      z-index: -1;
      transition: all 0.5s;
    }

    &:hover {
      color: #333;

      &::before {
        width: 100%;
      }
    }
  }
`;
