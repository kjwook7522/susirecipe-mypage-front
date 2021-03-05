import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { StyledProfilePopup } from './ProfilePopup.styled';

interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  clickRef?: React.RefObject<any>;
  cancleCallback?: (event: React.MouseEvent<any, MouseEvent>) => void;
}

const ProfilePopup: React.FC<Props> = ({ clickRef, cancleCallback, ...props }) => {
  return (
    <StyledProfilePopup ref={clickRef} {...props}>
      <FaTimes onClick={cancleCallback} />
      <img src={process.env.PUBLIC_URL + '/images/default_profile_img.jpg'} alt="profile_img" />
      <h1>김동빈</h1>
      <h2>멘토</h2>
      <Link to="/editprofile" onClick={cancleCallback}>
        개인정보 수정
      </Link>
    </StyledProfilePopup>
  );
};

export default ProfilePopup;
