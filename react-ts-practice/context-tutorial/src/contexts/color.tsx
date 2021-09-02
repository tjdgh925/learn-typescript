import { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: (color: string) => {},
    setSubcolor: (color: string) => {},
  },
});

interface colorProps {
  children: React.ReactChild;
}

const ColorProvider = ({ children }: colorProps) => {
  const [color, setColor] = useState<any>('black');
  const [subcolor, setSubcolor] = useState<string>('red');

  const value: { state: any; actions: any } = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
