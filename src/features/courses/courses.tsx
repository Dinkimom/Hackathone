import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import './courses.css';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginBottom: 20,
  },
}));

export const Courses: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="courses container">
      <h1>Курсы</h1>
      <div className="courses__main">
        <div className="courses__main__filters">
          <FormControl variant="outlined" className={classes.formControl}>
            <Select>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="courses__main__list"></div>
      </div>
    </div>
  );
};
