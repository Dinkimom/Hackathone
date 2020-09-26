import { RootState } from 'app/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { isAuthorized } = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthorized ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
