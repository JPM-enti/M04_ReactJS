import './Rollbutton.css';
import { useState } from 'react';


function Roll(props) {

  return (
    <button className="Rollbutton" onClick={props.roll_func}>
	Roll!
    </button>
  );
}

export default Roll;
