// import './Profile.css';

function Card(props) {
  return (   	
	<div className="gallery-card">
		<img src={props.image}/>  
		<div className="bottom">
		<h2>{props.title}</h2>
		<p>{props.description}</p>
		</div>
	</div>
  )
}

export default Card;