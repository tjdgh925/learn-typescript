import { useTypedSelector } from '../hook/useTypedSelector';
import {
  Todo,
  addTodo,
  removeTodo,
  toggleTodo,
  TodoState,
} from '../modules/todos';
import { useDispatch } from 'react-redux';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

const TodoPage = () => {
  const Todos: TodoState = useTypedSelector((state) => state.todos);

  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={Todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoPage;
