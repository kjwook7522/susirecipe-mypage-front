import { useCallback, useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import FlexButton from 'components/atoms/FlexButton/FlexButton';
import SchedulePopup from 'components/molecules/SchedulePopup/SchedulePopup';
import { StyledSchedulePopupModule } from './SchedulePopupModule.styled';

const SchedulePopupModule: React.FC = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [popupRef, buttonRef] = useClickOutside(() => setIsPopup(false));

  const togglePopup = useCallback(() => {
    setIsPopup(prev => !prev);
  }, []);
  return (
    <StyledSchedulePopupModule>
      <FlexButton width="30px" height="30px" clickRef={buttonRef} onClick={togglePopup}>
        +
      </FlexButton>
      {isPopup && <SchedulePopup handleCancle={togglePopup} clickRef={popupRef} top="60px" right="0" />}
    </StyledSchedulePopupModule>
  );
};

export default SchedulePopupModule;
