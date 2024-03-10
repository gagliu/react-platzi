import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
      } = React.useContext(TodoContext);
    
    console.log(' ---- openModal ---- ', openModal );

    return (
        <>
          <TodoCounter/>
          <TodoSearch/>
          <TodoList>
            { loading && <TodosLoading/>}
            { error && <TodosError/>}
            { ( !loading && searchedTodos.length === 0) &&  <EmptyTodos/>}

            {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
           </TodoList>
          
          <CreateTodoButton />

          {/* Debe haber un estado que nos indique si abrir
          el modal o no */}
          {openModal && (
              <Modal >
                  Funcionalidad de agregar todos
              </Modal>
          )}
        </>
      );   
}

export { AppUI };