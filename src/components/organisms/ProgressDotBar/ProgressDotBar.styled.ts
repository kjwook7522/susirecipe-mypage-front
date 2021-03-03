import styled from 'styled-components';

export const StyledProgressDotBar = styled.div<{ width: string }>`
  width: ${props => props.width};
  margin-bottom: 5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBarLine = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid #ccc;
`;
