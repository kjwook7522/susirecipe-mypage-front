import React from 'react';
import AuthTypeToggle from 'components/molecules/AuthTypeToggle/AuthTypeToggle';
import AuthBanner from 'components/molecules/AuthBanner/AuthBanner';
import LoginForm from 'components/organisms/LoginForm/LoginForm';
import {
  StyledLoginTemplate,
  StyledHeader,
  StyledLoginTypeSection,
  StyledBannerSection,
  StyledInputSection,
} from './LoginTemplate.styled';

const LoginTemplate: React.FC = () => (
  <StyledLoginTemplate>
    <StyledHeader>수시레시피 로그인</StyledHeader>

    <StyledLoginTypeSection>
      <AuthTypeToggle type="login" />
    </StyledLoginTypeSection>

    <StyledBannerSection>
      <AuthBanner />
    </StyledBannerSection>

    <StyledInputSection>
      <LoginForm />
    </StyledInputSection>
  </StyledLoginTemplate>
);

export default LoginTemplate;
