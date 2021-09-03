import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainers';
import TodoApp from './containers/TodoApp';

const App = () => {
  return (
    <>
      <CounterContainer />;
      <TodoApp />
    </>
  );
};

export default App;
