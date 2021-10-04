import { RouteComponentProps, withRouter } from 'react-router-dom';
import PostViewer from '../../components/post/PostViewer';
import PostViewerContainer from '../../container/PostViewerContainer';

interface MatchParams {
  postId: string;
}

const PostPage = ({ match }: RouteComponentProps<MatchParams>) => {
  const { postId } = match.params;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PostViewerContainer />
    </div>
  );
};

export default PostPage;
