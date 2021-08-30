import './TodoList.scss';
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
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
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo2 = todo[index];
      return (
        <TodoListItem
          todo={todo2}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          // style={style}
        />
      );
    },
    [onRemove, onToggle, todo]
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={512}
      rowCount={todo.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todo}
      // style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
