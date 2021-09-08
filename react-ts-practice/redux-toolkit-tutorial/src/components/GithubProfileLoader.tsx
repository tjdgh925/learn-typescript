import React from 'react';
import { useDispatch } from 'react-redux';

import GithubUsernameForm from '../components/GithubUsernameForm';
import GithubProfileInfo from '../components/GithubProfileInfo';
import { GithubState, request } from '../modules/github';
import { useTypedSelector } from '../hook/useTypedSelector';

function GithubProfileLoader() {
  const GithubState: GithubState = useTypedSelector((state) => state.github);
  const data = GithubState.userProfile.data;
  const error = GithubState.userProfile.error;
  const loading = GithubState.userProfile.loading;
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(request(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
      {data && (
        <GithubProfileInfo
          bio={data.bio}
          blog={data.blog}
          name={data.name}
          thumbnail={data.avatar_url}
        />
      )}
    </>
  );
}

export default GithubProfileLoader;
