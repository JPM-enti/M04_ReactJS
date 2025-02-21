import './Title.css';


function Title(props) {
  return (
    <header className="Title">
	<h1>{props.text}mania!</h1>
    </header>
  );
}

export default Title;

