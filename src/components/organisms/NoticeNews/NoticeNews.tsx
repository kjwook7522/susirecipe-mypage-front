import React, { useState } from 'react';
import { NoticeList, NewsList, NoticeNewsTab } from '@objects';
import { StyledNoticeNews, StyledToggleTitle, StyledContents } from './NoticeNews.styled';

interface Props {
  noticeList: NoticeList;
  newsList: NewsList;
}

const NoticeNews: React.FC<Props> = ({ noticeList, newsList }: Props) => {
  const [activeTab, setActiveTab] = useState<NoticeNewsTab>({ notice: true, news: false });

  return (
    <StyledNoticeNews>
      <StyledToggleTitle>
        <button
          type="button"
          className={activeTab.notice ? 'active' : undefined}
          onClick={() => setActiveTab({ notice: true, news: false })}
        >
          중요 공지 / 이벤트
        </button>{' '}
        |{' '}
        <button
          type="button"
          className={activeTab.news ? 'active' : undefined}
          onClick={() => setActiveTab({ notice: false, news: true })}
        >
          입시 뉴스
        </button>
      </StyledToggleTitle>
      <StyledContents active={activeTab.notice}>
        {noticeList.map(notice => (
          <li key={notice.id}>{notice.title}</li>
        ))}
      </StyledContents>
      <StyledContents active={activeTab.news}>
        {newsList.map(news => (
          <li key={news.id}>{news.title}</li>
        ))}
      </StyledContents>
    </StyledNoticeNews>
  );
};

export default NoticeNews;
