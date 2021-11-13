import Button from '@material-ui/core/Button';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface RegisterButtonProps {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: 'white',
      height: 50,
      fontSize: 25,
      backgroundColor: '#6E6B6F',
    },
  })
);

const RegisterButton = ({ onSubmit }: RegisterButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      onClick={onSubmit}
      form="register"
      fullWidth
      className={classes.button}
    >
      회원가입
    </Button>
  );
};

export default RegisterButton;
