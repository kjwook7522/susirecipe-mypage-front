import { FlexButton } from 'components/atoms/Button/Button';
import { StyledListRow } from './MyFiles.styled';

interface Props {
  fileList: Array<MyFile>;
}

const MyFiles: React.FC<Props> = ({ fileList }) => {
  return (
    <>
      {fileList.map(file => (
        <StyledListRow>
          <div className="content-cell">{file.title}</div>
          <div className="content-cell">
            <FlexButton width="100%" height="100%" theme="blue">
              다운로드
            </FlexButton>
          </div>
        </StyledListRow>
      ))}
    </>
  );
};
export default MyFiles;
