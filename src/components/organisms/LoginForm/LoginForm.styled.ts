import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  h1 {
    margin-bottom: 0.8rem;
    font-size: 1rem;
  }
`;

export const StyledMarginBox = styled.div<{ margin: number }>`
  margin-bottom: ${props => `${props.margin}rem`};
`;

export const StyledCheckMessage = styled.p<{ visible?: boolean; status?: boolean }>`
  margin: 0.6rem 0;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  font-size: 0.875rem;
  color: ${props => (props.status ? '#31b404' : '#ef0000')};
`;

export const StyledLoginButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: auto;
  }
`;
