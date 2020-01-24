import React from 'react';
import ColorCard from './components/colorcard-component';

function App() {
  const rng = () => {
    return '#' + Math.random().toString(14).substr(-6);
  };
  return (
    < div className="App" style={{ margin: 'auto', paddingTop: '2%' }}>
      <ColorCard color={rng()} text='H' />
      <ColorCard color={rng()} text='E' />
      <ColorCard color={rng()} text='L' />
      <ColorCard color={rng()} text='L' />
      <ColorCard color={rng()} text='O' />
    </div >
  );
}

export default App;
