import { RouteComponentProps, withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';
type peronalName = 'velopert' | 'jang';

interface matchParams {
  username: peronalName;
}
interface peronalInfo {
  username: string;
  description: string;
}

const data: Record<peronalName, peronalInfo> = {
  velopert: {
    username: '김민준',
    description: '리액트를 좋아하는 개발자',
  },
  jang: {
    username: '장성호',
    description: '리액트를 공부중인 개발자',
  },
};

const Profile = ({ match }: RouteComponentProps<matchParams>) => {
  const { username } = match.params;
  const profile: peronalInfo = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.username})
        <br />
        {profile.description}
      </h3>
      <WithRouterSample />
    </div>
  );
};
export default withRouter(Profile);
