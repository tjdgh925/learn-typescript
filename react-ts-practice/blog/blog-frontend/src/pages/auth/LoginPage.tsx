import AuthHeader from '../../components/common/AuthHeader';
import LoginForm from '../../components/auth/Login/LoginForm';
import LoginFooter from '../../components/auth/Login/LoginFooter';
import LoginButtons from '../../components/auth/Login/LoginButtons';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginData } from '../../types/types';
import { login } from '../../modules/auth';
import { useHistory, withRouter } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styled from 'styled-components';

const LoginBlock = styled.div`
  position: absolute;
  left: 0;
  top: 8%;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
  width: 400px;
  background: white;
  border: #e3e3e3 2px solid;
  padding: 3rem 7rem 5rem 7rem;
  text-align: center;
  border-radius: 20px;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
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
  }, [auth, error, history, LoginPageState, loginInfo.username]);

  return (
    <LoginBlock>
      <LoginBox>
        <AuthHeader />
        <LoginForm onChange={onChange} loginData={loginInfo} />
        <LoginFooter />
        <LoginButtons onSubmit={onSubmit} />
      </LoginBox>
    </LoginBlock>
  );
};

export default withRouter(LoginPage);
