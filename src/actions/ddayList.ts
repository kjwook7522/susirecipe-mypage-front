export const UPDATE_DDAY = 'UPDATE_DDAY';

export const updateDday = (ddayList: DdayList): DdayListAction => ({
  type: UPDATE_DDAY,
  ddayList,
});
