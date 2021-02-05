import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Index from 'pages/Index';
import EditProfile from 'pages/EditProfile';
import Scedule from 'pages/Scedule';
import PayManage from 'pages/PayManage';
import MainLayout from 'layouts/MainLayout/MainLayout';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/paymanage">
            <PayManage />
          </Route>
          <Route path="/scedule">
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
};

export default AppRouter;
