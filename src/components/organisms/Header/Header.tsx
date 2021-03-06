import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePopupModule from 'components/molecules/ProfilePopupModule/ProfilePopupModule';
import IconButton from 'components/atoms/IconButton/IconButton';
import AlarmPopupModule from 'components/molecules/AlarmPopupModule/AlarmPopupModule';
import { IoPower } from 'react-icons/io5';
import defaultProfileImg from 'assets/images/default_profile_img.jpg';
import logo from 'assets/images/main_logo.png';
import {
  StyledHaeder,
  StyledLeftHeader,
  StyledRightHeader,
  StyledIconBox,
  StyledUserBox,
  StyledUser,
  StyledComment,
} from './Header.styled';

const Header: React.FC = () => (
  <StyledHaeder>
    <StyledLeftHeader>
      <Link to="/">
        <img src={logo} alt="main_logo" />
      </Link>
      <p>LMS SERVICE</p>
    </StyledLeftHeader>

    <StyledRightHeader>
      <StyledUserBox>
        <StyledUser>
          <ProfilePopupModule userName="김동빈" />
          <img className="profile-img" src={defaultProfileImg} alt="user_img" />
        </StyledUser>
        <StyledComment>김동빈님도, 배우면바뀐다</StyledComment>
      </StyledUserBox>

      <StyledIconBox>
        <AlarmPopupModule />
        {/* <div style={{margin: '0.5rem'}}></div> */}
        <IconButton color="#fa001d">
          <IoPower />
        </IconButton>
      </StyledIconBox>
    </StyledRightHeader>
  </StyledHaeder>
);

export default Header;
