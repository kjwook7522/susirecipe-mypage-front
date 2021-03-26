import React from 'react';
import { DdayList } from '@objects';
import DdayAlert from 'components/atoms/DdayAlert/DdayAlert';
import { StyledDdayBoard } from './DdayBoard.styled';

interface Props {
  ddayList: DdayList;
}

// ** 현재 DdayBoard는 DdayAlert를 3개만 받습니다 (이상으로 받을 경우 깨집니다) ** //

const DdayBoard: React.FC<Props> = ({ ddayList }: Props) => (
  <StyledDdayBoard>
    {ddayList.map(dday => (
      <div key={dday.id} className="dday-box">
        <DdayAlert targetDate={dday.targetDate}>{dday.name}</DdayAlert>
      </div>
    ))}
  </StyledDdayBoard>
);

export default DdayBoard;
