import './TodoList.scss';
import TodoListItem from './TodoListItem';
interface TodoType {
  id: number;
  text: string;
  checked: boolean;
}
interface TodoProps {
  todo: TodoType[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList = ({ todo, onRemove, onToggle }: TodoProps) => {
  return (
    <div className="TodoList">
      {todo.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
