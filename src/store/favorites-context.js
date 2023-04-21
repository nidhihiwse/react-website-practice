import { createContext, useState } from "react";

// F in capital because context is a js object and it returns a react component  and we write component with captital initial.
// context has  initial velue i.e. it can be object {}
const FavouritesContext = createContext({
  favourites: [],
  totalFavourites:  0,
  addFavouirte: (card) => {},
  removeFavourite: (cardId) => {},
  itemIsFavourite: (cardId) => {},
});

//but we also need ways of changing itss values according to the states.
//so we will create a regular react component which will be responsible to provide context to all intreseted components also changes context vaues.

// it will return FavouritesContext.Provider its a built in component provided by context obj.
// it should be wrapped in our component layers - add props

// named exports - function exported liked this under its name are called as named exports.
 export function FavouritesContextProvider(props) {
  const [userfavourites, setUserFavourites ] = useState([]);

  function addFavouriteHandler(favouriteCard) {
    //setUserFavourites(userfavourites.concat(favouriteCard));
    //as above instead of concating add a function-latest snapshot that is executed for you by react immediately.  if you don't use function it may happen that the current favourite Status is not updates as the last state change may be in process. 
    setUserFavourites((preUserFavourites) => {
      return preUserFavourites.concat(favouriteCard);
    })
  }

  // filter method is an inbuilt method which takes function as an arugement amd return a new array.
  function removeFavouriteHandler(cardId) {
    setUserFavourites((preUserFavourites) => {
      return preUserFavourites.filter(card => cardId !== card.id);
    });
  }

  // same as filter but it return overall true or false based on the condition inside it.
  function itemIsFavouriteHandler(cardId) {
    return userfavourites.some(card => card.id === cardId); 
  }
  
  
  const context = {
    favourites: userfavourites,
    totalFavourites: userfavourites.length,
    addFavouirte: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };
  return <FavouritesContext.Provider value={context}>
   {props.children}
  </FavouritesContext.Provider>
}

export default FavouritesContext;