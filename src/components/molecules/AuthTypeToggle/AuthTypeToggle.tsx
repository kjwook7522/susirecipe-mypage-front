import React from 'react';
import { Link } from 'react-router-dom';
import { AuthTab } from '@objects';
import { StyledAuthTypeToggle, StyledTypeBox } from './AuthTypeToggle.styled';

interface Props {
  type: AuthTab;
}

const AuthTypeToggle: React.FC<Props> = ({ type }: Props) => (
  <StyledAuthTypeToggle>
    <Link to="/auth/login">
      <StyledTypeBox active={type === 'login'}>로그인</StyledTypeBox>
    </Link>
    <Link to="/auth/join">
      <StyledTypeBox active={type === 'join'}>회원가입</StyledTypeBox>
    </Link>
  </StyledAuthTypeToggle>
);

export default AuthTypeToggle;
