import styled from 'styled-components';
import { HEADER_HEIGHT } from 'common/constants/FixStyle';

export const StyledHaeder = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 0 2rem;
  background-image: linear-gradient(to bottom, #0e1f2b, #1d394b);
  position: fixed;
  top: 0;
  display: flex;
  z-index: 100;
`;

export const StyledLeftHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 100px;
    margin-right: 1.5rem;
  }

  p {
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
  }
`;

export const StyledRightHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledUserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledUser = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-left: 0.6rem;
    border-radius: 50%;
  }

  .username {
    color: #fff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledComment = styled.span`
  color: #fff;
  font-size: 0.85rem;
`;

export const StyledIconBox = styled.div`
  display: flex;
  margin-left: 2.5rem;

  .icon {
    margin-left: 0.8rem;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #fff;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .alarm {
    color: #404040;
    transition: all 0.4s ease-out;

    &:hover {
      background-color: #404040;
      color: #fff;
    }
  }

  .power {
    color: #fa001d;
    transition: all 0.4s ease-out;

    &:hover {
      background-color: #fa001d;
      color: #fff;
    }
  }
`;
