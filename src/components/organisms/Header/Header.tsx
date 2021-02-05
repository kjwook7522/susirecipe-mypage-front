import { Link } from 'react-router-dom';
import { StyledHaeder, StyledLeftHeader, StyledRightHeader, StyledIconBox, StyledUserBox } from './Header.styled';
import { BsBellFill } from 'react-icons/bs';
import { IoPower } from 'react-icons/io5';

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
          <span className="username">김동빈</span>
          <img src="" alt="user_img" />
        </StyledUserBox>

        <StyledIconBox>
          <span className="icon alarm">
            <BsBellFill />
          </span>
          <span className="icon power">
            <IoPower />
          </span>
        </StyledIconBox>
      </StyledRightHeader>
    </StyledHaeder>
  );
};

export default Header;
