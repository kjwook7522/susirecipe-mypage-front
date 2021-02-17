import styled from 'styled-components';

export const StyledConfirmPopup = styled.div`
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;

export const StyledPopupContent = styled.div`
  padding: 1.4em 2em;
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
