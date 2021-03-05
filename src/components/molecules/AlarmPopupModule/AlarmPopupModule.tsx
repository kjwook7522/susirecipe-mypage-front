import { useCallback, useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import IconButton from 'components/atoms/IconButton/IconButton';
import AlarmPopup from '../AlarmPopup/AlarmPopup';
import { StyledAlarmPopupModule } from './AlarmPopupModule.styled';
import { BsBellFill } from 'react-icons/bs';

const AlarmPopupModule: React.FC = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [popupRef, buttonRef] = useClickOutside(() => setIsPopup(false));

  const handlePopup = useCallback(() => {
    setIsPopup(prev => !prev);
  }, []);
  
  return (
    <StyledAlarmPopupModule>
      <IconButton clickRef={buttonRef} onClick={handlePopup} >
        <BsBellFill />
      </IconButton>
      {isPopup && <AlarmPopup clickRef={popupRef} top="70px" right="-50px" />}
    </StyledAlarmPopupModule>
  );
};

export default AlarmPopupModule;
