import Button from '../common/Button';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '../../image/test2.jpeg';
import { testData } from '../../types/types';
import ErrorMessage from '../common/ErrorMessage';

import Tags from '../common/Tags';

interface PostItemProps {
  post: testData;
}
interface PostListProps {
  posts: testData[] | null;
  loading: boolean;
  error: Error | null;
}
const PostListBlock = styled.div`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: black;
`;
const Test = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(10rem, auto));
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 2rem 2rem;
  place-items: stretch stretch;
`;

const PostItemBlock = styled.div`
  padding: 3px 10px 3px 10px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  background-color: white;
  :hover {
    transform: scale(1.1);
  }
`;
const Image = styled.img`
  align-self: center;
  height: 10rem;
  border-radius: 10px;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: blue;
`;
const Username = styled.h5`
  color: gray;
`;

const WriteButton = styled.button`
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: coral;
  justify-self: end;
`;

const PostItem = ({ post }: PostItemProps) => {
  const { title, username, tag } = post;
  return (
    <PostItemBlock>
      <Image src={image} alt="Image" />
      <PostInfo>
        <Title>{title}</Title>
        <Username> {username}</Username>
      </PostInfo>
      <Tags tags={tag.split(', ')} />
    </PostItemBlock>
  );
};

const PostList = ({
  posts,
  loading,
  error,
}: // showWriteButtons,
PostListProps) => {
  if (error) {
    return <ErrorMessage>에러가 발생!!</ErrorMessage>;
  }
  return (
    <PostListBlock>
      {/* {showWriteButtons && ( */}

      {/* <Link to="write">
        <WriteButton>새 글 작성하기</WriteButton>
      </Link> */}

      {/* )} */}

      {!loading && posts && (
        <Test>
          {() => console.log(posts)}
          {posts.map((post) => (
            <StyledLink to={`/post/${post.id}`}>
              <PostItem post={post} key={post.id} />
            </StyledLink>
          ))}
        </Test>
      )}
    </PostListBlock>
  );
};

export default PostList;
