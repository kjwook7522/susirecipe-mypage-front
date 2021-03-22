import { DdayList } from '@objects';
import { DdayListAction } from '@actions';
import { UPDATE_DDAY } from 'actions/ddayList';

const initState: DdayList = [];

export const ddayReducer = (state = initState, action: DdayListAction): DdayList => {
  switch (action.type) {
    case UPDATE_DDAY:
      return action.ddayList;
    default:
      return state;
  }
};
