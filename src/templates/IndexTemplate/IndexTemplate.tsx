import { SmallButton } from 'components/atoms/Button/Button';
import DdayBoard from 'components/organisms/DdayBoard/DdayBoard';
import TakingConsulting from 'components/organisms/TakingConsulting/TakingConsulting';
import MyFiles from 'components/organisms/MyFiles/MyFiles';
import NoticeNews from 'components/organisms/NoticeNews/NoticeNews';
import { StyledIndexTemplate, StyledMenuSection, StyledMenuTitle } from './IndexTmeplate.styled';
import SNSad from 'components/organisms/SNSad/SNSad';

const IndexTemplate: React.FC = () => {
  const ddayList = [
    <span>
      수시전형
      <br />
      D-31
    </span>,
    <span>
      대학수능능력시험
      <br />
      D-150
    </span>,
    <span>
      글감짜기 컨설팅
      <br />
      D-5
    </span>,
  ];

  const takeConsultingList: Array<ConsultingPreview> = [
    {
      title: '1. 수시레시피 면접 컨설팅',
      consultant: '김동빈 컨설턴트',
      totalTimes: 10,
      totalHours: 20,
      currentTimes: 7,
      currentHours: 14,
      startDate: new Date(),
      endDate: new Date(),
      progressDay: 86,
    },
    {
      title: '2. 수시지원 솔루션 컨설팅',
      consultant: '김동빈 컨설턴트',
      totalTimes: 10,
      totalHours: 20,
      currentTimes: 7,
      currentHours: 14,
      startDate: new Date(),
      endDate: new Date(),
      progressDay: 86,
    },
    {
      title: '3. 자기소개서 컨설팅',
      consultant: '김동빈 컨설턴트',
      totalTimes: 10,
      totalHours: 20,
      currentTimes: 7,
      currentHours: 14,
      startDate: new Date(),
      endDate: new Date(),
      progressDay: 86,
    },
  ];

  const myFilesList: Array<MyFile> = [
    {
      title: '1. 수시레시피 면접 컨설팅.hwp',
      link: '#1',
    },
    {
      title: '2. 1회차 일지록.hwp',
      link: '#2',
    },
  ];

  const noticeList = [
    '6.2 수시레시피 수강생 전원 이벤트',
    '수시 6개 합격 시 수강 금액 20% 추가 할인 이벤트',
    '6.1 10:00 - 17:00 마이페이지 서버 점검',
    '김동빈 컨설턴트가 알려주는 학생부 관리 비법',
  ];
  const newsList = ['올해 9월 모의고사 난이도 상승으로 수험생 곤란', '정시 확대로 인해 바뀐 입시 전략'];

  return (
    <StyledIndexTemplate>
      <StyledMenuSection>
        <DdayBoard ddayList={ddayList} />
      </StyledMenuSection>

      <StyledMenuSection>
        <StyledMenuTitle>수강 컨설팅 확인하기</StyledMenuTitle>
        <SmallButton className="detail-btn" theme="kobalt">
          자세히 보기
        </SmallButton>
        <TakingConsulting consultingList={takeConsultingList} />
      </StyledMenuSection>

      <StyledMenuSection>
        <StyledMenuTitle>첨부 파일</StyledMenuTitle>
        <SmallButton className="detail-btn" theme="kobalt">
          자세히 보기
        </SmallButton>
        <MyFiles fileList={myFilesList} />
      </StyledMenuSection>

      <StyledMenuSection>
        <SmallButton className="detail-btn" theme="kobalt">
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
};

export default IndexTemplate;
