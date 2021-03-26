import styled from 'styled-components';

export const StyledAuthTypeToggle = styled.div`
  display: flex;

  a {
    flex: 1;
    color: #000;
  }
`;

export const StyledTypeBox = styled.div<{ active?: boolean }>`
  border-bottom: 8px solid ${props => (props.active ? '#4a9cd3' : '#ccced2')};
  line-height: 1.5;
  font-size: 1rem;
  cursor: pointer;
`;
