import styled from 'styled-components';

export const StyledAlarmPopup = styled.div`
  width: 250px;
  position: absolute;
  top: 90px;
  right: 10px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

export const StyledTitle = styled.h1`
  padding: 0.8em 0;
  border-radius: 10px 10px 0 0;
  background-color: #404040;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
`;

export const StyledAlarmList = styled.ul<{ active?: boolean }>`
  max-height: ${props => (props.active ? '333px' : '111px')};
  overflow: ${props => (props.active ? 'scroll' : 'hidden')};
  transition: all 0.7s;

  li {
    height: 37px;
    padding: 0 1.4em;
    display: flex;
    align-items: center;

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.9rem;
    }
  }

  li:nth-child(odd) {
    background-color: #f6f6f6;
  }

  li:nth-child(even) {
    background-color: #fff;
  }
`;

export const StyledMoreWrapper = styled.div`
  padding: 0.4em 0;
  border-radius: 0 0 10px 10px;
  background-color: #404040;
  text-align: center;
  cursor: pointer;

  svg {
    padding: 0.4rem;
    font-size: 1rem;
    color: #fff;
  }
`;
