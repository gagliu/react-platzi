import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        createTodo, 
        setOpenModal,
        createTodoValue,
        setCreateTodoValue
        
      } = React.useContext(TodoContext);
    
    //createTodo

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(' ---- event ---- ', createTodoValue);
            createTodo(createTodoValue);
            setOpenModal(false);
            setCreateTodoValue('');
          }}>
            <label>Escribe un nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para
                el almuerzo"
                value={createTodoValue}
                 onChange={(event) => {
                     setCreateTodoValue(event.target.value);
                  }}
            />
            <div className="TodoForm-buttonContainer">
                <button onClick={
                            () => {
                            setOpenModal(state => !state);
                            }
                        }
                    className="TodoForm-button 
                    TodoForm-button--cancel"
                >Cancelar</button>
                <button
                    className="TodoForm-button 
                    TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };