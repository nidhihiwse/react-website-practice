// import NewCardForm from "./card/NewCardForm";

import CardForm from "../../cards/CardForm";
import { useNavigate } from "react-router-dom";

function NewCardPage() {
  const navigate = useNavigate();
  function addCardHandler(cardData) {
    fetch("https://react-practice-5da0e-default-rtdb.asia-southeast1.firebasedatabase.app/cards.json",
    {
      method: "POST",
      body: JSON.stringify(cardData),
      headers: {
        'Content-Type' : 'application/json'
      }
    } 
    ).then(()=>{
      navigate('/', {replace:true});
    })
  }
  return (
  <section>
    <h1>Add new card!!!</h1>
    <CardForm onAddCard={addCardHandler}/>
  </section>
  )
}

export default NewCardPage;