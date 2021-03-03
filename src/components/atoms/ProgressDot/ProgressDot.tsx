import React from 'react';
import { StyledProgressDot } from './ProgressDot.styled';

interface Props {
  idx: number;
  times: number;
  handlePopup: React.Dispatch<React.SetStateAction<number>>;
}

const ProgressDot: React.FC<Props> = ({ idx, times, handlePopup }) => {
  return (
    <StyledProgressDot onClick={() => handlePopup(idx)}>
      <span>{times}</span>
    </StyledProgressDot>
  );
};

export default React.memo(ProgressDot);
