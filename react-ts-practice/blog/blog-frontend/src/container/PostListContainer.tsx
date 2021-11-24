import { useEffect } from 'react';
import qs from 'qs';
import { RouteComponentProps, withRouter, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import PostList from '../components/post/PostList';
import { postAll } from '../modules/postsList';
import { postListState } from '../types/types';

interface MatchParams {
  username: string;
}

const PostListContainer = ({ match }: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { username } = match.params;
  const postListState: postListState = useTypedSelector(
    (state) => state.postsList
  );

  const posts = postListState.success;
  const error = postListState.error.error;
  const loading = postListState.error.loading;
  const user = {
    _id: '',
    username: '',
  };

  const { tag, page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  useEffect(() => {
    // dispatch(postsList({ tag, username, page }));
    dispatch(postAll());
  }, [dispatch, location.search]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      // showWriteButtons={user}
    />
  );
};

export default withRouter(PostListContainer);
