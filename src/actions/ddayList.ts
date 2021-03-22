import { DdayList } from '@objects';
import { DdayListAction } from '@actions';

export const UPDATE_DDAY = 'UPDATE_DDAY';

export const updateDday = (ddayList: DdayList): DdayListAction => ({
  type: UPDATE_DDAY,
  ddayList,
});
