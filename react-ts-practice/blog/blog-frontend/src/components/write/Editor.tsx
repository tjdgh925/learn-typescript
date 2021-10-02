import { useRef, useMemo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { postData } from '../../types/types';
import { initialize, updatePost } from '../../modules/posts';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(3),
      width: '100%',
      justifyContent: 'center',
    },
    titleInput: {
      outline: 'none',
      paddingBottom: theme.spacing(1),
      border: 'none',
      marginBottom: theme.spacing(3),
    },
    quillStyle: {
      padding: 0,
      minHeight: '320px',
      lineHeight: '200%',
    },
  })
);

const Editor = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const QuillRef = useRef<ReactQuill>();

  const postState: postData = useTypedSelector((state) => state.post.data);
  const title = postState.title;
  const body = postState.body;
  const tags = postState.tags;

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            { align: [] },
          ],
          ['image', 'video'],
        ],
      },
    }),
    []
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  const changeTitle = useCallback(
    (e) => {
      const { name, value } = e.target;
      dispatch(
        updatePost({
          title: value,
          body: body,
          tags: tags,
        })
      );
    },
    [body, tags]
  );

  const changeBody = useCallback(
    (e) => {
      dispatch(
        updatePost({
          title: title,
          body: e,
          tags: tags,
        })
      );
    },
    [title, tags]
  );

  return (
    <Box className={classes.container}>
      <TextField
        name={'title'}
        className={classes.titleInput}
        fullWidth={true}
        placeholder={'제목을 입력하세요'}
        inputProps={{ style: { fontSize: '3rem' } }}
        value={title}
        onChange={changeTitle}
      />
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={body}
        onChange={changeBody}
        modules={modules}
        theme="bubble"
        placeholder="내용을 입력해주세요."
        min-height={'100px'}
      />
    </Box>
  );
};

export default Editor;
