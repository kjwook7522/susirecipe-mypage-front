import FlexButton from 'components/atoms/FlexButton/FlexButton';
import { StyledConfirmPopup, StyledButtonWrapper } from './ConfirmPopup.styled';

interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  active?: boolean;
  clickRef?: React.RefObject<any>;
  cancleCallback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  confirmCallback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ConfirmPopup: React.FC<Props> = ({ children, clickRef, cancleCallback, confirmCallback, ...props }) => {
  return (
    <StyledConfirmPopup ref={clickRef} {...props}>
      {children}
      <StyledButtonWrapper>
        <FlexButton width="50%" height="50px" className="cancle-btn" theme="lightred" onClick={cancleCallback}>
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
