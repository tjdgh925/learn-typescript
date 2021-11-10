import { useHistory, Link } from 'react-router-dom';
import clsx from 'clsx';
import { useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { loginState } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface LoginButtonsProps {
  onSubmit: (e: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: 'white',
      height: 50,
      fontSize: 25,
    },
    buttonLogin: {
      marginTop: theme.spacing(2),
      backgroundColor: '#95519B',
      marginBottom: theme.spacing(1),
    },
    buttonSignUp: {
      backgroundColor: '#6E6B6F',
    },
  })
);
const LoginButtons = ({ onSubmit }: LoginButtonsProps) => {
  const classes = useStyles();

  const LoginPageState: loginState = useTypedSelector((state) => state.auth);
  const error = LoginPageState.error;
  const auth = LoginPageState.auth;

  let history = useHistory();

  useEffect(() => {
    if (auth) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(LoginPageState.data));
      } catch (e) {
        console.log('local Storage not working');
      }
    }
    if (error !== null) {
      console.log(error);
      return;
    }
  }, [auth, error, history, LoginPageState]);

  return (
    <Box>
      <Button
        onClick={onSubmit}
        className={clsx(classes.button, classes.buttonLogin)}
        fullWidth
      >
        로그인
      </Button>

      <Link to="/register">
        <Button
          fullWidth
          className={clsx(classes.button, classes.buttonSignUp)}
        >
          회원가입
        </Button>
      </Link>
    </Box>
  );
};

export default LoginButtons;
