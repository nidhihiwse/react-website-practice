import {useRef} from 'react'

function CardForm() {
  const idInputRef = useRef();
  const imageInputRef = useRef();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredId = idInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const cardData = {
      id: enteredId,
      image: enteredImage,
      title: enteredTitle,
      description: enteredDescription
    };
    console.log(cardData);

    //call POST API
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="id">Card id</label>
        <input id="id" type="text" ref={idInputRef} required/>
      </div>
      <div>
        <label htmlFor="image">Card Image</label>
        <input id="image" type="url" ref={imageInputRef} required/>
      </div>
      <div>
        <label htmlFor="title">Card Title</label>
        <input id="title" type="text" ref={titleInputRef} required/>
      </div>
      <div>
        <label htmlFor="description">Card description</label>
        <input id="description" type="text" rows="5" ref={descriptionInputRef} required/>
      </div>
      <button>Add new Card</button>
    </form>
  )
}

export default CardForm;