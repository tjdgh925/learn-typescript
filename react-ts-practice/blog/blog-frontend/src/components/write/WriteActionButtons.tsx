import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { postState } from '../../types/types';
import { writePost } from '../../modules/posts';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: 100,
      paddingTop: theme.spacing(3),
    },
    button: {
      height: '3rem',
      marginLeft: theme.spacing(1),
    },
  })
);

const WriteActionButtons = () => {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const postState: postState = useTypedSelector((state) => state.post);
  let post = postState.success;
  const title = postState.data.title;
  const body = postState.data.body;
  const tags = postState.data.tags;
  const error = postState.error;

  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      })
    );
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post !== null) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (error) {
      console.log(error);
    }
  }, [post, history, error]);
  return (
    <Box className={classes.container}>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={onPublish}
      >
        포스트 등록
      </Button>
      <Button className={classes.button} variant="contained" onClick={onCancel}>
        포스트 취소
      </Button>
    </Box>
  );
};

export default WriteActionButtons;
