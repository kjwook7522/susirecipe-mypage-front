import styled from 'styled-components';
import { HEADER_HEIGHT } from 'common/constants/FixStyle';
import { StyledIconButton } from 'components/atoms/IconButton/IconButton.styled';

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
  position: relative;
  display: flex;
  align-items: center;

  .profile-img {
    width: 30px;
    height: 30px;
    margin-left: 0.6rem;
    border-radius: 50%;
  }
`;

export const StyledComment = styled.span`
  color: #fff;
  font-size: 0.85rem;
`;

export const StyledIconBox = styled.div`
  display: flex;
  margin-left: 2.5rem;

  ${StyledIconButton} {
    margin-left: 1rem;
  }
`;
