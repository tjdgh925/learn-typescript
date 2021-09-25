import Editor from '../../components/write/Editor';
import TagBox from '../../components/write/TagBox';

interface WritePageProps {}

const WritePage = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Editor />
      <TagBox />
    </div>
  );
};

export default WritePage;
