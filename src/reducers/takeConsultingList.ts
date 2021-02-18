import { UPDATE_TAKE_CONSULTING } from 'actions/takeConsultingList';

const initState: ConsultingList = [];

export const takeConsultingReducer = (state = initState, action: TakeConsultingListAction) => {
  switch (action.type) {
    case UPDATE_TAKE_CONSULTING:
      return action.consultingList;
    default:
      return state;
  }
};
