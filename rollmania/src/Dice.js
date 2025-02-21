import './Dice.css';
import Die from './Die.js';

function Dice(props) {

  function get_dice (quantity, roll) {
    let dice_list = [];
    for (let i = 0; i < quantity; i++){
      dice_list.push(<Die key={i} roll={roll}/>);
    }

    return dice_list;
  }

return (
    <div className="Dice">
      {get_dice(props.quantity)}
    </div>
  );
}

export default Dice;
