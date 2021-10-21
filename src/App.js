import Door from './components/Door/Door';
import Header from './components/Header/Header';
import Instructions from './components/Instructions/Instructions';

const NUM_DOORS = 3;

function App() {

  
  return (
    <div className="App">
      <Header />
      <div className='game'>
        <Instructions />
        <Door />
      </div>
    </div>
  );
}

export default App;
