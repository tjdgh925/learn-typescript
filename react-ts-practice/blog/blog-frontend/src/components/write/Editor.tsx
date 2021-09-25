import { useRef, useState, useMemo } from 'react';

//이렇게 라이브러리를 불러와서 사용하면 됩니다
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(3),
      width: '100%',
      justifyContent: 'center',
    },
    titleInput: {
      outline: 'none',
      paddingBottom: theme.spacing(1),
      border: 'none',
      marginBottom: theme.spacing(3),
    },
    quillStyle: {
      padding: 0,
      minHeight: '320px',
      lineHeight: '200%',
    },
  })
);

const Editor = () => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState('');

  const classes = useStyles();
  // 이미지를 업로드 하기 위한 함수
  // const imageHandler = () => {
  // 	// 파일을 업로드 하기 위한 input 태그 생성
  //   const input = document.createElement("input");
  //   const formData = new FormData();
  //   let url = "";

  //   input.setAttribute("type", "file");
  //   input.setAttribute("accept", "image/*");
  //   input.click();

  // // 파일이 input 태그에 담기면 실행 될 함수
  //   input.onchange = async () => {
  //     const file = input.files;
  //     if (file !== null) {
  //       formData.append("image", file[0]);

  // // 저의 경우 파일 이미지를 서버에 저장했기 때문에
  //   	// 백엔드 개발자분과 통신을 통해 이미지를 저장하고 불러왔습니다.
  //       try {
  //         // const res = axios를 통해 백엔드 개발자분과 통신했고, 데이터는 폼데이터로 주고받았습니다.

  // // 백엔드 개발자 분이 통신 성공시에 보내주는 이미지 url을 변수에 담는다.
  //         url = res.data.url;

  // // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
  //   	// 해당 DOM의 데이터가 필요하기에 useRef를 사용한다.
  //         const range = QuillRef.current?.getEditor().getSelection()?.index;
  //         if (range !== null && range !== undefined) {
  //           let quill = QuillRef.current?.getEditor();

  //           quill?.setSelection(range, 1);

  //           quill?.clipboard.dangerouslyPasteHTML(
  //             range,
  //             `<img src=${url} alt="이미지 태그가 삽입됩니다." />`
  //           );
  //         }

  //         return { ...res, success: true };
  //       } catch (error) {
  //         const err = error as AxiosError;
  //         return { ...err.response, success: false };
  //       }
  //     }
  //   };
  // };

  // quill에서 사용할 모듈을 설정하는 코드 입니다.
  // 원하는 설정을 사용하면 되는데, 저는 아래와 같이 사용했습니다.
  // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀리게 됩니다.
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', ''],
        ],
        handlers: {
          // image: imageHandler,
        },
      },
    }),
    []
  );

  return (
    <Box className={classes.container}>
      <TextField
        className={classes.titleInput}
        fullWidth={true}
        placeholder={'제목을 입력하세요'}
        inputProps={{ style: { fontSize: '3rem' } }}
      />
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="bubble"
        placeholder="내용을 입력해주세요."
        className={classes.quillStyle}
      />
    </Box>
  );
};

export default Editor;
