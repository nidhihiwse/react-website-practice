import { useContext } from 'react';
import FavouritesContext from '../../store/favorites-context';
import CardList from '../../cards/CardList';
import './paintings.css';
import '../../cards/card.css';


function Favourites() {  
  const favouriteCtx = useContext(FavouritesContext);
  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You have got no favourites. Start adding?</p>
  } else {
    content = <CardList cards={favouriteCtx.favourites}/>
  } 

  console.log(content);
  return (
    <section className="favourite-section-wrapper">
      <h1>My Favourites</h1>
      <div className="gallery-container">
        <div className="gallery">
          {content}
        </div>
      </div> 
    </section>
  )
}

export default Favourites;