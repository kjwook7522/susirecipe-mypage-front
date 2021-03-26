import React from 'react';
import { StyledEmptyLayout } from './EmptyLayout.styled';

interface Props {
  children?: React.ReactNode;
}

const EmptyLayout: React.FC<Props> = ({ children }: Props) => <StyledEmptyLayout>{children}</StyledEmptyLayout>;

export default EmptyLayout;
