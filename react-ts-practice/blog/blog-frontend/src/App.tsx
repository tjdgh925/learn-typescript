import './App.css';
import { Route } from 'react-router-dom';
import PostListPage from './pages/post/PostListPage';
import Page from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import WritePage from './pages/post/WritePage';
import PostPage from './pages/post/PostPage';
import Responsive from './components/common/Responsive';
import Header from './components/common/Header';

function App() {
  return (
    <>
      <Header />
      <Responsive>
        <Route component={PostListPage} path={['/@:username', '/']} exact />
        <Route component={Page} path="/login" exact />
        <Route component={RegisterPage} path="/register" exact />
        <Route component={WritePage} path="/write" exact />
        <Route component={PostPage} path="/@:username/:postId" exact />
      </Responsive>
    </>
  );
}

export default App;
