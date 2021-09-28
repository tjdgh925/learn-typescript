import Editor from './Editor';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { initialize } from '../../modules/posts';
import { postData } from '../../types/types';
import { useCallback, useEffect } from 'react';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const postState: postData = useTypedSelector((state) => state.post.data);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor title={postState.title} body={postState.body} />;
};
export default EditorContainer;

// TextArea 사용하고, reducer를 제목, 내용, tag에 따라 나누자!
