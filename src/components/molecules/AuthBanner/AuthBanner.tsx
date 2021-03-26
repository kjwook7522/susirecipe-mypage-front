import React from 'react';
import { StyledAuthBanner } from './AuthBanner.styled';

const AuthBanner: React.FC = () => (
  <StyledAuthBanner>
    <h1>수시레시피 10월간 추가 혜택 진행 중!</h1>
    <h2>자기소개서 컨설팅 진행시 20% 할인 쿠폰 지급</h2>
  </StyledAuthBanner>
);

export default AuthBanner;
