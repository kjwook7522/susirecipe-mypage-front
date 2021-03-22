import React, { useCallback } from 'react';
import { ConsultingPreview} from '@objects'
import { SmallButton } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import defaultProfileImg from 'assets/images/default_profile_img.jpg'
import {
  StyledConsultingCard,
  StyledThumbnailWrapper,
  StyledConsultingContent,
  StyledConsultingInfo,
  StyledConsultingBtnWrapper,
} from './ConsultingCard.styled';

interface Props {
  consulting: ConsultingPreview;
}

const ConsultingCard: React.FC<Props> = ({ consulting }: Props) => {
  const warnningMsg = useCallback(() => alert('준비중입니다'), []);
  return (
    <StyledConsultingCard>
      <StyledThumbnailWrapper>
        <img src={defaultProfileImg} alt="thumbnail" />
      </StyledThumbnailWrapper>

      <StyledConsultingContent>
        <StyledConsultingInfo>
          <h1>{consulting.title}</h1>
          <h2>담당컨설턴트: {consulting.consultant}</h2>
          <h2>이용 기간: 2020.01~02</h2>
        </StyledConsultingInfo>

        <StyledConsultingBtnWrapper>
          <Link to={`/consulting/${consulting.id}`}>
            <SmallButton theme="sky">
              컨설팅룸 입장
            </SmallButton>
          </Link>
          <SmallButton theme="sky" onClick={warnningMsg}>
            화상수업 시작
          </SmallButton>
        </StyledConsultingBtnWrapper>
      </StyledConsultingContent>
    </StyledConsultingCard>
  );
};

export default React.memo(ConsultingCard);
