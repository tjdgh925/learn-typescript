import './App.css';
import { Route } from 'react-router-dom';
import PostListPage from './pages/post/PostListPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import WritePage from './pages/post/WritePage';
import PostPage from './pages/post/PostPage';
import Responsive from './components/common/Responsive';

import HeaderTab from './components/common/HeaderTab';

function App() {
  return (
    <>
      <HeaderTab />
      <Responsive>
        <Route component={PostListPage} path={['/@:username', '/']} exact />
        <Route component={LoginPage} path="/login" exact />
        <Route component={RegisterPage} path="/register" exact />
        <Route component={WritePage} path="/write" exact />
        <Route component={PostPage} path="/post/:postId" exact />
      </Responsive>
    </>
  );
}

export default App;
