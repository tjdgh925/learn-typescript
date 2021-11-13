import Container from '@material-ui/core/Container';

import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';

import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

import { loginData } from '../../../types/types';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ErrorMessage from '../../common/ErrorMessage';
interface LoginFormProps {
  onChange: (e: any) => void;
  loginData: loginData;
}

const LoginForm = ({ onChange, loginData }: LoginFormProps) => {
  const LoginPageState = useTypedSelector((state) => state.auth);
  const error = LoginPageState.error;

  return (
    <Container>
      <form id="login" placeholder="Email" autoComplete="off">
        <TextField
          name="username"
          value={loginData.username}
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
          value={loginData.password}
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
    </Container>
  );
};

export default LoginForm;
