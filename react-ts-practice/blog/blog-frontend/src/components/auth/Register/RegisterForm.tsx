import TextField from '@mui/material/TextField';
import Box from '@material-ui/core/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DatePicker from '@mui/lab/DatePicker';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { signUpData } from '../../../types/types';

interface RegisterFormProps {
  signUpInfo: signUpData;
  passwordConfirm: string;
  birthday: Date | null;
  setBirthday: (birthday: Date | null) => void;
  onChange: (e: any) => void;
  checkPassword: (passwordConfirm: string) => boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textInput: {
      paddingBottom: theme.spacing(2),
    },
    passwordBox: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    birthGender: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: theme.spacing(3),
    },
    genderLabel: {
      paddingLeft: theme.spacing(1),
      textAlign: 'left',
    },
  })
);

const RegisterForm = ({
  signUpInfo,
  passwordConfirm,
  onChange,
  checkPassword,
  birthday,
  setBirthday,
}: RegisterFormProps) => {
  const classes = useStyles();

  return (
    <form id="register" autoComplete="off">
      <TextField
        placeholder="이메일 입력"
        name="email"
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
          error={checkPassword(passwordConfirm) && passwordConfirm !== ''}
          placeholder="비밀번호 재입력"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange}
          fullWidth
          type="password"
          className={classes.textInput}
          helperText={
            checkPassword(passwordConfirm) && passwordConfirm !== ''
              ? '입력한 비밀번호와 일치하지 않습니다.'
              : null
          }
        />
      </Box>

      <Box className={classes.birthGender}>
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

        <FormControl component="fieldset">
          <FormLabel className={classes.genderLabel} component="legend">
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-label="sex"
            name="sex"
            value={signUpInfo.sex}
            onChange={onChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </Box>
    </form>
  );
};

export default RegisterForm;
