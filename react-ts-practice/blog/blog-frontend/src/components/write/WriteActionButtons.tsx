import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface WriteActionButtonProps {
  onCancel: () => void;
  onPublish: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: 100,
      paddingTop: theme.spacing(3),
    },
    button: {
      height: '3rem',
      marginLeft: theme.spacing(1),
    },
  })
);

const WriteActionButtons = (
  {
    /*{ onCancel, onPublish }: WriteActionButtonProps*/
  }
) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"

        // onClick={onPublish}
      >
        포스트 등록
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        // onClick={onCancel}
      >
        포스트 취소
      </Button>
    </Box>
  );
};

export default WriteActionButtons;
