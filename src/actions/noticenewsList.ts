import { NoticeList, NewsList } from '@objects';
import { NoticeListAction, NewsListAction } from '@actions';

export const UPDATE_NOTICE = 'UPDATE_NOTICE';
export const UPDATE_NEWS = 'UPDATE_NEWS';

export const updateNotice = (noticeList: NoticeList): NoticeListAction => ({
  type: UPDATE_NOTICE,
  noticeList,
});

export const updateNews = (newsList: NewsList): NewsListAction => ({
  type: UPDATE_NEWS,
  newsList,
});
