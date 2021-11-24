import Editor from '../../components/write/Editor';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import styled from 'styled-components';

const WritePageBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const WritePage = () => {
  return (
    <WritePageBlock>
      <Editor />
      <WriteActionButtons />
    </WritePageBlock>
  );
};

export default WritePage;
