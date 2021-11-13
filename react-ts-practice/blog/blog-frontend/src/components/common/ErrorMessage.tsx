import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    errorMsg: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      color: 'red',
      textAlign: 'center',
    },
  })
);

interface Props {
  children: React.ReactChild;
}

const ErrorMessage = ({ children }: Props) => {
  const classes = useStyles();
  return <Typography className={classes.errorMsg}>{children}</Typography>;
};

export default ErrorMessage;
