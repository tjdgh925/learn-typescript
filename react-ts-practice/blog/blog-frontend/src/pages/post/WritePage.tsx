import Editor from '../../components/write/Editor';
import EditorContainer from '../../components/write/EditorContainer';
import TagBox from '../../components/write/TagBox';
import WriteActionButtons from '../../components/write/WriteActionButtons';

interface WritePageProps {}

const WritePage = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <EditorContainer />
      <TagBox />
      <WriteActionButtons />
    </div>
  );
};

export default WritePage;
