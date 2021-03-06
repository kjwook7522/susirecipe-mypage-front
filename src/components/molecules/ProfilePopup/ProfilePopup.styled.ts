import styled from 'styled-components';

export const StyledProfilePopup = styled.div<{ top?: string; left?: string; right?: string; bottom?: string }>`
  width: 220px;
  padding: 2rem;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  svg {
    position: absolute;
    top: 15px;
    right: 15px;
    color: #404040;
    font-size: 1rem;
    cursor: pointer;
  }

  img {
    width: 60px;
    margin-bottom: 0.7rem;
    border-radius: 50%;
  }

  h1 {
    margin-bottom: 0.6rem;
    font-weight: 700;
    font-size: 1rem;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 0.9rem;
    color: #707070;
  }

  a {
    color: #606060;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
