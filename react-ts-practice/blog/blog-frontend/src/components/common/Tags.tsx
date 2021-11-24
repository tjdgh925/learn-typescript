import styled from 'styled-components';

interface TagsProps {
  tags: string[];
}
const TagBlock = styled.div`
  display: flex;
  & + & {
    padding-left: 1rem;
  }
`;

const Tags = ({ tags }: TagsProps) => {
  return (
    <TagBlock>
      {tags.map((tag) => {
        return <span key={tag}>#{tag}&nbsp;&nbsp;</span>;
      })}
    </TagBlock>
  );
};

export default Tags;
