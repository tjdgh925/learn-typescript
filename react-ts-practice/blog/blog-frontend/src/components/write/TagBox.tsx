import React, { useState, useCallback, useMemo } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      paddingLeft: theme.spacing(1),
    },
    input: {
      height: 40,
    },
    button: {
      height: 40,
      backgroundColor: 'black',
      color: 'white',
    },
    tagsContainer: {
      display: 'flex',
    },
    tags: {
      padding: theme.spacing(1),
    },
  })
);

const TagBox = () => {
  const classes = useStyles();
  const [tag, setTag] = useState<string>();
  const [tags, setTags] = useState<string[]>([]);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTag(value);
    },
    [tag]
  );

  const onClick = useCallback(
    (e) => {
      if (tag) tags.push(tag);
      setTag('');
      console.log(tags);
    },
    [tag, tags]
  );

  const onRemove = useCallback(
    (e) => {
      const value = e.target.innerText;
      setTags(tags.filter((tag) => tag !== value.substr(1)));
    },
    [tags]
  );

  return (
    <Box className={classes.container}>
      <Typography className={classes.header}>태그</Typography>
      <Box>
        <TextField
          variant="outlined"
          placeholder="태그를 입력하세요"
          InputProps={{
            className: classes.input,
          }}
          value={tag}
          onChange={onChange}
        />
        <Button variant="outlined" className={classes.button} onClick={onClick}>
          추가
        </Button>
      </Box>
      <Box className={classes.tagsContainer}>
        {tags.map((tag) => {
          return (
            <Typography className={classes.tags} onClick={onRemove}>
              #{tag}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};

export default TagBox;
