import React from 'react';
import ColorCard from './components/colorcard-component';

function App() {
  return (
    < div className="App" style={{ margin: 'auto' }}>
      <ColorCard color='red' text='H' />
      <ColorCard color='orange' text='E' />
      <ColorCard color='yellow' text='L' />
      <ColorCard color='green' text='L' />
      <ColorCard color='blue' text='O' />
    </div >
  );
}

export default App;
