import { useHistory, Link } from 'react-router-dom';
import clsx from 'clsx';
import { useState, useCallback, FormEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { loginData, loginState } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { login } from '../../modules/auth';
import ErrorMessage from '../../components/auth/ErrorMessage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    card: {
      marginTop: theme.spacing(10),
      border: 'none',
      boxShadow: 'none',
    },
    title: {
      color: 'blue',
      marginBottom: theme.spacing(8),
    },
    form: {},
    authFindContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(1),
    },
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

const LoginPage = () => {
  const classes = useStyles();
  const LoginPageState: loginState = useTypedSelector((state) => state.auth);
  const error = LoginPageState.error;
  const auth = LoginPageState.auth;

  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState<loginData>({
    username: '',
    password: '',
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    dispatch(login(loginInfo));
  };

  let history = useHistory();

  useEffect(() => {
    if (auth) {
      console.log('성공');
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
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setLoginInfo({
        ...loginInfo,
        [name]: value,
      });
    },
    [loginInfo]
  );
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Typography variant="h2" className={classes.title}>
          CO-CO-BOB
        </Typography>
        <Container className={classes.form}>
          <form
            id="login"
            placeholder="Email"
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <TextField
              name="username"
              value={loginInfo.username}
              onChange={onChange}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="password"
              value={loginInfo.password}
              onChange={onChange}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              type="password"
            />
          </form>
          {error.error?.message !== undefined && (
            <ErrorMessage>{'로 그 인 실 패 !'}</ErrorMessage>
          )}
          <Box className={classes.authFindContainer}>
            <FormControlLabel control={<Checkbox />} label="아이디 저장" />
            <ButtonGroup variant="text">
              <Button> 아이디 찾기 </Button>
              <Button> 비밀번호 찾기 </Button>
            </ButtonGroup>
          </Box>
          <Button
            type="submit"
            form="login"
            className={clsx(classes.button, classes.buttonLogin)}
            fullWidth
          >
            로그인
          </Button>
          <Link to="/register">
            <Button
              fullWidth
              className={clsx(classes.button, classes.buttonSignUp)}
              onClick={() => console.log(loginInfo)}
            >
              회원가입
            </Button>
          </Link>
        </Container>
      </Card>
    </Container>
  );
};

export default LoginPage;
