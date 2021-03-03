import React, { createRef, useCallback, useMemo, useRef, useState } from 'react';
import ProgressDot from 'components/atoms/ProgressDot/ProgressDot';
import ProgressPopup from 'components/molecules/ProgressPopup/ProgressPopup';
import { StyledProgressDotBar, StyledBarLine } from './ProgressDotBar.styled';
import { MAX_DOT_COUNT, PROGRESS_DOT_SIZE, PROGRESS_POPUP_WIDTH } from 'common/constants/FixStyle';

interface Props {
  consultingFileList: Array<any>;
}

const ProgressDotBar: React.FC<Props> = ({ consultingFileList }) => {
  const [activeDot, setActiveDot] = useState(-1);
  const barRef = useRef<HTMLDivElement>(null);
  let popupRef = createRef();

  const barWidth = useMemo(() => {
    const barCount = consultingFileList.length;

    if (barCount === 1) {
      return `${PROGRESS_DOT_SIZE}px`;
    } else {
      return `calc((100% - ${PROGRESS_DOT_SIZE}px) * (${
        (barCount - 1) / (MAX_DOT_COUNT - 1)
      }) + ${PROGRESS_DOT_SIZE}px )`;
    }
  }, [consultingFileList.length]);

  const calcPosition = useCallback(
    (idx: number): string => {
      if (!barRef.current) {
        return '0';
      }

      let startPos = 0;
      const barCount = consultingFileList.length;
      const barWidth = barRef.current.offsetWidth;

      if (barCount === 1) {
        startPos = PROGRESS_DOT_SIZE / 2;
      } else {
        startPos = (barWidth - PROGRESS_DOT_SIZE) * (idx / (barCount - 1)) + PROGRESS_DOT_SIZE / 2;
      }

      const result = startPos - PROGRESS_POPUP_WIDTH / 2;
      return result.toString() + 'px';
    },
    [consultingFileList.length]
  );

  return (
    <StyledProgressDotBar width={barWidth} ref={barRef}>
      <StyledBarLine />
      {consultingFileList.map((consultingFile, idx) => (
        <React.Fragment key={idx}>
          <ProgressDot idx={idx} times={1} handlePopup={setActiveDot} />
          {activeDot === idx && <ProgressPopup top="50px" left={calcPosition(idx)} clickRef={popupRef} />}
        </React.Fragment>
      ))}
    </StyledProgressDotBar>
  );
};

export default ProgressDotBar;
