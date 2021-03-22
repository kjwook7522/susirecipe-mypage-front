import { StyledProgressPopup, StyledTriArrow } from './ProgressPopup.styled';

interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  clickRef?: React.RefObject<any>;
  fileList?: Array<ConsultingFile>;
}

const ProgressPopup: React.FC<Props> = ({ clickRef, fileList, ...props }) => {
  return (
    <StyledProgressPopup ref={clickRef} {...props}>
      {fileList?.map(file => (
        <p key={file.id}>{file.name}</p>
      ))}
      <StyledTriArrow />
    </StyledProgressPopup>
  );
};

export default ProgressPopup;
