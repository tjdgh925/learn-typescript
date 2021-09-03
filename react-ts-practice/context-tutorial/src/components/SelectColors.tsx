import ColorContext, { useSampleDispatch } from '../contexts/color';
import { Component, useContext } from 'react';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const SelectColors = () => {
  const actions = useSampleDispatch();

  const setColor = (color: string) =>
    actions({ type: 'SET_COLOR', color: color });
  const setSubcolor = (subcolor: string) =>
    actions({ type: 'SET_SUBCOLOR', subcolor: subcolor });
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: 'flex' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: '24px',
              height: '24px',
              cursor: 'pointer',
            }}
            onClick={() => setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              setSubcolor(color);
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
