import { Box, Typography } from '@material-ui/core';

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <Box>
      {tags.map((tag) => {
        return <Typography key={tag}>#{tag}</Typography>;
      })}
    </Box>
  );
};

export default Tags;
