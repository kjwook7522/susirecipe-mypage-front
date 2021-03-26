import AuthBanner from 'components/molecules/AuthBanner/AuthBanner';
import AuthTypeToggle from 'components/molecules/AuthTypeToggle/AuthTypeToggle';
import React from 'react';
import { StyledHeader, StyledJoinTemplate, StyledLoginTypeSection, StyledBannerSection } from './JoinTemplate.styled';

const JoinTemplate: React.FC = () => (
  <StyledJoinTemplate>
    <StyledHeader>수시레시피 회원가입</StyledHeader>

    <StyledLoginTypeSection>
      <AuthTypeToggle type="join" />
    </StyledLoginTypeSection>

    <StyledBannerSection>
      <AuthBanner />
    </StyledBannerSection>
  </StyledJoinTemplate>
);

export default JoinTemplate;
