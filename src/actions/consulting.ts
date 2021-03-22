import { Consulting } from '@objects';
import { ConsultingAction } from '@actions';

export const UPDATE_CONSULTING = 'UPDATE_CONSULTING';

export const updateConsulting = (consulting: Consulting): ConsultingAction => ({
  type: UPDATE_CONSULTING,
  consulting,
});
