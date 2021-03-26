import React, { useRef } from 'react';
import { ConsultingFileList } from '@objects';
import ProgressPopupModule from 'components/molecules/ProgressPopupModule/ProgressPopupModule';
import { MAX_DOT_COUNT, PROGRESS_DOT_SIZE } from 'common/constants/FixStyle';
import { StyledProgressDotBar, StyledBarLine } from './ProgressDotBar.styled';

interface Props {
  consultingFileList: ConsultingFileList;
}

const ProgressDotBar: React.FC<Props> = ({ consultingFileList }: Props) => {
  const barRef = useRef<HTMLDivElement>(null);

  const getBarWidth = (barCount: number): string => {
    if (barCount === 1) {
      return `${PROGRESS_DOT_SIZE}px`;
    }

    return `calc((100% - ${PROGRESS_DOT_SIZE}px) * (${
      (barCount - 1) / (MAX_DOT_COUNT - 1)
    }) + ${PROGRESS_DOT_SIZE}px )`;
  };

  const getProgressDotBarArray = (): Array<ConsultingFileList> => {
    const lineNum = Math.floor(consultingFileList.length / MAX_DOT_COUNT) + 1;
    const progressDotBarArray = [];

    for (let line = 0; line < lineNum; line++) {
      progressDotBarArray.push(consultingFileList.slice(line * MAX_DOT_COUNT, (line + 1) * MAX_DOT_COUNT));
    }
    return progressDotBarArray;
  };

  return (
    <>
      {getProgressDotBarArray().map(progressDotBar => {
        const barWidth = getBarWidth(progressDotBar.length);
        return (
          <StyledProgressDotBar width={barWidth} ref={barRef} key={progressDotBar[0].times}>
            <StyledBarLine />
            {progressDotBar.map(consultingDayFiles => (
              <ProgressPopupModule key={consultingDayFiles.times} consultingFiles={consultingDayFiles} />
            ))}
          </StyledProgressDotBar>
        );
      })}
    </>
  );
};

export default ProgressDotBar;
