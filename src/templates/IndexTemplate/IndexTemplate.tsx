import { FlexButton, SmallButton } from 'components/atoms/Button/Button';
import DdayAlert from 'components/atoms/DdayAlert/DdayAlert';
import { useState } from 'react';
import {
  StyledIndexTemplate,
  StyledDdayAlertSection,
  StyledMenuSection,
  StyledTakingConsulting,
  StyledFile,
  StyledNoticeNews,
  StyledSNSSection,
} from './IndexTmeplate.styled';

const IndexTemplate: React.FC = () => {
  // ** ActiveTab ** //
  // 1. 중요공지/이벤트  //
  // 2. 입시 뉴스      //
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const { tab } = event.currentTarget.dataset;
    if (tab === 'notice') {
      setActiveTab(1);
    } else if (tab === 'news') {
      setActiveTab(2);
    }
  };

  return (
    <StyledIndexTemplate>
      <StyledDdayAlertSection>
        <div className="alert-box">
          <DdayAlert>
            수시전형
            <br />
            D-31
          </DdayAlert>
        </div>
        <div className="alert-box">
          <DdayAlert>
            대학수능능력시험
            <br />
            D-150
          </DdayAlert>
        </div>
        <div className="alert-box">
          <DdayAlert>
            글감짜기 컨설팅
            <br />
            D-5
          </DdayAlert>
        </div>
      </StyledDdayAlertSection>

      <StyledMenuSection>
        <h1>수강 컨설팅 확인하기</h1>
        <SmallButton className="detail-btn" theme="blue">
          자세히 보기
        </SmallButton>
        <StyledTakingConsulting>
          <div className="head">
            <div className="item">수강 컨설팅 명</div>
            <div className="item">컨설턴트</div>
          </div>
          <div className="row">
            <div className="item">1. 수시레시피 면접 컨설팅</div>
            <div className="item">김동빈 컨설턴트</div>
          </div>
          <div className="row">
            <div className="item">2. 수시지원 솔루션 컨설팅</div>
            <div className="item">김동빈 컨설턴트</div>
          </div>
          <div className="row">
            <div className="item">3. 자기소개서 컨설팅</div>
            <div className="item">김동빈 컨설턴트</div>
          </div>
        </StyledTakingConsulting>
      </StyledMenuSection>

      <StyledMenuSection>
        <h1>첨부 파일</h1>
        <SmallButton className="detail-btn" theme="blue">
          자세히 보기
        </SmallButton>
        <StyledFile>
          <div className="row">
            <div className="item">1. 수시레시피 면접 컨설팅.hwp</div>
            <div className="item">
              <FlexButton width="100%" height="100%" theme="blue">
                다운로드
              </FlexButton>
            </div>
          </div>
          <div className="row">
            <div className="item">2. 1회차 일지록.hwp</div>
            <div className="item">
              <FlexButton width="100%" height="100%" theme="blue">
                다운로드
              </FlexButton>
            </div>
          </div>
        </StyledFile>
      </StyledMenuSection>

      <StyledMenuSection>
        <h2>
          <span data-tab="notice" className={activeTab === 1 ? 'active' : undefined} onClick={handleTab}>
            중요 공지 / 이벤트
          </span>{' '}
          |{' '}
          <span data-tab="news" className={activeTab === 2 ? 'active' : undefined} onClick={handleTab}>
            입시 뉴스
          </span>
        </h2>
        <SmallButton className="detail-btn" theme="blue">
          자세히 보기
        </SmallButton>
        <StyledNoticeNews>
          {activeTab === 1 ? (
            <ul>
              <li>6.2 수시레시피 수강생 전원 이벤트</li>
              <li>수시 6개 합격 시 수강 금액 20% 추가 할인 이벤트</li>
              <li>6.1 10:00 - 17:00 마이페이지 서버 점검</li>
              <li>김동빈 컨설턴트가 알려주는 학생부 관리 비법</li>
            </ul>
          ) : (
            <ul>
              <li>올해 9월 모의고사 난이도 상승으로 수험생 곤란</li>
              <li>정시 확대로 인해 바뀐 입시 전략</li>
            </ul>
          )}
        </StyledNoticeNews>
      </StyledMenuSection>

      <StyledSNSSection>
        <h1>SNS 채널</h1>
        <p>채널을 추가하면 유익하고 맞춤화된 입시 정보를 받아볼 수 있습니다.</p>
        <FlexButton className="sns-btn" width="150px" height="50px" theme="kakao">
          채널 추가
        </FlexButton>
        <FlexButton className="sns-btn" width="150px" height="50px" theme="black">
          채널 추가
        </FlexButton>
      </StyledSNSSection>
    </StyledIndexTemplate>
  );
};

export default IndexTemplate;
