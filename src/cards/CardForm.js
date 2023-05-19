import {useRef} from 'react'
import { useState } from 'react';
import './card.css';

// function CardForm(props) {
//   const idInputRef = useRef();
//   const imageInputRef = useRef();
//   const titleInputRef = useRef();
//   const descriptionInputRef = useRef();

//   function submitHandler(event) {
//     event.preventDefault();

//     const enteredId = idInputRef.current.value;
//     const enteredImage = imageInputRef.current.value;
//     const enteredTitle = titleInputRef.current.value;
//     const enteredDescription = descriptionInputRef.current.value;

//     const cardData = {
//       id: enteredId,
//       image: enteredImage,
//       title: enteredTitle,
//       description: enteredDescription
//     };
//     console.log(cardData);

//     //call POST API
//     props.onAddCard(cardData);
//   }

//   return (
//     <div className="page-wrapper container-fluid">
//       {/* <h2>Add new painiting here!</h2> */}
//       <div className="wrapper">
//         <div className="row">
//           <div className="img-wrapper col-sm-3">            
//           </div>
//           <div className="form-wrapper col-sm-9">
//             <h3 className="title">Painting Info</h3>
//             <form onSubmit={submitHandler}>
//               <div className="input-grp">
//                 <input id="id" type="text" className="form-control" placeholder="Id" ref={idInputRef} required/>
//               </div>
//               <div className="input-grp">
//                 <input id="image" type="url" className="form-control" placeholder="URL" ref={imageInputRef} required/>
//               </div>
//               <div className="input-grp">
//                 <input id="title" type="text" className="form-control" placeholder="Title" ref={titleInputRef} required/>
//               </div>
//               <textarea id="description" className="input-grp form-control" rows="5" cols="50" placeholder="Description" ref={descriptionInputRef} required/>
//               <button className="btn-submit btn btn-primary">Add new Card</button>
//             </form>        
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

function CardForm(props) {
  const [formData, setFormData] = useState({
    id: '',
    image: '',
    title: '',
    description: '',
  });

  //validation
  const [formError, setFormError] = useState(null);

  const handleInputChange = (event) => {
    //destructuring assignment syntax
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
    console.log(name + ' changed to ' + value);
  }


  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    if (formData.title === '') {
      let error = {
        field_name : 'title',
        Message : "Title is required",
      }
      setFormError(error);
    } else {
      setFormError(null);

      //call POST API
      props.onAddCard(formData);
    }
  }

  return (
    <div className="page-wrapper container-fluid">
      {/* <h2>Add new painiting here!</h2> */}
      <div className="wrapper">
        <div className="row">
          <div className="img-wrapper col-sm-3">            
          </div>
          <div className="form-wrapper col-sm-9">
            <h3 className="title">Painting Info</h3>
            <form onSubmit={submitHandler}>
              <div className="input-grp">
                <input id="id" type="number" className="form-control" placeholder="Id"
                name="id"
                value={formData.id}
                onChange={handleInputChange} required/>
              </div>
              <div className="input-grp">
                <input id="image" type="url" className="form-control" placeholder="URL"
                 name="image"
                 value={formData.image}
                 onChange={handleInputChange}  required/>
              </div>
              <div className="input-grp">
                <input id="title" type="text" className="form-control" placeholder="Title"
                 name="title"
                 value={formData.title}
                 onChange={handleInputChange} />
              </div>
              {formError && formError.field_name === 'title' ? <p className="errormsg">{formError.Message}</p> : null}

              <textarea id="description" className="input-grp form-control" rows="5" cols="50" placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}/>

              <button className="btn-submit btn btn-primary">Add new Card</button>
            </form>        
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardForm;
