import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainers';
import GithubProfileLoader from './containers/GithubProfileLoader';
import TodoApp from './containers/TodoApp';

const App = () => {
  return (
    <>
      <CounterContainer />
      <TodoApp />
      <GithubProfileLoader />
    </>
  );
};

export default App;
