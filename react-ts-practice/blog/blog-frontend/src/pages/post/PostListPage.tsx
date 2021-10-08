import Button from '@material-ui/core/Button';
import PostList from '../../components/post/PostList';

const PostListPage = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PostList />
    </div>
  );
};

export default PostListPage;
