import './Scores.css';
import ScoreItem from './ScoreItem.js';


function get_scores(quantity) {
  let score_list = [];  

  for (let i = 0; i < quantity; i++){
    score_list.push(<ScoreItem key={i} scorePos={i} />);
  }
  return score_list;
}

function Scores(props) {
  return (
    <section className="Scores">
	<h2>Scores:</h2>
	<ol>
	  {get_scores(props.puntuaciones)}
	</ol>
    </section>
  );
}

export default Scores;

