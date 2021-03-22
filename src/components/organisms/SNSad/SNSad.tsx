import React from 'react';
import FlexButton from 'components/atoms/FlexButton/FlexButton';
import { RiKakaoTalkFill, RiInstagramLine } from 'react-icons/ri';
import { StyledSNSad } from './SNSad.styled';

const SNSad: React.FC = () => (
  <StyledSNSad>
    <p>채널을 추가하면 유익하고 맞춤화된 입시 정보를 받아볼 수 있습니다.</p>
    <FlexButton className="sns-btn" width="150px" height="50px" theme="kakao">
      <RiKakaoTalkFill id="kakao" /> 채널 추가
    </FlexButton>
    <FlexButton className="sns-btn" width="150px" height="50px" theme="insta">
      <RiInstagramLine id="instagram" />
      채널 추가
    </FlexButton>
  </StyledSNSad>
);

export default SNSad;
