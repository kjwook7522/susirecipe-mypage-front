import styled from 'styled-components';
import { PROGRESS_DOT_SIZE } from 'common/constants/FixStyle';

export const StyledProgressDot = styled.div`
  width: ${PROGRESS_DOT_SIZE}px;
  height: ${PROGRESS_DOT_SIZE}px;
  position: relative;
  display: inline-block;
  border: none;
  border-radius: 50%;
  background-color: #a5b8c4;
  cursor: pointer;

  span {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
