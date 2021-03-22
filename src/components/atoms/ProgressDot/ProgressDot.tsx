import React from 'react';
import { StyledProgressDot } from './ProgressDot.styled';

interface Props {
  times: number;
  clickRef?: React.RefObject<any>;
  handlePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProgressDot: React.FC<Props> = ({ times, clickRef, handlePopup }) => {
  return (
    <StyledProgressDot onClick={() => handlePopup(prev => !prev)} ref={clickRef}>
      <span>{times}</span>
    </StyledProgressDot>
  );
};

export default React.memo(ProgressDot);
