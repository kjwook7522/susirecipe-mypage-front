export const UPDATE_CONSULTING = 'UPDATE_CONSULTING';

export const updateConsulting = (consulting: Consulting): ConsultingAction => ({
  type: UPDATE_CONSULTING,
  consulting,
});
