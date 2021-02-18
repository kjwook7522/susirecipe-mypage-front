export const UPDATE_TAKE_CONSULTING = 'UPDATE_TAKE_CONSULTING';

export const updateTakeConsulting = (consultingList: ConsultingList): TakeConsultingListAction => ({
  type: UPDATE_TAKE_CONSULTING,
  consultingList,
});
