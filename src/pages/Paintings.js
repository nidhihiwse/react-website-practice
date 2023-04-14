
// import CardList from '.src/pages/CardList';

import CardList from "../cards/CardList";

function PaintingsPage() {
  const DUMMY_DATA = [
    {
      id: "01",
      title: "card1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwPyQTjD9RDZhy4qnnMu4CaUf2-AMnez2Bi6YhN3fwHv05i9q1-2G9WPYSBbIsDivpXk&usqp=CAU",
      description: "This is card1 image"
    },
    {
      id: "02",
      title: "card2",
      image: "data:image/jpeg;base64,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",
      description: "This is card2 image"
    },
    {
      id: "03",
      title: "card3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSBj18uvBQvVFBvnfv4F8M2M86e2T8X1rIQ&usqp=CAU",
      description: "This is card3 image"
    },
    {
      id: "04",
      title: "card4",
      image: "https://ik.imagekit.io/theartling/prod/original_images/soyoung.jpeg?tr=w-1650",
      description: "This is card4 image"
    },
    {
      id: "05",
      title: "card5",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLb6Rs1f4Rk7M0awX5pBOnoQrHJ94DOftMxw&usqp=CAU",
      description: "This is card5 image"
    },
    {
      id: "06",
      title: "card6",
      image: "data:image/jpeg;base64,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",
      description: "This is card6 image"
    }
  ]
  return (
    <section>
      <h1>All Paintings</h1>
      <CardList cards={DUMMY_DATA}/>
    </section>
  )
}

export default PaintingsPage;