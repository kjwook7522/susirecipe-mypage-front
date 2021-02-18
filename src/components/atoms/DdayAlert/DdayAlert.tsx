import React from 'react';
import { StyledDdayAlert } from './DdayAlert.styled';

const DdayAlert: React.FC = ({ children }) => {
  return <StyledDdayAlert>{children}</StyledDdayAlert>;
};

export default React.memo(DdayAlert);
