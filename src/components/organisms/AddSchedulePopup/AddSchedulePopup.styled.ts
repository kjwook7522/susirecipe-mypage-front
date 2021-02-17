import styled from 'styled-components';

export const StyledAddSchedulePopup = styled.div<{top?: string;left?: string;right?: string;bottom?: string;active?: boolean;}>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  display: ${props => props.active ? 'block' : 'none'};

  h1 {
    margin-bottom: 0.4rem;
    color: #333;
    font-size: 1rem;
  }

  .input-box {
    margin-bottom: 1rem;
  }
`; 