import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { postState } from '../../types/types';
import { writePost } from '../../modules/posts';

import Button from '../../components/common/Button';
import Box from '@material-ui/core/Box';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ButtonBlock = styled.div`
  width: 90%;
  justify-content: end;
  margin-top: 2rem;
  display: flex;
  Button + Button {
    margin-left: 1rem;
  }
`;

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
  let history = useHistory();
  const dispatch = useDispatch();
  const postState: postState = useTypedSelector((state) => state.post);
  let post = postState.success;
  const title = postState.data.title;
  const body = postState.data.body;
  const tags = postState.data.tags;
  const error = postState.error;

  async function onPublish() {
    var user = JSON.parse(localStorage.getItem('user') || '');
    const date = new Date().toLocaleDateString();
    console.log(user.username);
    const response = await axios.post('/api/boards', {
      title: title,
      username: user.username,
      contents: body,
      tag: tags.toString(),
      deadline: date,
    });
    console.log(response);
    dispatch(
      writePost({
        title,
        body,
        tags,
      })
    );
  }

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post !== null) {
      const { _id, user } = post;
      history.push(`/`);
    }
    if (error) {
      console.log(error);
    }
  }, [post, history, error]);
  return (
    <ButtonBlock>
      <Button onClick={onPublish}>포스트 등록</Button>
      <Button onClick={onCancel}>포스트 취소</Button>
    </ButtonBlock>
  );
};

export default withRouter(WriteActionButtons);
