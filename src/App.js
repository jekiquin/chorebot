import { useState } from 'react';
import Header from './components/Header/Header';
import Instructions from './components/Instructions/Instructions';
import Doors from './components/Doors/Doors';

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className='game'>
        <Instructions />
        <Doors />
        
      </div>
    </div>
  );
}

export default App;
