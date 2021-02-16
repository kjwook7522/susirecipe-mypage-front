import { useState } from 'react';
import { StyledNoticeNews, StyledToggleTitle, StyledContents } from './NoticeNews.styled';

interface Props {
  noticeList: NoticeList;
  newsList: NewsList;
}

const NoticeNews: React.FC<Props> = ({ noticeList, newsList }) => {
  const [activeTab, setActiveTab] = useState<NoticeNewsTab>('notice');

  return (
    <StyledNoticeNews>
      <StyledToggleTitle>
        <span className={activeTab === 'notice' ? 'active' : undefined} onClick={() => setActiveTab('notice')}>
          중요 공지 / 이벤트
        </span>{' '}
        |{' '}
        <span className={activeTab === 'news' ? 'active' : undefined} onClick={() => setActiveTab('news')}>
          입시 뉴스
        </span>
      </StyledToggleTitle>
      <StyledContents active={activeTab === 'notice'}>
        {noticeList.map(notice => (
          <li>{notice}</li>
        ))}
      </StyledContents>
      <StyledContents active={activeTab === 'news'}>
        {newsList.map(news => (
          <li>{news}</li>
        ))}
      </StyledContents>
    </StyledNoticeNews>
  );
};

export default NoticeNews;
