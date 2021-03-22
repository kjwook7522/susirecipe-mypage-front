import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Index from 'pages/Index';
import EditProfile from 'pages/EditProfile';
import Scedule from 'pages/Schedule';
import PayManage from 'pages/PayManage';
import MainLayout from 'layouts/MainLayout/MainLayout';
import Consulting from 'pages/consulting/Consulting';
import ConsultingProgram from 'pages/consulting/ConsultingProgram';
import FAQ from 'pages/FAQ';

const AppRouter: React.FC = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/consulting/:programid">
          <ConsultingProgram />
        </Route>
        <Route path="/consulting">
          <Consulting />
        </Route>
        <Route path="/paymanage">
          <PayManage />
        </Route>
        <Route path="/schedule">
          <Scedule />
        </Route>
        <Route path="/editprofile">
          <EditProfile />
        </Route>
        <Route exact path="/">
          <Index />
        </Route>
        <Redirect to="/" />
      </Switch>
    </MainLayout>
  </Router>
);

export default AppRouter;
