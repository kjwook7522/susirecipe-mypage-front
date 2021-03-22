import React from 'react';
import { MyFile } from '@objects';
import FlexButton from 'components/atoms/FlexButton/FlexButton';
import { StyledListRow } from './MyFiles.styled';

interface Props {
  fileList: Array<MyFile>;
}

const MyFiles: React.FC<Props> = ({ fileList }: Props) => (
  <>
    {fileList.map(file => (
      <StyledListRow key={file.link}>
        <div className="content-cell">{file.title}</div>
        <div className="content-cell">
          <FlexButton width="100%" height="100%" theme="kobalt">
            다운로드
          </FlexButton>
        </div>
      </StyledListRow>
    ))}
  </>
);

export default MyFiles;
