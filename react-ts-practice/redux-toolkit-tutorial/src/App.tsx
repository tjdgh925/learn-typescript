import React from 'react';
import './App.css';
import GithubProfileLoader from './components/GithubProfileLoader';
import CountContainer from './pages/CounterPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <>
      <CountContainer />
      <TodoPage />
      <GithubProfileLoader />
    </>
  );
}

export default App;
