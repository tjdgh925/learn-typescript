import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';
import { SampleProvider } from './SampleContext';
// import ReducerSample from './ReducerSample';

function App() {
  return (
    <div>
      <ColorProvider>
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
    </div>
    // <SampleProvider>
    //   <ReducerSample />
    // </SampleProvider>
  );
}

export default App;
