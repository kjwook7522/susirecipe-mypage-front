import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useClickOutside } from 'hooks/useClickOutside';
import ProfilePopup from 'components/molecules/ProfilePopup/ProfilePopup';
import {
  StyledHaeder,
  StyledLeftHeader,
  StyledRightHeader,
  StyledIconBox,
  StyledUserBox,
  StyledUser,
  StyledComment,
} from './Header.styled';
import { BsBellFill } from 'react-icons/bs';
import { IoPower } from 'react-icons/io5';
import AlarmPopup from 'components/molecules/AlarmPopup/AlarmPopup';

const Header: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState(false);
  const [activeAlarm, setActiveAlarm] = useState(false);
  const cancleProfile = () => {
    setActiveProfile(false);
  };
  const cancleAlarm = () => {
    setActiveAlarm(false);
  };
  const [profileRef, profileBtnRef] = useClickOutside(cancleProfile);
  const [alarmRef, alarmBtnRef] = useClickOutside(cancleAlarm);

  return (
    <StyledHaeder>
      <StyledLeftHeader>
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/images/main_logo.png'} alt="main_logo" />
        </Link>
        <p>LMS SERVICE</p>
      </StyledLeftHeader>

      <StyledRightHeader>
        <StyledUserBox>
          <StyledUser>
            <span className="username" ref={profileBtnRef} onClick={() => setActiveProfile(prev => !prev)}>
              김동빈
            </span>
            <img src={process.env.PUBLIC_URL + '/images/default_profile_img.jpg'} alt="user_img" />
          </StyledUser>
          <StyledComment>김동빈님도, 배우면바뀐다</StyledComment>
        </StyledUserBox>

        <StyledIconBox>
          <span className="icon alarm" ref={alarmBtnRef} onClick={() => setActiveAlarm(prev => !prev)}>
            <BsBellFill />{' '}
          </span>
          <span className="icon power">
            <IoPower />
          </span>
        </StyledIconBox>

        {activeProfile && <ProfilePopup clickRef={profileRef} cancleCallback={cancleProfile} />}
        {activeAlarm && <AlarmPopup clickRef={alarmRef} />}
      </StyledRightHeader>
    </StyledHaeder>
  );
};

export default Header;
