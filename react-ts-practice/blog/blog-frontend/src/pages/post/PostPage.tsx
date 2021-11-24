import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import PostViewer from '../../components/post/PostViewer';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { postState, PostSuccessData } from '../../types/types';
import { readPost, unloadPost } from '../../modules/posts';

interface MatchParams {
  postId: string;
}
const PostPageBlock = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const PostPage = ({ match }: RouteComponentProps<MatchParams>) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const readPostState: postState = useTypedSelector((state) => state.post);
  const post: PostSuccessData | null = readPostState.success;
  const error: Error | null = readPostState.error.error;
  const loading: boolean = readPostState.error.loading;

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);
  return (
    <PostPageBlock>
      <PostViewer post={post} loading={loading} error={error} />;
    </PostPageBlock>
  );
};

export default withRouter(PostPage);
