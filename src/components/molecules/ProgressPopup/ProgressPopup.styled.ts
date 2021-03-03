import { PROGRESS_POPUP_WIDTH } from 'common/constants/FixStyle';
import styled from 'styled-components';

export const StyledProgressPopup = styled.div<{ top?: string; left?: string; right?: string; bottom?: string }>`
  width: ${PROGRESS_POPUP_WIDTH}px;
  padding: 1em;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  z-index: 10;
`;

export const StyledTriArrow = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  border-top: 15px solid none;
  border-bottom: 15px solid #666;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
`;
