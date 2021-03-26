import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import defaultProfileImg from 'assets/images/default_profile_img.jpg';
import { StyledProfilePopup } from './ProfilePopup.styled';

interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  clickRef?: React.RefObject<any>;
  cancleCallback?: () => void;
}

const ProfilePopup: React.FC<Props> = ({ clickRef, cancleCallback, ...props }: Props) => (
  <StyledProfilePopup ref={clickRef} {...props}>
    <FaTimes onClick={cancleCallback} />
    <img src={defaultProfileImg} alt="profile_img" />
    <h1>김동빈</h1>
    <h2>멘토</h2>
    <Link to="/editprofile" onClick={cancleCallback}>
      개인정보 수정
    </Link>
  </StyledProfilePopup>
);

export default ProfilePopup;
