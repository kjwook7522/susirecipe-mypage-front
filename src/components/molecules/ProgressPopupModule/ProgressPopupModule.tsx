import { useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import ProgressDot from 'components/atoms/ProgressDot/ProgressDot';
import ProgressPopup from '../ProgressPopup/ProgressPopup';
import { StyledProgressPopupModule } from './ProgressPopupModule.styled';
import { PROGRESS_DOT_SIZE, PROGRESS_POPUP_WIDTH } from 'common/constants/FixStyle';

interface Props {
  consultingFiles: ConsultingDayFiles;
}

const ProgressPopupModule: React.FC<Props> = ({ consultingFiles }) => {
  const [isPopup, setIsPopup] = useState(false);
  const [popupRef, buttonRef] = useClickOutside(() => setIsPopup(false));

  const getCenterPostion = () => {
    const pos = -PROGRESS_POPUP_WIDTH / 2 + PROGRESS_DOT_SIZE / 2;
    return pos.toString() + 'px';
  };

  return (
    <StyledProgressPopupModule>
      <ProgressDot clickRef={buttonRef} times={consultingFiles.times} handlePopup={setIsPopup} />
      {isPopup && (
        <ProgressPopup top="50px" left={getCenterPostion()} clickRef={popupRef} fileList={consultingFiles.files} />
      )}
    </StyledProgressPopupModule>
  );
};

export default ProgressPopupModule;
