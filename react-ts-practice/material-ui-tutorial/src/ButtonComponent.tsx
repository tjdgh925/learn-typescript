import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const ButtonComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.margin}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.margin}>
        Disabled
      </Button>
      <Typography variant="h1">hello</Typography>
    </div>
  );
};

export default ButtonComponent;
