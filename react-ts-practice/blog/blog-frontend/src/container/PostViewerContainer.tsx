import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import PostViewer from '../components/post/PostViewer';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { readPost, unloadPost } from '../modules/posts';
import { postState, PostSuccessData } from '../types/types';

interface MatchParams {
  postId: string;
}
const PostViewerContainer = ({ match }: RouteComponentProps<MatchParams>) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
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

  return <PostViewer post={post} loading={loading} error={error} />;
};

export default withRouter(PostViewerContainer);
