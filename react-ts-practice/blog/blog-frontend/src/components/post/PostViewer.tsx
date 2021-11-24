import { PostSuccessData } from '../../types/types';

import styled from 'styled-components';
import ContentBody from './ContentBody';
import ContentSideView from './ContentSideView';

const PostContentBlock = styled.div`
  display: flex;
  height: 800px;
`;

interface PostViewerProps {
  post: PostSuccessData | null;
  error: Error | null;
  loading: boolean;
}
const PostViewer = ({ post, error, loading }: PostViewerProps) => {
  if (error) {
    console.log(error.message);
  }
  // if (loading || !post) {
  //   return null;
  // }

  return (
    <PostContentBlock>
      <ContentBody />
      <ContentSideView />
    </PostContentBlock>
  );
};

export default PostViewer;
