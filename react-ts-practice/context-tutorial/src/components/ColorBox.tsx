import { Value } from 'react-native-reanimated';
import ColorContext, { useSampleState } from '../contexts/color';
import { useContext } from 'react';

const ColorBox = () => {
  const state = useSampleState();
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
