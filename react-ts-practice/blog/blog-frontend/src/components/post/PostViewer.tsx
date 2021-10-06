import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { PostSuccessData, postState } from '../../types/types';

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
interface PostViewerProps {
  post: PostSuccessData | null;
  error: Error | null;
  loading: boolean;
}
const PostViewer = ({ post, error, loading }: PostViewerProps) => {
  const classes = useStyles();

  if (error) {
    console.log(error.message);
  }
  if (loading || !post) {
    return null;
  }

  const date = new Date(post.publishedDate);
  const dateString = date.toLocaleDateString();

  return (
    <Box className={classes.container}>
      <Box className={classes.postHeader}>
        <Typography variant="h1" className={classes.title}>
          {post.title}
        </Typography>
        <Grid container className={classes.postInfo}>
          <Grid item xs={2}>
            {post.user.username}
          </Grid>
          <Grid item>{dateString}</Grid>
        </Grid>
        <Grid container className={classes.postInfo}>
          {post.tags.map((tag) => {
            return (
              <Grid item xs={1} key={tag}>
                #{tag}
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Typography dangerouslySetInnerHTML={{ __html: post.body }} />
    </Box>
  );
};

export default PostViewer;
