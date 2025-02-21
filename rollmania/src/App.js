import './App.css';
import Dice from './Dice.js';
import Title from './Title.js';
import Roll from './Rollbutton.js';
import Scores from './Scores.js';
import { useState } from 'react';


function App() {

 let [roll, setRoll] = useState(false);

  function roll_dice() {
    setRoll(true);
  }

  return (
    <div className="rollmania">
	<Title text="Atmosphere"/>
    <main className="App">
	<Dice quantity="3" roll={roll}/>
    </main>
    <div className="Rollbutton">
	<Roll roll_func={roll_dice}/>
    </div>
	<Scores />
    </div>
  );
}

export default App;

