import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDday } from 'actions/ddayList';
import { RootState } from 'common/store';
import IndexTemplate from 'templates/IndexTemplate/IndexTemplate';
import { updateTakeConsulting } from 'actions/takeConsultingList';
import { updateMyFile } from 'actions/myFileList';
import { tempConsultingList, tempDday, tempMyFilesList, tempNewsList, tempNoticeList } from 'common/constants/TempData';
import { updateNews, updateNotice } from 'actions/noticenewsList';

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const ddayList = useSelector((state: RootState) => state.ddayReducer);
  const takeConsultingList = useSelector((state: RootState) => state.takeConsultingReducer);
  const myFileList = useSelector((state: RootState) => state.myFileReducer);
  const noticenewsList = useSelector((state: RootState) => state.noticenewsReducer);

  useEffect(() => {
    dispatch(updateMyFile(tempMyFilesList));
    dispatch(updateDday(tempDday));
    dispatch(updateTakeConsulting(tempConsultingList));
    dispatch(updateNotice(tempNoticeList));
    dispatch(updateNews(tempNewsList));
  }, [dispatch]);

  return (
    <IndexTemplate
      ddayList={ddayList}
      takeConsultingList={takeConsultingList}
      myFileList={myFileList}
      noticeList={noticenewsList.notice}
      newsList={noticenewsList.news}
    />
  );
};

export default Index;
