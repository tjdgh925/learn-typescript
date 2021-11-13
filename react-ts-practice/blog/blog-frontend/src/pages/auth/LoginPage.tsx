import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import LoginHeader from '../../components/common/AuthHeader';
import LoginForm from '../../components/auth/Login/LoginForm';
import LoginFooter from '../../components/auth/Login/LoginFooter';
import LoginButtons from '../../components/auth/Login/LoginButtons';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginData } from '../../types/types';
import { login } from '../../modules/auth';
import { useHistory, withRouter } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
    },
    card: {
      marginTop: theme.spacing(10),
      border: 'none',
      boxShadow: 'none',
    },
  })
);

const LoginPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let history = useHistory();

  const LoginPageState = useTypedSelector((state) => state.auth);
  const error = LoginPageState.error;
  const auth = LoginPageState.auth;
  const [loginInfo, setLoginInfo] = useState<loginData>({
    username: '',
    password: '',
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setLoginInfo({
        ...loginInfo,
        [name]: value,
      });
      console.log(loginInfo);
    },
    [loginInfo]
  );

  const onSubmit = () => {
    console.log(loginInfo);
    dispatch(login(loginInfo));
  };

  useEffect(() => {
    if (auth) {
      history.push({
        pathname: '/',
        state: { username: loginInfo.username },
      });
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
    <Container className={classes.container}>
      <Card className={classes.card}>
        <LoginHeader />
        <LoginForm onChange={onChange} loginData={loginInfo} />
        <LoginFooter />
        <LoginButtons onSubmit={onSubmit} />
      </Card>
    </Container>
  );
};

export default withRouter(LoginPage);
