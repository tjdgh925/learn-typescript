import Button from '@material-ui/core/Button';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox';

import Box from '@material-ui/core/Box';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    authFindContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(1),
    },
  })
);
const LoginFooter = () => {
  const classes = useStyles();
  return (
    <Box className={classes.authFindContainer}>
      <FormControlLabel control={<Checkbox />} label="아이디 저장" />
      <ButtonGroup variant="text">
        <Button> 아이디 찾기 </Button>
        <Button> 비밀번호 찾기 </Button>
      </ButtonGroup>
    </Box>
  );
};

export default LoginFooter;
