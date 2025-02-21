import './Die.css';
import { useState } from 'react';


function Die(props) {

  let [number, setNumber] = useState("-")
  let [roll, setRoll] = useState(false)

  function randomRoll(max) {
    return Math.floor(Math.random() * max);
}

  function set_random() {
    setNumber(randomRoll(6)+1);
  }

  if (props.roll){
    number = set_random();
  }

  return (
    <button className="Die" onClick={set_random}>
	<p className="DieNumber">{number}</p>
    </button>
  );
}

export default Die;
