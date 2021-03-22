import { ConsultingPreviewList } from '@objects';
import { TakeConsultingListAction } from '@actions';
import { UPDATE_TAKE_CONSULTING } from 'actions/takeConsultingList';

const initState: ConsultingPreviewList = [];

export const takeConsultingReducer = (state = initState, action: TakeConsultingListAction): ConsultingPreviewList => {
  switch (action.type) {
    case UPDATE_TAKE_CONSULTING:
      return action.consultingList;
    default:
      return state;
  }
};
