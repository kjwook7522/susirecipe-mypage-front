import styled from 'styled-components';

export const StyledConfirmPopup = styled.div<{top?: string;left?: string;right?: string;bottom?: string;active?: boolean;}>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  display: ${props => (props.active ? 'inline-flex' : 'none')};
  flex-direction: column;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
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
