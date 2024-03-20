import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        createTodo, 
        setOpenModal
      } = React.useContext(TodoContext);
    
    //El contexto no es necesario de este no es necesario que sea global
    //No todos los componentes lo tienen que saber
    const[newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        createTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para
                el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    onClick={onCancel}
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