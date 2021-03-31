import styled from 'styled-components';

export const StyledCheckbox = styled.div<{ all?: boolean }>`
  margin-bottom: 0.5rem;

  label {
    input {
      cursor: pointer;
    }

    span {
      margin-left: 0.4rem;
      font-size: 0.875rem;
      color: ${props => (props.all ? '#4a9cd3' : '#333')};
    }

    span.required {
      color: #1770ec;
    }

    span.selected {
      color: #a6a6a6;
    }
  }
`;
