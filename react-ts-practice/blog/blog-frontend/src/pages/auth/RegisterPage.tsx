import { RouteComponentProps } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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
      justifyContent: 'center',
      minWidth: '750px',
      width: '50%',
      height: '80vh',
      margin: `${theme.spacing(0)} auto`,
    },
    title: {
      color: 'blue',
      alignSelf: 'center',
    },
    card: {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      border: '1px solid black',
      boxShadow: 'none',
    },
    cardTitle: {
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(3),
    },
    textInput: {
      paddingBottom: theme.spacing(2),
    },
    passwordBox: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    buttonSignUp: {
      color: 'white',
      height: 50,
      fontSize: 25,
      backgroundColor: '#6E6B6F',
    },
  })
);
// interface RegisterPageProps {
//   history: RouteComponentProps
// }
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

  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const checkPassword = (passwordConfirm: string): boolean => {
    if (passwordConfirm === signUpInfo.password) return false;
    else return true;
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    // // const email = signUpInfo.username + '@catholic.ac.kr';
    // console.log(signUpInfo.username + '@catholic.ac.kr');
    dispatch(
      register(
        signUpInfo
        // username: signUpInfo.username,
        // // + '@catholic.ac.kr',
        // password: signUpInfo.password,
      )
    );
  };

  useEffect(() => {
    if (auth) {
      console.log('성공');
      console.log(data);
      console.log(error);
    }
    if (error !== null) {
      if (error.error?.message !== undefined) alert(error.error?.message);
      console.log(error);
      return;
    }
  }, [auth, error]);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      if (name === 'passwordConfirm') {
        setPasswordConfirm(value);
      }
      setSignUpInfo({
        ...signUpInfo,
        [name]: value,
      });
    },
    [signUpInfo, passwordConfirm]
  );
  return (
    <Container className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        CO-CO-BOB
      </Typography>
      <Card className={classes.card} variant={'outlined'}>
        <Typography className={classes.cardTitle} variant="h5">
          계정 정보를 입력해주세요.
        </Typography>
        <Container>
          <form
            id="register"
            autoComplete="off"
            onSubmit={onSubmit}
            // onSubmit={onSubmit}
          >
            <TextField
              placeholder="이메일 입력"
              name="username"
              label="학교 이메일"
              value={signUpInfo.username}
              onChange={onChange}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              helperText="@catholic.ac.kr을 제외한 학교 웹메일 아이디를 적어주세요."
              className={classes.textInput}
            />
            <Box className={classes.passwordBox}>
              <TextField
                placeholder="비밀번호 입력"
                name="password"
                value={signUpInfo.password}
                onChange={onChange}
                fullWidth
                type="password"
                className={classes.textInput}
              />

              <TextField
                error={checkPassword(passwordConfirm)}
                placeholder="비밀번호 재입력"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={onChange}
                fullWidth
                type="password"
                className={classes.textInput}
                helperText={
                  checkPassword(passwordConfirm)
                    ? '입력한 비밀번호와 일치하지 않습니다.'
                    : null
                }
              />
            </Box>
          </form>
          <Button
            type="submit"
            form="register"
            fullWidth
            className={classes.buttonSignUp}
          >
            회원가입
          </Button>
        </Container>
      </Card>
    </Container>
  );
};

export default RegisterPage;
