import './TodoTemplate.scss';
interface ChildProps {
  children: JSX.Element[];
}

const TodoTemplate = ({ children }: ChildProps) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
