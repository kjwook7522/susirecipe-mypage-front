import React, { useState } from 'react';
import { Consulting, ConsultingDiaryTab } from '@objects';
import ProgressDotBar from 'components/organisms/ProgressDotBar/ProgressDotBar';
import { tempConsultingFileList } from 'common/constants/TempData';
import defaultProfileImg from 'assets/images/default_profile_img.jpg';
import {
  StyledConsultingHeader,
  StyledConsultingProgramTemplate,
  StyledProgramTitle,
  StyledProgramPeriod,
  StyledToggleTitle,
} from './ConsultingProgramTemplate.styled';

interface Props {
  consulting: Consulting;
}

const ConsultingProgramTemplate: React.FC<Props> = ({ consulting }: Props) => {
  const [activeTab, setActiveTab] = useState<ConsultingDiaryTab>('consulting');

  return (
    <>
      <StyledConsultingHeader>
        <StyledProgramTitle>
          <img src={defaultProfileImg} alt="profile_img" />
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
          <button
            type="button"
            className={activeTab === 'consulting' ? 'active' : undefined}
            onClick={() => setActiveTab('consulting')}
          >
            메인
          </button>{' '}
          |{' '}
          <button
            type="button"
            className={activeTab === 'diary' ? 'active' : undefined}
            onClick={() => setActiveTab('diary')}
          >
            일지록
          </button>
        </StyledToggleTitle>

        <ProgressDotBar consultingFileList={tempConsultingFileList} />
      </StyledConsultingProgramTemplate>
    </>
  );
};

export default ConsultingProgramTemplate;
