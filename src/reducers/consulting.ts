import { UPDATE_CONSULTING } from 'actions/consulting';

const initState: Consulting = {
  id: '',
  title: '',
  consultant: '',
};

export const consultingReducer = (state = initState, action: ConsultingAction): Consulting => {
  switch (action.type) {
    case UPDATE_CONSULTING:
      return action.consulting;
    default:
      return state;
  }
};
