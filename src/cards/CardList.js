import Card from "./Card";

function CardList(props) {
  return (
   <>
    {props.cards.map((card)=> (
    <Card key={card.id}
          id={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
    />
    ))}
   </>
  )
}

export default CardList;