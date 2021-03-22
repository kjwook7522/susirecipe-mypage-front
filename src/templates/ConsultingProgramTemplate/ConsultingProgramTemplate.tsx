import { useState } from 'react';
import ProgressDotBar from 'components/organisms/ProgressDotBar/ProgressDotBar';
import {
  StyledConsultingHeader,
  StyledConsultingProgramTemplate,
  StyledProgramTitle,
  StyledProgramPeriod,
  StyledToggleTitle,
} from './ConsultingProgramTemplate.styled';
import { tempConsultingFileList } from 'common/constants/TempData';

interface Props {
  consulting: Consulting;
}

const ConsultingProgramTemplate: React.FC<Props> = ({ consulting }) => {
  const [activeTab, setActiveTab] = useState<ConsultingDiaryTab>('consulting');

  return (
    <>
      <StyledConsultingHeader>
        <StyledProgramTitle>
          <img src={process.env.PUBLIC_URL + '/images/default_profile_img.jpg'} alt="profile_img" />
          <div>
            <h1>{consulting.title}</h1>
            <h2>{consulting.consultant}</h2>
          </div>
        </StyledProgramTitle>
        <StyledProgramPeriod>
          <span>2021.05.28 ~ 2022.02.01</span>
        </StyledProgramPeriod>
      </StyledConsultingHeader>

      <StyledConsultingProgramTemplate>
        <StyledToggleTitle>
        <span className={activeTab === 'consulting' ? 'active' : undefined} onClick={() => setActiveTab('consulting')}>
          메인
        </span>{' '}
        |{' '}
        <span className={activeTab === 'diary' ? 'active' : undefined} onClick={() => setActiveTab('diary')}>
          일지록
        </span>
        </StyledToggleTitle>

        <ProgressDotBar consultingFileList={tempConsultingFileList} />
      </StyledConsultingProgramTemplate>
    </>
  );
};

export default ConsultingProgramTemplate;
