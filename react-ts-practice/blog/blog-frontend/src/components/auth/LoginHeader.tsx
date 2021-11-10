import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      color: 'blue',
      marginBottom: theme.spacing(8),
    },
  })
);

const LoginHeader = () => {
  const classes = useStyles();

  return (
    <Link to="/">
      <Typography variant="h2" className={classes.header}>
        CO-CO-BOB
      </Typography>
    </Link>
  );
};

export default LoginHeader;
