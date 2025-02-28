import './App.css';
import Dice from './Dice.js';
import Title from './Title.js';
import RollButton from './Rollbutton.js';
import Scores from './Scores.js';
import PlayerName from './Playername.js';
import { useState, useRef } from 'react';


function App() {

  const [roll, setRoll] = useState(false);

  const playerName = useRef("");
  const playerScore = useRef(0);

  function roll_dice() {
    setRoll(true);
  }

  function setPlayerName (name) {
    playerName.current = name;
    console.log("El nombre del jugador es: "+name);
  }

  function setPlayerScore (total) {
    playerScore.current = total;
    console.log("Puntuacion total: "+total);
  }

  return (
    <div className="rollmania">
	<Title text="Roll" subtitle="subtitulo"/>
	<PlayerName onPlayerNameChange={setPlayerName}/>
    <main className="App">
	<Dice cantidad="5" roll={roll} onTotal={setPlayerScore}/>
    </main>
    <div className="Rollbutton">
	<RollButton roll_func={roll_dice}/>
    </div>
        <Scores puntuaciones="5" />
    </div>
  );
}

export default App;

