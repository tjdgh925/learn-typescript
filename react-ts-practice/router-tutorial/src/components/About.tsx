import qs from 'qs';
import { RouteProps } from 'react-router-dom';
import * as H from 'history';
interface locationProps {
  location: H.Location;
}

const About = ({ location }: locationProps) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 성정하셨군요!</p>}
    </div>
  );
};

export default About;
