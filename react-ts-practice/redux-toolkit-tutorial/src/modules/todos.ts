import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
let nextId: number = 4;

export interface TodoState extends Array<Todo> {}

const initialState: TodoState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false },
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const id = nextId++;
      return state.concat({
        id: id,
        text: action.payload,
        done: false,
      });
    },
    toggleTodo(state, action: PayloadAction<number>) {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    removeTodo(state, action: PayloadAction<number>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
