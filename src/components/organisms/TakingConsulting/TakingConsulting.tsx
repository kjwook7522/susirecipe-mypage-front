import { StyledTakingConsulting, StyledTableRow } from './TakingConsulting.styled';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';

interface Props {
  consultingList: Array<ConsultingPreview>;
}

const TakingConsulting: React.FC<Props> = ({ consultingList }) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  // const openTab = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
  //   const tab = parseInt(event.currentTarget.id);
  //   setActiveTab(tab);
  // };

  // const closeTab = () => {
  //   setActiveTab(null);
  // };

  const handleTab = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { tab } = event.currentTarget.dataset;
    if (!tab) {
      return;
    }

    const tabIndex = parseInt(tab);
    if (tabIndex !== activeTab) {
      setActiveTab(tabIndex);
    } else {
      setActiveTab(null);
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
          <div className="content-cell" data-tab={idx} onClick={handleTab}>
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
