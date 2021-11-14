import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { signUpData } from '../../../types/types';
import styled from 'styled-components';

const RegisterFormBlock = styled.div`
  h3 {
    margin: 0;
    color: red;
    padding-bottom: 4rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1.5px solid black;
  outline: none;
  width: 90%;
  padding: 1rem;

  line &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid blue;
  }
  :placeholder {
    margin-left: 30px;
  }
  & + & {
    margin-top: 1.5rem;
  }
`;
const Spacer = styled.div`
  padding: 1.5rem;
`;

const PasswordError = styled.div`
  h4 {
    color: red;
  }
`;

const BirthGenderBlock = styled.div`
  display: flex;
`;

const RadioContainer = styled.div`
  display: flex;
  border: #e3e3e3 2px solid;
  border-radius: 10px;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;
  width: 50%;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 700;
    padding-right: 10px;
  }
`;

const Label = styled.label`
  width: 40px;
`;

const RadioButton = styled.input.attrs({
  type: 'radio',
})``;

interface RegisterFormProps {
  signUpInfo: signUpData;
  passwordConfirm: string;
  birthday: Date | null;
  setBirthday: (birthday: Date | null) => void;
  onChange: (e: any) => void;
  checkPassword: (passwordConfirm: string) => boolean;
}
const RegisterForm = ({
  signUpInfo,
  passwordConfirm,
  onChange,
  checkPassword,
  birthday,
  setBirthday,
}: RegisterFormProps) => {
  return (
    <RegisterFormBlock>
      <h3> 계정 정보를 입력해주세요.</h3>
      <form id="register" autoComplete="off">
        <StyledInput
          placeholder="이메일 입력"
          name="email"
          value={signUpInfo.username}
          onChange={onChange}
        />
        <Spacer />
        <StyledInput
          placeholder="비밀번호 입력"
          name="password"
          value={signUpInfo.password}
          onChange={onChange}
          type="password"
        />
        <StyledInput
          placeholder="비밀번호 재입력"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange}
          type="password"
        />
        {checkPassword(passwordConfirm) && passwordConfirm !== '' ? (
          <PasswordError>
            <h4>비밀번호 불일치!</h4>
          </PasswordError>
        ) : (
          <Spacer />
        )}
        <BirthGenderBlock>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="생일"
              value={birthday}
              onChange={(date) => {
                setBirthday(date);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <RadioContainer>
            <span>성별</span>
            <Label>남자</Label>
            <RadioButton value="male" name="sex" onChange={onChange} />
            <Label>여자</Label>
            <RadioButton value="female" name="sex" onChange={onChange} />
          </RadioContainer>
        </BirthGenderBlock>
      </form>
    </RegisterFormBlock>
  );
};

export default RegisterForm;
