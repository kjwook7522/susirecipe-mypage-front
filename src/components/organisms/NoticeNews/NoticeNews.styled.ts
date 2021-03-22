import styled from 'styled-components';

export const StyledNoticeNews = styled.div`
  width: 100%;
`;

export const StyledToggleTitle = styled.div`
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 1.25rem;
  color: #909090;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .active {
    color: #000;
  }
`;

export const StyledContents = styled.ul<{ active?: boolean }>`
  width: 100%;
  padding: 2rem;
  display: ${props => (props.active ? 'block' : 'none')};
  border: none;
  border-radius: 10px;
  background-color: #f6f6f6;

  li {
    padding: 0.6rem 0;
    font-size: 0.9rem;
  }
`;
