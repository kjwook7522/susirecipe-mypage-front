import React, { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Consulting } from '@objects'
import { RootState } from 'common/store';
import { updateConsulting } from 'actions/consulting';
import ConsultingProgramTemplate from 'templates/ConsultingProgramTemplate/ConsultingProgramTemplate';
import { tempConsultingList } from 'common/constants/TempData';

const ConsultingProgram: React.FC = () => {
  const {
    params: { programid },
  } = useRouteMatch<{ programid: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const consulting = useSelector((state: RootState) => state.consultingReducer);

  const findConsulting = (id: string): Consulting | undefined => {
    const result = tempConsultingList.find(_consulting => id === _consulting.id);
    if (!result) {
      return undefined;
    }

    return {
      id: result.id,
      title: result.title,
      consultant: result.consultant,
    };
  };

  useEffect(() => {
    const currentConsulting = findConsulting(programid);
    if (!currentConsulting) {
      alert('잘못된 경로의 접근입니다');
      history.goBack();
    } else {
      dispatch(updateConsulting(currentConsulting));
    }
  }, [programid, history, dispatch]);

  return <ConsultingProgramTemplate consulting={consulting} />;
};

export default ConsultingProgram;
