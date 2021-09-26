import Editor from '../../components/write/Editor';
import TagBox from '../../components/write/TagBox';
import WriteActionButtons from '../../components/write/WriteActionButtons';

interface WritePageProps {}

const WritePage = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Editor />
      <TagBox />
      <WriteActionButtons />
    </div>
  );
};

export default WritePage;
