import { useState } from 'react';
import { StyledNoticeNews, StyledToggleTitle, StyledContents } from './NoticeNews.styled';

interface Props {
  noticeList: Array<string>;
  newsList: Array<string>;
}

const NoticeNews: React.FC<Props> = ({ noticeList, newsList }) => {
  // ** ActiveTab ** //
  // 0. 중요공지/이벤트  //
  // 1. 입시 뉴스      //
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const { tab } = event.currentTarget.dataset;
    if (tab === 'notice') {
      setActiveTab(0);
    } else if (tab === 'news') {
      setActiveTab(1);
    }
  };

  return (
    <StyledNoticeNews>
      <StyledToggleTitle>
        <span data-tab="notice" className={activeTab === 0 ? 'active' : undefined} onClick={handleTab}>
          중요 공지 / 이벤트
        </span>{' '}
        |{' '}
        <span data-tab="news" className={activeTab === 1 ? 'active' : undefined} onClick={handleTab}>
          입시 뉴스
        </span>
      </StyledToggleTitle>
      <StyledContents active={activeTab === 0}>
        {noticeList.map(notice => (
          <li>{notice}</li>
        ))}
      </StyledContents>
      <StyledContents active={activeTab === 1}>
        {newsList.map(news => (
          <li>{news}</li>
        ))}
      </StyledContents>
    </StyledNoticeNews>
  );
};

export default NoticeNews;
