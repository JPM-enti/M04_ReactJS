import './Die.css';
import { useState, useRef, useEffect } from 'react';


function Die(props) {

  let [number, setNumber] = useState("-");

  const randomized = useRef(false);

  useEffect (() => {
    if (number != "-")
      props.onResult(number);
  });

  function get_random() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function set_random() {
    let randomNumber = get_random();
    setNumber(randomNumber);
  }


  if (props.roll && !randomized.current){
    set_random();

    randomized.current = true;
  }

  return (
    <button className="Die" onClick={set_random}>
	<p className="DieNumber">{number}</p>
    </button>
  );
}

export default Die;
