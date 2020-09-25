import React, { ReactNode } from 'react';
import './ContentWrapper.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  circular: {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(-50, -50)',
  },
}));

interface Props {
  isLoading?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}

export const ContentWrapper: React.FC<Props> = ({
  isLoading,
  error,
  children,
  className,
}) => {
  const classes = useStyles();

  if (isLoading) {
    return <CircularProgress className={classes.circular} />;
  }

  if (error) {
    return (
      <div className="container error">
        <h4>{error}</h4>
      </div>
    );
  }

  return <div className={`container ${className}`}>{children}</div>;
};
