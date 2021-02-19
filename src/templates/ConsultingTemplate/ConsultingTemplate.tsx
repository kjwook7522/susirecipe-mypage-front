import ConsultingCard from 'components/molecules/ConsultingCard/ConsultingCard';
import { StyledConsultingTemplate, StyledHeader, StyledConsultingListSection } from './ConsultingTemplate.styled';

interface Props {
  consultingList: ConsultingPreviewList;
}

const ConsultingTemplate: React.FC<Props> = ({consultingList}) => {
  return (
    <StyledConsultingTemplate>
      <StyledHeader>
        <b>"김동빈"</b>님의 이용 중인 프로그램
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
};

export default ConsultingTemplate;
