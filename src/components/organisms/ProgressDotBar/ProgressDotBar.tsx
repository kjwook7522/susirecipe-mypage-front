import React, { useRef } from 'react';
import ProgressPopupModule from 'components/molecules/ProgressPopupModule/ProgressPopupModule';
import { StyledProgressDotBar, StyledBarLine } from './ProgressDotBar.styled';
import { MAX_DOT_COUNT, PROGRESS_DOT_SIZE } from 'common/constants/FixStyle';

interface Props {
  consultingFileList: ConsultingFileList;
}

const ProgressDotBar: React.FC<Props> = ({ consultingFileList }) => {
  const barRef = useRef<HTMLDivElement>(null);

  const getBarWidth = (barCount: number): string => {
    if (barCount === 1) {
      return `${PROGRESS_DOT_SIZE}px`;
    } else {
      return `calc((100% - ${PROGRESS_DOT_SIZE}px) * (${
        (barCount - 1) / (MAX_DOT_COUNT - 1)
      }) + ${PROGRESS_DOT_SIZE}px )`;
    }
  }

  const getProgressDotBarArray = (): Array<ConsultingFileList> => {
    const lineNum = Math.floor(consultingFileList.length / MAX_DOT_COUNT) + 1;
    let progressDotBarArray = [];

    for (let line = 0; line < lineNum; line++) {
      progressDotBarArray.push(consultingFileList.slice(line * MAX_DOT_COUNT, (line + 1) * MAX_DOT_COUNT));
    }
    return progressDotBarArray;
  };

  return (
    <>
      {getProgressDotBarArray().map((progressDotBar, idx) => {
        console.log(progressDotBar)
        const barWidth = getBarWidth(progressDotBar.length);
        return (
          <StyledProgressDotBar width={barWidth} ref={barRef} key={idx}>
            <StyledBarLine />
            {progressDotBar.map((consultingDayFiles, idx) => (
              <ProgressPopupModule key={idx} consultingFiles={consultingDayFiles} />
            ))}
          </StyledProgressDotBar>
        );
      })}
    </>
  );
};

export default ProgressDotBar;
