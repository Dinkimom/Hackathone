import { PageWrapper } from 'components/PageWrapper';
import { PrivateRoute } from 'components/PrivateRoute';
import { Auth } from 'features/auth/auth';
import { Course } from 'features/course/course';
import { Courses } from 'features/courses/courses';
import { CreateCourse } from 'features/createCourse/createCourse';
import { Home } from 'features/home/home';
import { Payment } from 'features/payment/payment';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export const App: React.FC = () => {
  return (
    <Router>
      <PageWrapper>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Auth} />
          <PrivateRoute exact path="/course" component={Course} />
          <Route exact path="/courses" component={Courses} />
        </Switch>

        <Auth />
        <Payment />
        <CreateCourse />
      </PageWrapper>
    </Router>
  );
};

export default App;
