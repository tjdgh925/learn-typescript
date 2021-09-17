import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useState, useCallback, FormEvent, useEffect } from 'react';
import { loginData, loginState } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { login } from '../../modules/auth/login';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      textAlign: 'center',
      justifyContent: 'center',
      minWidth: '750px',
      width: '50%',
      height: '80vh',
      margin: `${theme.spacing(0)} auto`,
    },
    card: {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
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
      marginTop: theme.spacing(2),
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
  const LoginPageState: loginState = useTypedSelector((state) => state.login);
  const data = LoginPageState.data;
  const error = LoginPageState.error;
  const auth = LoginPageState.auth;
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState<loginData>({
    username: '',
    password: '',
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(loginInfo));
  };

  useEffect(() => {
    if (auth) {
      console.log('성공');
      console.log(data);
      console.log(error);
    }
    if (error !== null) {
      alert('실패!');
      console.log(error);
      return;
    }
  }, [auth, error]);
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
          <Container className={classes.authFindContainer} maxWidth="xl">
            <FormControlLabel control={<Checkbox />} label="아이디 저장" />
            <ButtonGroup variant="text">
              <Button> 아이디 찾기 </Button>
              <Button> 비밀번호 찾기 </Button>
            </ButtonGroup>
          </Container>
          <Button
            type="submit"
            form="login"
            className={clsx(classes.button, classes.buttonLogin)}
            fullWidth
          >
            로그인
          </Button>
          <Button
            fullWidth
            className={clsx(classes.button, classes.buttonSignUp)}
            onClick={() => console.log(loginInfo)}
          >
            회원가입
          </Button>
        </Container>
      </Card>
    </Container>
  );
};

export default LoginPage;
