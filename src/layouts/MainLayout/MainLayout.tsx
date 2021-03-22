import React from 'react';
import Header from 'components/organisms/Header/Header';
import MainNavigation from 'components/organisms/MainNavigation/MainNavigation';
import QuickNavigation from 'components/organisms/QuickNavigation/QuickNavigation';
import { StyledContent } from './MainLayout.styled';

interface Props {
  children?: React.ReactNode;
}

const MainLayout: React.FC = ({ children }: Props) => (
  <>
    <Header />
    <MainNavigation />
    <QuickNavigation />
    <StyledContent>{children}</StyledContent>
  </>
);

export default MainLayout;
