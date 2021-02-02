import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from 'pages/Index';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
