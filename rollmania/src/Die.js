import './Die.css';
import { useState } from 'react';


function Die() {

  let [number, setNumber] = useState(1)

  function randomRoll(max) {
    return Math.floor(Math.random() * max);
}

  function roll() {
    setNumber(randomRoll(6)+1);
  }

  return (
    <button className="Die" onClick={roll}>
	<p className="DieNumber">{number}</p>
    </button>
  );
}

export default Die;
