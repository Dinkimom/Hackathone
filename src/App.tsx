import { PageWrapper } from 'components/PageWrapper';
import { PrivateRoute } from 'components/PrivateRoute';
import { Auth } from 'features/auth/auth';
import { Course } from 'features/course/course';
import { Courses } from 'features/courses/courses';
import { CreateCourse } from 'features/createCourse/createCourse';
import { Home } from 'features/home/home';
import { Payment } from 'features/payment/payment';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteAuthToken } from 'services/token';
import './App.css';

export const App: React.FC = () => {
  useEffect(() => {
    deleteAuthToken();
  }, []);

  return (
    <Router>
      <PageWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Auth} />
          <Route exact path="/course" component={Course} />
          <Route exact path="/courses" component={Courses} />
          <PrivateRoute exact path="/courses/my" component={Courses} />
        </Switch>

        <Auth />
        <Payment />
        <CreateCourse />
      </PageWrapper>
      <ToastContainer />
    </Router>
  );
};

export default App;
