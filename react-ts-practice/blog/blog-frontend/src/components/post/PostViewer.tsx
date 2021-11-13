import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { PostSuccessData } from '../../types/types';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

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

  return (
    <Box className={classes.container}>
      <Box className={classes.postHeader}>
        <Typography variant="h1" className={classes.title}>
          {post.title}
        </Typography>
        <SubInfo
          username={post.user.username}
          publishedDate={post.publishedDate}
        />
        <Tags tags={post.tags} />
      </Box>
      <Typography dangerouslySetInnerHTML={{ __html: post.body }} />
    </Box>
  );
};

export default PostViewer;
