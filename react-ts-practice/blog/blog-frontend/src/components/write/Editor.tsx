import { useRef, useState, useMemo, useCallback } from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { postData } from '../../types/types';
import { TextareaAutosize } from '@material-ui/core';

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
interface EditorProps {
  title: string;
  body: string;
}
const Editor = ({ title, body }: EditorProps) => {
  const [contents, setContents] = useState<string>('');
  const [temp, setTemp] = useState<HTMLTextAreaElement>();

  const classes = useStyles();

  const handleChange = useCallback(
    (e) => {
      setTemp(e.target.value);
    },
    [temp]
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
        onChange={handleChange}
      />
      <TextareaAutosize />
    </Box>
  );
};

export default Editor;
