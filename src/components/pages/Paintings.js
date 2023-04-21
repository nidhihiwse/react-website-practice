
// import CardList from '.src/pages/CardList';
import './paintings.css';

import CardList from "../../cards/CardList";
import { useState, useEffect } from "react";

function PaintingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-practice-5da0e-default-rtdb.asia-southeast1.firebasedatabase.app/cards.json'
    ).then(response => {
      return response.json();
    }).then(data => {
        const cards = [];
        for(const key in data) {
          const card = {
            id: key,
            ...data[key]
          };
          cards.push(card);
        }
        setIsLoading(false);
        setDataLoaded(cards);
    });
  }, []);

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
}

export default PaintingsPage;