import { UPDATE_NOTICE, UPDATE_NEWS } from 'actions/noticenewsList';

const initState: NoticeNewsList = {
  notice: [],
  news: [],
};

export const noticenewsReducer = (state = initState, action: NoticeListAction | NewsListAction) => {
  switch (action.type) {
    case UPDATE_NOTICE:
      const updateNoticeList = {
        notice: action.noticeList,
        news: state.news,
      };
      return updateNoticeList;
    case UPDATE_NEWS:
      const updateNewsList = {
        notice: state.notice,
        news: action.newsList,
      };
      return updateNewsList;
    default:
      return state;
  }
};
