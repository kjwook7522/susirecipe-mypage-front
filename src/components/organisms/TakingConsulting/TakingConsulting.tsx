import { StyledTakingConsulting, StyledTableRow } from './TakingConsulting.styled';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';

interface Props {
  consultingList: ConsultingPreviewList;
}

const TakingConsulting: React.FC<Props> = ({ consultingList }) => {
  const [activeTab, setActiveTab] = useState(-1);

  const handleTab = (idx: number) => {
    if (idx !== activeTab) {
      setActiveTab(idx);
    } else {
      setActiveTab(-1);
    }
  };

  return (
    <StyledTakingConsulting>
      <StyledTableRow>
        <div className="head-cell">수강 컨설팅 명</div>
        <div className="head-cell">컨설턴트</div>
      </StyledTableRow>

      {consultingList.map((consulting, idx) => (
        <StyledTableRow key={idx} active={activeTab === idx}>
          <div className="content-cell" onClick={() => handleTab(idx)}>
            <h1 className="title">
              {consulting.title}
              {activeTab === idx ? (
                <FiChevronUp className="more-icon"/>
              ) : (
                <FiChevronDown className="more-icon"/>
              )}
            </h1>
            <div className="content">
              <p>
                회차 진행률 {consulting.currentTimes} / {consulting.totalTimes}
              </p>
              <p>
                시간 진행률 {consulting.currentHours} / {consulting.totalHours}
              </p>
              <p>시작일 : {consulting.startDate.toString()}</p>
              <p>종료일 : {consulting.endDate.toString()}</p>
              <p>경과일 {consulting.progressDay}일</p>
            </div>
          </div>
          <div className="content-cell">{consulting.consultant}</div>
        </StyledTableRow>
      ))}
    </StyledTakingConsulting>
  );
};

export default TakingConsulting;
