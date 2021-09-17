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
import { signUpData, signUpState } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { register } from '../../modules/auth/signUp';

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
    title: {
      color: 'blue',
      marginBottom: theme.spacing(8),
    },
    card: {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      border: 'none',
      boxShadow: 'none',
    },
  })
);

const RegisterPage = () => {
  const classes = useStyles();
  const SignUpPageState: signUpState = useTypedSelector(
    (state) => state.singUp
  );
  const data = SignUpPageState.data;
  const error = SignUpPageState.error;
  const auth = SignUpPageState.auth;
  const dispatch = useDispatch();
  const [signUpInfo, setSignUpInfo] = useState<signUpData>({
    username: '',
    password: '',
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(signUpInfo));
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
      setSignUpInfo({
        ...signUpInfo,
        [name]: value,
      });
    },
    [signUpInfo]
  );
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Typography variant="h2" className={classes.title}>
          CO-CO-BOB
        </Typography>
        <Container>
          <form
            id="login"
            placeholder="Email"
            autoComplete="off"
            // onSubmit={onSubmit}
          >
            <TextField
              name="username"
              value={signUpInfo.username}
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
              value={signUpInfo.password}
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
          <Container maxWidth="xl">
            <FormControlLabel control={<Checkbox />} label="아이디 저장" />
            <ButtonGroup variant="text">
              <Button> 아이디 찾기 </Button>
              <Button> 비밀번호 찾기 </Button>
            </ButtonGroup>
          </Container>
          <Button type="submit" form="login" fullWidth>
            로그인
          </Button>
          <Button fullWidth onClick={() => console.log(signUpInfo)}>
            회원가입
          </Button>
        </Container>
      </Card>
    </Container>
  );
};

export default RegisterPage;
