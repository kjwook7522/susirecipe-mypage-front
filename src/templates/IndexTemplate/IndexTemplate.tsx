import React from 'react';
import { Link } from 'react-router-dom';
import { DdayList, ConsultingPreviewList, MyFileList, NoticeList, NewsList } from '@objects';
import { SmallButton } from 'components/atoms/Button/Button';
import DdayBoard from 'components/organisms/DdayBoard/DdayBoard';
import TakingConsulting from 'components/organisms/TakingConsulting/TakingConsulting';
import MyFiles from 'components/organisms/MyFiles/MyFiles';
import NoticeNews from 'components/organisms/NoticeNews/NoticeNews';
import SNSad from 'components/organisms/SNSad/SNSad';
import { StyledIndexTemplate, StyledMenuSection, StyledMenuTitle } from './IndexTmeplate.styled';

interface Props {
  ddayList: DdayList;
  takeConsultingList: ConsultingPreviewList;
  myFileList: MyFileList;
  noticeList: NoticeList;
  newsList: NewsList;
}

const IndexTemplate: React.FC<Props> = ({ ddayList, takeConsultingList, myFileList, noticeList, newsList }: Props) => (
  <StyledIndexTemplate>
    <StyledMenuSection>
      <DdayBoard ddayList={ddayList} />
    </StyledMenuSection>

    <StyledMenuSection>
      <StyledMenuTitle>수강 컨설팅 확인하기</StyledMenuTitle>
      <Link to="consulting">
        <SmallButton className="detail-btn" theme="sky">
          자세히 보기
        </SmallButton>
      </Link>
      <TakingConsulting consultingList={takeConsultingList} />
    </StyledMenuSection>

    <StyledMenuSection>
      <StyledMenuTitle>첨부 파일</StyledMenuTitle>
      <SmallButton className="detail-btn" theme="sky">
        자세히 보기
      </SmallButton>
      <MyFiles fileList={myFileList} />
    </StyledMenuSection>

    <StyledMenuSection>
      <SmallButton className="detail-btn" theme="sky">
        자세히 보기
      </SmallButton>
      <NoticeNews noticeList={noticeList} newsList={newsList} />
    </StyledMenuSection>

    <StyledMenuSection>
      <StyledMenuTitle>SNS 채널</StyledMenuTitle>
      <SNSad />
    </StyledMenuSection>
  </StyledIndexTemplate>
);

export default IndexTemplate;
