import styled from 'styled-components';

export const StyledMainMenu = styled.div`
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

export const StyledSubMenu = styled.div`
  width: 100%;
  max-height: 0px;
  overflow: hidden;
  background-color: #303030;
  color: #fff;
  transition: max-height 0.5s, padding 0.5s;

  &.active {
    max-height: 150px;
    padding: 1rem 0;
    background-color: #444;
  }

  ul {
    a {
      color: #fff;
      text-decoration: none;

      li {
        padding: 0.45rem 2rem;

        &:hover {
          background-color: #666;
        }
      }

      li::before {
        content: '-';
        margin-right: 0.4rem;
      }
    }

    a.subactive {
      color: #303030;
      text-decoration: none;

      li {
        background-color: #fff;
      }
    }
  }
`;
