import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
      <Link to="write">
        <Button className={classes.btn} variant={'contained'}>
          새 글 작성하기
        </Button>
      </Link>
    </Box>
  );
};
export default PostList;
