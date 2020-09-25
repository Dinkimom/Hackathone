import { PrivateRoute } from 'components/PrivateRoute';
import { Auth } from 'features/auth/auth';
import { Home } from 'features/home/home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Auth} />
        <PrivateRoute exact path="/course" component={Auth} />
        <PrivateRoute exact path="/courses" component={Auth} />
        <PrivateRoute exact path="/login" component={Auth} />
        <PrivateRoute exact path="/login" component={Auth} />
      </Switch>
    </Router>
  );
};

export default App;
