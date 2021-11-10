import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import LoginHeader from '../../components/auth/LoginHeader';
import LoginForm from '../../components/auth/LoginForm';
import LoginFooter from '../../components/auth/LoginFooter';
import LoginButtons from '../../components/auth/LoginButtons';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginData } from '../../types/types';
import { login } from '../../modules/auth';

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

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(loginInfo);
    dispatch(login(loginInfo));
  };

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

export default LoginPage;
