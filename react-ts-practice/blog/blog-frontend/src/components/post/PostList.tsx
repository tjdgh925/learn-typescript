import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
    },
    btn: {
      alignSelf: 'end',
    },
  })
);
const PostList = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Button className={classes.btn} variant={'contained'}>
        새 글 작성하기
      </Button>
    </Box>
  );
};

export default PostList;