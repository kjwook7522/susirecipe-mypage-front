import styled from 'styled-components';
import { HEADER_HEIGHT } from 'common/constant';

export const StyledHaeder = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 0 2rem;
  background-color: #000;
  position: fixed;
  top: 0;
  display: flex;
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
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-left: 1rem;
    border-radius: 50%;
  }

  .username {
    color: #fff;
  }
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
    color: #333;
    cursor: pointer;
  }
`;
