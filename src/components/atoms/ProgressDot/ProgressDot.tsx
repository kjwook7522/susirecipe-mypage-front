import React from 'react';
import { StyledProgressDot } from './ProgressDot.styled';

interface Props {
  times: number;
}

const ProgressDot: React.FC<Props> = ({ times }) => {
  return (
    <StyledProgressDot>
      <span>{times}</span>
    </StyledProgressDot>
  );
};

export default React.memo(ProgressDot);
