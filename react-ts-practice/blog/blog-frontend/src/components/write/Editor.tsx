import { useRef, useMemo, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { postData } from '../../types/types';
import { initialize, updatePost } from '../../modules/posts';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import TagBox from './TagBox';

const TitleInput = styled.input`
  border: none;
  font-size: 40px;
  font-weight: 800;
  padding: 10px 0 0 20px;
  border-bottom: 0.5px solid #dedede;
  margin-bottom: 2rem;
  :focus {
    outline: none;
    border-color: gray;
  }
`;

const EditorBlock = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 90%;
  .ql-editor {
    min-height: 30rem;
    font-size: 20px;
  }
  .quill > .ql-container > .ql-editor.ql-blank::before {
    font-size: 20px;
    font-weight: 500;
    color: gray;
  }
`;

const DeadLineBlock = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  margin-bottom: 1rem;
  h2 {
    font-weight: 800;
    margin-right: 20px;
  }
`;

const TimeSeparator = styled.span`
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 20px;
  font-weight: 800;
`;

const Select = styled.select`
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  padding-right: 1rem;
  font-size: 20px;
  border: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Editor = () => {
  const dispatch = useDispatch();
  const QuillRef = useRef<ReactQuill>();

  const postState: postData = useTypedSelector((state) => state.post.data);
  const title = postState.title;
  const body = postState.body;
  const tags = postState.tags;

  const [deadline, setDeadline] = useState<string>('00:00');
  const [time, setTime] = useState<string>('');
  const [minute, setMinute] = useState<string>('');

  const handleChange = useCallback((e) => {
    console.log(e.target);
    const { name, value } = e.target;
    if (name === 'time') setTime(value);
    else if (name === 'minute') setMinute(value);
  }, []);

  useEffect(() => {
    setDeadline(time + ':' + minute);
    console.log(deadline);
  }, [deadline, minute, time]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
        ],
      },
    }),
    []
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  const changeTitle = useCallback(
    (e) => {
      const { value } = e.target;
      dispatch(
        updatePost({
          title: value,
          body: body,
          tags: tags,
        })
      );
    },
    [body, tags, dispatch]
  );

  const changeBody = useCallback(
    (e) => {
      dispatch(
        updatePost({
          title: title,
          body: e,
          tags: tags,
        })
      );
    },
    [title, tags, dispatch]
  );

  return (
    <EditorBlock>
      <TitleInput
        name={'title'}
        placeholder={'제목을 입력하세요'}
        value={title}
        onChange={changeTitle}
      />
      <DeadLineBlock>
        <h2>마감 시간: </h2>
        <Select name="time" value={time} onChange={handleChange}>
          <option value="" hidden>
            시
          </option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
        </Select>
        <TimeSeparator>:</TimeSeparator>
        <Select name="minute" value={minute} onChange={handleChange}>
          <option value="" hidden>
            분
          </option>
          <option value="00">00</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </Select>
      </DeadLineBlock>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={body}
        onChange={changeBody}
        modules={modules}
        theme="snow"
        placeholder="원하는 장소, 시간, 메뉴 대해 구체적으로 작성 부탁드려요!"
      />
      <TagBox />
    </EditorBlock>
  );
};

export default Editor;
