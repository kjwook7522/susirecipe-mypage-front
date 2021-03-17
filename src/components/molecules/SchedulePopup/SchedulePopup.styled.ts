import styled from 'styled-components';

export const StyledSchedulePopup = styled.form<{ top?: string; left?: string; right?: string; bottom?: string; }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

  h1 {
    margin-bottom: 0.4rem;
    color: #333;
    font-size: 1rem;
  }
`;

export const StyledContentWrapper = styled.div`
  padding: 1.4em 2em;
`;


export const StyledInputBox = styled.div`
  margin-bottom: 1rem;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;

  button {
    margin: 0;
    flex: 1;
    border: none;
  }
  
  .cancle-btn {
    border-radius: 0 0 0 10px;
  }

  .confirm-btn {
    border-radius: 0 0 10px 0;
  }
`;