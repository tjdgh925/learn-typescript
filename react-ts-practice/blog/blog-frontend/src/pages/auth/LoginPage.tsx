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

interface LoginPageProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      background: '#c2c2c2',
      textAlign: 'center',
      width: '100vw',
      height: '100vh',
      margin: `${theme.spacing(0)} auto`,
    },
    card: {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
    },
    title: {
      color: 'blue',
    },
    form: {
      margin: theme.spacing(3),
    },
    authFindContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing(3),
    },
  })
);

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Typography variant="h2" className={classes.title}>
          CO-CO-BOB
        </Typography>
        <form
          className={classes.form}
          id="login"
          placeholder="Email"
          autoComplete="off"
        >
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            type="email"
          />
          <TextField
            fullWidth
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
        <Container className={classes.authFindContainer}>
          <FormControlLabel control={<Checkbox />} label="아이디 저장" />
          <ButtonGroup variant="text">
            <Button>아이디 찾기</Button>
            <Button>비밀번호 찾기</Button>
          </ButtonGroup>
        </Container>
        <ButtonGroup fullWidth={true} orientation="vertical">
          <Button type="submit" form="login">
            로그인
          </Button>
          <Button fullWidth={true}>회원가입</Button>
        </ButtonGroup>
      </Card>
    </Container>
  );
};

export default LoginPage;
