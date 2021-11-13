import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { logout } from '../../modules/auth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContainer: {
      display: 'flex',
      position: 'fixed',
      width: '100%',
      borderBottom: '1px solid red',
      height: '4rem',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    spacer: {
      height: '4rem',
    },
    right: {
      display: 'flex',
      alignItems: 'center',
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const LoginPageState = useTypedSelector((state) => state.auth);
  const data = LoginPageState.data;
  const auth = LoginPageState.auth;
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Box className={classes.headerContainer}>
        <Link to="/">COCO-BOB</Link>
        {auth ? (
          <div className={classes.right}>
            <Typography>{data && data.username}</Typography>
            <Button onClick={onLogout}>Logout</Button>
          </div>
        ) : (
          <Link to="/login">login</Link>
        )}
      </Box>
      <Box className={classes.spacer} />
    </>
  );
};

export default Header;
