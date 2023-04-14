import Card from "./Card";

function CardList(props) {
  return (
   <ul>
    {props.cards.map((card)=> (
    <Card key={card.id}
          id={card.id}
          title={card.title}
          image={card.image}
          des={card.description}
    />
    ))}
   </ul>
  )
}

export default CardList;