import React from 'react';
import AuthTypeToggle from 'components/molecules/AuthTypeToggle/AuthTypeToggle';
import AuthBanner from 'components/molecules/AuthBanner/AuthBanner';
import {
  StyledLoginTemplate,
  StyledHeader,
  StyledLoginTypeSection,
  StyledBannerSection,
  StyledInputSection,
  StyledFindIdSection,
  StyledSocialLoginSection,
} from './LoginTemplate.styled';

const LoginTemplate: React.FC = () => (
  <StyledLoginTemplate>
    <StyledHeader>수시레시피 로그인</StyledHeader>
    <StyledLoginTypeSection>
      <AuthTypeToggle type='login' />
    </StyledLoginTypeSection>
    <StyledBannerSection>
      <AuthBanner />
    </StyledBannerSection>
    <StyledInputSection>input</StyledInputSection>
    <StyledFindIdSection>find</StyledFindIdSection>
    <StyledSocialLoginSection>social login</StyledSocialLoginSection>
  </StyledLoginTemplate>
);

export default LoginTemplate;
