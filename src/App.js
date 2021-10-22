import { useState } from 'react';
import Header from './components/Header/Header';
import Instructions from './components/Instructions/Instructions';
import Doors from './components/Doors/Doors';

function App() {
  const [isGameActive, setIsGameActive] = useState(true);
  const [winCount, setWinCount] = useState(0);
  const [winStreak, setWinStreak] = useState(0);

  const gameEnd = status => {
    setIsGameActive(false);
    switch(status) {
      case 'lose':
        setWinCount(0);
        break;
      case 'win':
      default:
        if(winCount + 1 > winStreak) {
          setWinStreak(currWinStreak => currWinStreak + 1);
        }
        setWinCount(currWinCount => currWinCount + 1);
    }
  }

  const handleRestart = () => {
    setIsGameActive(true);
  }
  
  return (
    <div className="App">
      <Header />
      <div className='game'>
        <Instructions />
        <Doors 
          isGameActive={isGameActive}
          gameEnd={gameEnd}
        />
      </div>
      <p>Win Count {winCount}</p>
      <p>Win Streak {winStreak}</p>
      {!isGameActive && <button onClick={handleRestart}>Play Again?</button>}
    </div>
  );
}

export default App;
