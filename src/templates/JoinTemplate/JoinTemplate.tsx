import React from 'react';
import AuthBanner from 'components/molecules/AuthBanner/AuthBanner';
import AuthTypeToggle from 'components/molecules/AuthTypeToggle/AuthTypeToggle';
import JoinForm from 'components/organisms/JoinForm/JoinForm';
import {
  StyledHeader,
  StyledJoinTemplate,
  StyledLoginTypeSection,
  StyledBannerSection,
  StyledInputSection,
} from './JoinTemplate.styled';

const JoinTemplate: React.FC = () => (
  <StyledJoinTemplate>
    <StyledHeader>수시레시피 회원가입</StyledHeader>

    <StyledLoginTypeSection>
      <AuthTypeToggle type="join" />
    </StyledLoginTypeSection>

    <StyledBannerSection>
      <AuthBanner />
    </StyledBannerSection>

    <StyledInputSection>
      <JoinForm />
    </StyledInputSection>
  </StyledJoinTemplate>
);

export default JoinTemplate;
