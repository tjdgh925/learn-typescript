import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { Box } from '@mui/system';

interface SubInfoProps {
  username: string;
  publishedDate: Date | string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(5),
      width: '100%',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
    },
    postInfo: {
      display: 'flex',
      paddingTop: theme.spacing(3),
    },
    postHeader: {
      borderBottom: '1px solid black',
      paddingBottom: theme.spacing(3),
    },
  })
);

const SubInfo = ({ username, publishedDate }: SubInfoProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.postInfo}>
      <Grid item xs={2}>
        {username}
      </Grid>
      <Grid item>
        {publishedDate instanceof Date
          ? publishedDate.toLocaleDateString()
          : ''}
      </Grid>
    </Grid>
  );
};

export default SubInfo;
