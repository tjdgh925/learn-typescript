import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { logout } from '../../modules/auth';
import Button from './Button';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const HeaderTab = () => {
  const LoginPageState = useTypedSelector((state) => state.auth);
  const data = LoginPageState.data;
  const auth = LoginPageState.auth;
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            CoCoBob-Test
          </Link>
          {auth ? (
            <div className="right">
              <UserInfo>{data && data.username}</UserInfo>
              <Button
                fullWidth
                color={'white'}
                fontColor={'black'}
                onClick={onLogout}
              >
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="right">
              <Link to="/login">
                <Button fullWidth color={'white'} fontColor={'black'}>
                  로그인
                </Button>
              </Link>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default HeaderTab;
