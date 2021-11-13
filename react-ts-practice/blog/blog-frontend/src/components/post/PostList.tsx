import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import { PostSuccessData, User } from '../../types/types';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      width: '300px',
      border: '1px solid black',
    },
    container2: {
      width: '100%',
      border: '1px solid black',
    },
    btn: {
      alignSelf: 'end',
    },
  })
);
interface PostItemProps {
  post: PostSuccessData;
}
interface PostListProps {
  posts: PostSuccessData[] | null;
  loading: boolean;
  error: Error | null;
  showWriteButtons: User;
}

const PostItem = ({ post }: PostItemProps) => {
  const { title, body, tags, user, _id, publishedDate } = post;
  return (
    <Container>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </Container>
  );
};

const PostList = ({
  posts,
  loading,
  error,
  showWriteButtons,
}: PostListProps) => {
  const classes = useStyles();
  if (error) {
    return <Container>에러가 발생!!</Container>;
  }
  return (
    <Container className={classes.container2}>
      <Box className={classes.container}>
        {showWriteButtons && (
          <Link to="write">
            <Button className={classes.btn} variant={'contained'}>
              새 글 작성하기
            </Button>
          </Link>
        )}
      </Box>
      {!loading && posts && (
        <div>
          {() => console.log(posts)}
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default PostList;
