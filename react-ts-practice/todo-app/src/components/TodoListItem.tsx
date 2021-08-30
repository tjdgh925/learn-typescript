import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';
import React from 'react';

interface TodoType {
  id: number;
  text: string;
  checked: boolean;
}
interface TodoListItemProps {
  todo: TodoType;
  key: number;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  // style: (style: string | number | (string & {})) => void;
}
const TodoListItem = ({
  todo,
  key,
  onRemove,
  onToggle,
}: // style,
TodoListItemProps) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem-virtualized" style={{ outline: 'none' }}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
