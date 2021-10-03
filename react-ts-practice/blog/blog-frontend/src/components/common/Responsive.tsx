import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    responsive: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      height: '80vh',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),

      margin: `${theme.spacing(0)} auto`,
    },
    PC: {
      width: '768px',
    },
    Mobile: {
      width: '100%',
    },
  })
);
interface ResponsiveProps {
  children: React.ReactNode;
}

const Responsive = ({ children }: ResponsiveProps) => {
  const matches = useMediaQuery('(min-width: 1024px)');
  const classes = useStyles();

  return (
    <Box
      className={clsx(
        classes.responsive,
        matches ? classes.PC : classes.Mobile
      )}
    >
      {children}
    </Box>
  );
};

export default Responsive;
