import { useState } from "react";
import Modal from "./Modal";

function Todo(props) {
  const [isModelOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  };

  function closeHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h1>{props.title}</h1>
      <div className="actions">
        <button onClick={deleteHandler}>Delete</button>
      </div>
      {isModelOpen && <Modal onConfirm={closeHandler} onCancel={closeHandler}/>}
    </div>
  );
}

export default Todo;