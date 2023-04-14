function Modal(props) {
  function confirmHandler() {
   props.onConfirm();
  }

  function cancelHandler() {
   props.onCancel();
  }
  return (
    <div className="overlay">
      <h1>Do you want to delete?</h1>
      <div className="actions">
        <button onClick={confirmHandler}>yes</button>
        <button onClick={cancelHandler}>cancel</button>
      </div>
    </div>
  );
}

export default Modal;