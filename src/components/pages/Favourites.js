import { useContext } from 'react';
import FavouritesContext from '../../store/favorites-context';
import CardList from '../../cards/CardList';
import { useState, useEffect } from "react";



function Favourites() {

  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState([]);

  fetch('https://react-practice-5da0e-default-rtdb.asia-southeast1.firebasedatabase.app/paintings.json'
    ).then(response => {
      return response.json();
    }).then(data => {
        const _cards = [];
        for(const key in data) {
          const _card = {
            id: key,
            ...data[key]
          };
          _cards.push(_card);
          setIsLoading(false);
          setDataLoaded(_cards);
        }
        // if (_cards.length === 0) {
        //   return (<p>You have got no favourites. Start adding?</p>)
        // } else {
        //   return (
        //     <>
        //       <h1>My Favourites</h1>
        //       {<CardList cards={_cards}/>}
        //     </>
        //   )
        // } 
    });
    //return(<></>)
  
    if(isLoading) {
      return (
      <div className="loading-section">
        <img alt="" src="./loading.gif" />
      </div>
      )
    } 

    return (
      <section className="section-wrapper">
        <h1><i>“Painting is just another way of keeping a diary”</i></h1>
        <div className="gallery-container">
          <div className="gallery">
          <CardList cards={dataLoaded}/>
          </div>
        </div>  
      </section>
    )
  // const favouriteCtx = useContext(FavouritesContext);
  // let content;

  // if (favouriteCtx.totalFavourites === 0) {
  //   content = <p>You have got no favourites. Start adding?</p>
  // } else {
  //   content = <CardList cards={favouriteCtx.favourites}/>
  // } 
}

export default Favourites;