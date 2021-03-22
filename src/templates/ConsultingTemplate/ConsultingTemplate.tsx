import React from 'react';
import { ConsultingPreviewList } from '@objects';
import ConsultingCard from 'components/molecules/ConsultingCard/ConsultingCard';
import { StyledConsultingTemplate, StyledHeader, StyledConsultingListSection } from './ConsultingTemplate.styled';

interface Props {
  consultingList: ConsultingPreviewList;
}

const ConsultingTemplate: React.FC<Props> = ({ consultingList }: Props) => (
  <StyledConsultingTemplate>
    <StyledHeader>
      <b>&#34;김동빈&#34;</b>님의 이용 중인 프로그램
    </StyledHeader>
    <StyledConsultingListSection>
      {consultingList.map(consulting => (
        <div key={consulting.id} className="list-item">
          <ConsultingCard consulting={consulting} />
        </div>
      ))}
    </StyledConsultingListSection>
  </StyledConsultingTemplate>
);

export default ConsultingTemplate;
