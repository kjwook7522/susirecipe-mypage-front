import { ConsultingPreviewList } from '@objects';
import { TakeConsultingListAction } from '@actions';

export const UPDATE_TAKE_CONSULTING = 'UPDATE_TAKE_CONSULTING';

export const updateTakeConsulting = (consultingList: ConsultingPreviewList): TakeConsultingListAction => ({
  type: UPDATE_TAKE_CONSULTING,
  consultingList,
});
