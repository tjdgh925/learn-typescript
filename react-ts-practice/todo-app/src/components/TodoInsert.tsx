import React, { useState, useCallback, ReactEventHandler } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

interface TodoInsertProps {
  onInsert: (value: string) => void;
}

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [value, setValue] = useState<string>('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
