import React, { useState, useRef, useCallback } from 'react';

import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

interface TodoType {
  id: number;
  text: string;
  checked: boolean;
}

const App = () => {
  const [todo, setTodo] = useState<TodoType[]>([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo2 = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodo(todo.concat(todo2));
      nextId.current += 1;
    },
    [todo]
  );

  const onRemove = useCallback(
    (id) => {
      setTodo(todo.filter((todo) => todo.id !== id));
    },
    [todo]
  );

  const onToggle = useCallback(
    (id) => {
      setTodo(
        todo.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todo]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todo={todo} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
