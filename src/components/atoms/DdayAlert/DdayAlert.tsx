import React, { ReactNode } from 'react';
import { StyledDdayAlert } from './DdayAlert.styled';

interface Props {
  children?: ReactNode;
}

const DdayAlert: React.FC<Props> = ({ children }) => {
  return <StyledDdayAlert>{children}</StyledDdayAlert>;
};

export default React.memo(DdayAlert);
