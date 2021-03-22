import React, { useCallback, useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import ProfilePopup from 'components/molecules/ProfilePopup/ProfilePopup';
import { StyledProfilePopupModule, StyledUsername } from './ProfilePopupModule.styled';

interface Props {
  userName: string;
}

const ProfilePopupModule: React.FC<Props> = ({ userName }: Props) => {
  const [isPopup, setIsPopup] = useState(false);
  const [popupRef, buttonRef] = useClickOutside(() => setIsPopup(false));

  const handlePopup = useCallback(() => {
    setIsPopup(prev => !prev);
  }, []);

  return (
    <StyledProfilePopupModule>
      <StyledUsername ref={buttonRef} onClick={handlePopup}>
        {userName}
      </StyledUsername>
      {isPopup && <ProfilePopup clickRef={popupRef} top="70px" left="-80px" cancleCallback={handlePopup} />}
    </StyledProfilePopupModule>
  );
};

export default ProfilePopupModule;
