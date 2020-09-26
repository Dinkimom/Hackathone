import { RootState } from 'app/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';

export const PrivateRoute = ({ ...props }: RouteProps) => {
  const { isAuthorized } = useSelector((state: RootState) => state.auth);
  console.log(isAuthorized);

  if (!isAuthorized) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }

  return <Route {...props} />;
};
