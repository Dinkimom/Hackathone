import { PageWrapper } from 'components/PageWrapper';
import { PrivateRoute } from 'components/PrivateRoute';
import { Auth } from 'features/auth/auth';
import { Course } from 'features/course/course';
import { Courses } from 'features/courses/courses';
import { Home } from 'features/home/home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export const App: React.FC = () => {
  return (
    <PageWrapper>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Auth} />
          <PrivateRoute exact path="/course" component={Course} />
          <Route exact path="/courses" component={Courses} />
        </Switch>
      </Router>

      <Auth />
    </PageWrapper>
  );
};

export default App;
