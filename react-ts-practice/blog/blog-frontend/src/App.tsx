import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import PostListPage from './pages/post/PostListPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import WritePage from './pages/post/WritePage';
import PostPage from './pages/post/PostPage';

function App() {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" exact />
      <Route component={RegisterPage} path="/register" exact />
      <Route component={WritePage} path="/write" exact />
      <Route component={PostPage} path="/@:username/:postId" exact />
    </>
  );
}

export default App;
