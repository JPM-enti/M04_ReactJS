import './Title.css';


function Title(props) {
  return (
    <header className="Title">
	<h1>{props.text}mania!</h1>
	<h2>{props.subtitle}</h2>
    </header>
  );
}

export default Title;

