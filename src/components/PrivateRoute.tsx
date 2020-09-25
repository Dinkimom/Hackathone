import { RootState } from 'app/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { isChecked, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isChecked) {
      // todo here will be auth token check
    }
  }, [isChecked]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isChecked && user === null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
