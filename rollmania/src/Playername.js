import './Playername.css';
import { useState, useEffect } from 'react';


function PlayerName(props) {

  let [playerName, setPlayerName] = useState("");
  let [showName, setShowName] = useState(false);

  useEffect(() => {
    if (showName)
      props.onPlayerNameChange(playerName);
  });

  function update_name(event){
    setPlayerName(event.target.value);
  }

  function set_name() {
      console.log("Nombre: "+playerName);
      let pn_tmp = playerName.trim();

      if (pn_tmp.length < 3 || pn_tmp.length > 12)
        return;

      setShowName(true);
  }

  if (!showName){
  return (
    <div className="Playername">
	<p><input type="text" name="PlayerName" placeholder="Player name" onChange= {update_name} />
	<button onClick= {set_name}>Save</button></p>
    </div>
  );
}
else{
  return (
    <h3 className="Playername">{playerName}</h3>
  );
}
}

export default PlayerName;

