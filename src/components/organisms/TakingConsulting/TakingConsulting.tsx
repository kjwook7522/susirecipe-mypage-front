import { StyledTakingConsulting, StyledTableRow } from './TakingConsulting.styled';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';

interface Props {
  consultingList: Array<ConsultingPreview>;
}

const TakingConsulting: React.FC<Props> = ({ consultingList }) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const openTab = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    const tab = parseInt(event.currentTarget.id);
    setActiveTab(tab);
  };

  const closeTab = () => {
    setActiveTab(null);
  };

  return (
    <StyledTakingConsulting>
      <StyledTableRow>
        <div className="head-cell">수강 컨설팅 명</div>
        <div className="head-cell">컨설턴트</div>
      </StyledTableRow>

      {consultingList.map((consulting, idx) => (
        <StyledTableRow active={activeTab === idx}>
          <div className="content-cell">
            <h1 className="title">
              {consulting.title}
              {activeTab === idx ? (
                <FiChevronUp id={idx.toString()} className="more-icon" onClick={closeTab} />
              ) : (
                <FiChevronDown id={idx.toString()} className="more-icon" onClick={openTab} />
              )}
            </h1>
            <div className="content">
              <p>회차 진행률 {consulting.currentTimes} / {consulting.totalTimes}</p>
              <p>시간 진행률 {consulting.currentHours} / {consulting.totalHours}</p>
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
