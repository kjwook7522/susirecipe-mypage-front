import React from 'react';
import { Link } from 'react-router-dom';
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
import ButtonPopup from 'components/molecules/ButtonPopup/ButtonPopup';

const userNameComponent: React.FC<{
  clickRef?: React.RefObject<any>;
  onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
}> = React.memo(({ children, clickRef, onClick }) => (
  <span className="username" ref={clickRef} onClick={onClick}>
    {children}
  </span>
));

const alarmIconComponent: React.FC<{
  clickRef?: React.RefObject<any>;
  onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
}> = React.memo(({ children, clickRef, onClick }) => (
  <span className="icon alarm" ref={clickRef} onClick={onClick}>
    {children}
  </span>
));

const Header: React.FC = () => {
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
            <ButtonPopup buttonComponent={userNameComponent} buttonChildren="김동빈" popupComponent={ProfilePopup} />
            <img src={process.env.PUBLIC_URL + '/images/default_profile_img.jpg'} alt="user_img" />
          </StyledUser>
          <StyledComment>김동빈님도, 배우면바뀐다</StyledComment>
        </StyledUserBox>

        <StyledIconBox>
          <ButtonPopup
            buttonComponent={alarmIconComponent}
            buttonChildren={<BsBellFill />}
            popupComponent={AlarmPopup}
          />
          <span className="icon power">
            <IoPower />
          </span>
        </StyledIconBox>
      </StyledRightHeader>
    </StyledHaeder>
  );
};

export default Header;
