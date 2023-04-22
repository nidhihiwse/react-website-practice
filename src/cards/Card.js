// import './Profile.css';
import { useContext } from 'react';
import FavouritesContext from '../store/favorites-context';

function Card(props) {
  const favouriteCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);

  function toggleFavClick() {
    if(itemIsFavourite) {
		favouriteCtx.removeFavourite(props.id);
	} else {
		// // add to db
		// addToFav({
		// 	id:props.id,
		// 	title:props.title,
		// 	image:props.image,
		// 	description:props.description,
		// })
		// add locally
		favouriteCtx.addFavouirte({
			id:props.id,
			title:props.title,
			image:props.image,
			description:props.description,
		});
	}
  }

//   function addToFav(cardData) {
//     fetch("https://react-practice-5da0e-default-rtdb.asia-southeast1.firebasedatabase.app/paintings.json",
//     {
//       method: "POST",
//       body: JSON.stringify(cardData),
//       headers: {
//         'Content-Type' : 'application/json'
//       }
//     } 
//     )
//   }

  return (   	
	<div className="gallery-card">
		<img src={props.image}/>  
		<div className="bottom">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<button onClick={toggleFavClick}>
				{itemIsFavourite ? 'Remove from favourite' :'Add to favourite'}
			</button>
		</div>
	</div>
  )
}

export default Card;