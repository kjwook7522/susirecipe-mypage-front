import React, { ReactNode } from 'react';
import { StyledDdayAlert } from './DdayAlert.styled';

interface Props {
  targetDate?: Date;
  children?: ReactNode;
}

const DdayAlert: React.FC<Props> = ({ children, targetDate }: Props) => {
  const today = new Date();

  const calcDday = (_today: Date, target?: Date): string => {
    if (!target) {
      return '';
    }

    const todayTime = _today.getTime();
    const targetTime = target.getTime();

    const gap = targetTime - todayTime;
    const result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1 - 1;

    if (result < 0) {
      return result.toString();
    }
    if (result === 0) {
      return '-DAY';
    }

    return `+${result.toString()}`;
  };

  return (
    <StyledDdayAlert>
      <p>{children}</p>
      <p>D{calcDday(today, targetDate)}</p>
    </StyledDdayAlert>
  );
};

export default React.memo(DdayAlert);
