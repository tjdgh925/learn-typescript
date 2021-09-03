import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  useReducer,
} from 'react';

export interface State {
  color: string;
  subcolor: string;
}
type Action =
  | { type: 'SET_COLOR'; color: string }
  | { type: 'SET_SUBCOLOR'; subcolor: string };

type SampleDispatch = Dispatch<Action>;

const ColorDispatch = createContext<SampleDispatch | null>(null);
const ColorContext = createContext<State | null>(null);
// const ColorContext = createContext({
//   state: { color: 'black', subcolor: 'red' },
//   actions: {
//     setColor: (color: string) => {},
//     setSubcolor: (color: string) => {},
//   },
// });

interface colorProps {
  children: React.ReactChild;
}
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'SET_SUBCOLOR':
      return {
        ...state,
        subcolor: action.subcolor,
      };

    default:
      throw new Error('이것은 에러!!');
  }
}

export const ColorProvider = ({ children }: { children: React.ReactChild }) => {
  const [state, dispatch] = useReducer(reducer, {
    color: 'black',
    subcolor: 'red',
  });

  return (
    <ColorContext.Provider value={state}>
      <ColorDispatch.Provider value={dispatch}>
        {children}
      </ColorDispatch.Provider>
    </ColorContext.Provider>
  );
};
export function useSampleState() {
  const state = useContext(ColorContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(ColorDispatch);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
export default ColorContext;
