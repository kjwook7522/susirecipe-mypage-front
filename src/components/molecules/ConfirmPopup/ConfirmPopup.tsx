import FlexButton from 'components/atoms/FlexButton/FlexButton';
import { StyledConfirmPopup, StyledPopupContent, StyledButtonWrapper } from './ConfirmPopup.styled';

interface Props {
  cancleCallback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  confirmCallback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ConfirmPopup: React.FC<Props> = ({ children, cancleCallback, confirmCallback }) => {
  console.log('confirm popup');
  return (
    <StyledConfirmPopup>
      <StyledPopupContent>{children}</StyledPopupContent>
      <StyledButtonWrapper>
        <FlexButton
          width="50%"
          height="50px"
          className="cancle-btn"
          theme="lightred"
          disableSubmit
          onClick={cancleCallback}
        >
          취소
        </FlexButton>
        <FlexButton width="50%" height="50px" className="confirm-btn" theme="gray" onClick={confirmCallback}>
          확인
        </FlexButton>
      </StyledButtonWrapper>
    </StyledConfirmPopup>
  );
};

export default ConfirmPopup;
