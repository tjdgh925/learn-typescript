import styled from 'styled-components';
import ContentInfo from '../common/ContentInfo';

const ContentBodyBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  border: none;
  padding-bottom: 1rem;
  // border-bottom: 2px solid black;
  width: 60%;
`;

const Separator = styled.div`
  align-self: center;
  width: 95%;
  padding-top: 3rem;
  border-bottom: 2px solid #aaadab;
`;

const Body = styled.div`
  padding-top: 3rem;
`;

const ContentBody = () => {
  return (
    <ContentBodyBlock>
      <Title>제목</Title>
      <ContentInfo username="사용자" deadline="마감일" tag={['tag1', 'tag2']} />
      <Separator />
      <Body
        dangerouslySetInnerHTML={{
          __html:
            '<div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsu will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>',
        }}
      />
    </ContentBodyBlock>
  );
};

export default ContentBody;
