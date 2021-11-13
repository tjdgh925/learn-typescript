import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(3),
    },
  })
);

const RegisterHeader = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.header} variant="h5">
      계정 정보를 입력해주세요.
    </Typography>
  );
};

export default RegisterHeader;
