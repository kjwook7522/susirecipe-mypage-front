import { UPDATE_DDAY } from 'actions/ddayList';

const initState: DdayList = [];

export const ddayReducer = (state = initState, action: DdayListAction) => {
  switch (action.type) {
    case UPDATE_DDAY:
      return action.ddayList;
    default:
      return state;
  }
};
