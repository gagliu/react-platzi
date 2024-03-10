import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const {
    setOpenModal
  } = React.useContext(TodoContext);
  
  return (
    <button
      className="CreateTodoButton"
      /* onClick={
        (event) => {
          console.log('le diste click')
          console.log(event)
          console.log(event.target)
        }
      } */
      /* onClick={showModal} */
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
      /* NUEVO: Este metodo permite actualizar el estado openModal con un estado diferente al que ya existia 
      y evita la necesidad de usar una funcion como showModal()*/
    >+</button>
  );
}

export { CreateTodoButton };
