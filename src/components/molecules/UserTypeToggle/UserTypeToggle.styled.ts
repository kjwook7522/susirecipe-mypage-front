import styled from 'styled-components';

export const StyledUserTypeToggle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTypeButton = styled.button<{ active?: boolean }>`
  padding: 0.6em 1.3em;
  border: 1px solid ${props => (props.active ? '#414141' : '#949494')};
  border-radius: 12px;
  background-color: ${props => (props.active ? '#414141' : '#fff')};
  font-size: 0.875rem;
  color: ${props => (props.active ? '#fff' : '#949494')};
  cursor: pointer;
`;
