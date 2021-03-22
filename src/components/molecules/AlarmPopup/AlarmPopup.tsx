import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { StyledAlarmList, StyledAlarmPopup, StyledMoreWrapper, StyledTitle } from './AlarmPopup.styled';

interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  clickRef?: React.RefObject<any>;
}

const AlarmPopup: React.FC<Props> = ({ clickRef, ...props }: Props) => {
  const [activeMore, setActiveMore] = useState(false);

  return (
    <StyledAlarmPopup ref={clickRef} {...props}>
      <StyledTitle>전체 알림</StyledTitle>
      <StyledAlarmList active={activeMore}>
        <li>
          <span>6개 합격 시 추가 할인asdasdasdasdsadasdasdsadasdsadsadasdas</span>
        </li>
        <li>
          <span>수시레시피 학생 의무 교육</span>
        </li>
        <li>
          <span>수시레시피만의 특별한 이벤트</span>
        </li>
        <li>
          <span>6개 합격 시 추가 할인asdasdasdasdsadasdasdsadasdsadsadasdas</span>
        </li>
        <li>
          <span>수시레시피 학생 의무 교육</span>
        </li>
        <li>
          <span>수시레시피만의 특별한 이벤트</span>
        </li>
        <li>
          <span />
        </li>
        <li>
          <span />
        </li>
        <li>
          <span />
        </li>
      </StyledAlarmList>
      <StyledMoreWrapper onClick={() => setActiveMore(prev => !prev)}>
        <FiChevronUp display={activeMore ? 'inline' : 'none'} />
        <FiChevronDown display={activeMore ? 'none' : 'inline'} />
      </StyledMoreWrapper>
    </StyledAlarmPopup>
  );
};

export default AlarmPopup;
