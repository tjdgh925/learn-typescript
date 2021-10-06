import axios from 'axios';
import { useCallback, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import PostViewer from '../../components/post/PostViewer';
import PostViewerContainer from '../../container/PostViewerContainer';
import { PostSuccessData } from '../../types/types';

interface MatchParams {
  postId: string;
}
const PostPage = ({ match }: RouteComponentProps<MatchParams>) => {
  const { postId } = match.params;
  // const [data, setData] = useState<PostSuccessData>();

  // async function readPost(id: string) {
  //   const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
  //   return response.data;
  // }

  // const onClick = useCallback((e) => {
  //   console.log(readPost(postId));
  // }, []);
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PostViewerContainer />
      {/* <div>
        <button onClick={onClick}>Heelo</button>
        {data}
      </div> */}
    </div>
  );
};

export default PostPage;
