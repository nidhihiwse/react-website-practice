// import './Profile.css';

function Card(props) {
  return (

		<div id={props.id}>
			<img src={props.image} alt =""/>
			<h2>{props.title}</h2>
			<p>{props.des}</p>
		</div>

  )
}

export default Card;