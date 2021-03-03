import { StyledProgressPopup, StyledTriArrow } from './ProgressPopup.styled';

interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  clickRef?: React.RefObject<any>;
}

const ProgressPopup: React.FC<Props> = ({ clickRef, ...props }) => {
  return (
    <StyledProgressPopup ref={clickRef} {...props}>
      123
      <StyledTriArrow />
    </StyledProgressPopup>
  );
};

export default ProgressPopup;
