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

//como el archivo se llama index.js puede abreviarse, es como si se hiciera:
// import { CreateTodoButton } from './CreateTodoButton/index.js'

/* 
Este componente recibe muchos parametros pero no los usa como tal, 
sino que se los debe pasar a otros componentes, eso es lo que queremos
evitar.
*/
function AppUI() {

    return (
        <>
          {/* Eliminaresmo las propiedades aca tmbn. Solo los llamaremos y ya.
              Despues requeriremos las propiedades con el context
           */}
          <TodoCounter/>
          <TodoSearch/>
          
          <TodoContext.Consumer>
              {/* 
                Render props
                Espera una función
                La funcion debe retornar los componentes
              */}
              {({
                  /* Acá se reciben todas las propiedades que se están necesitando */
                  loading,
                  error,
                  searchedTodos,
                  completeTodo,
                  deleteTodo
              }) => (
                  /* La funcion */
                  <TodoList>
                      { loading && <TodosLoading/>}
                      { error && <TodosError/>}
                      { ( !loading && searchedTodos.length == 0) &&  <EmptyTodos/>}

                      {searchedTodos.map(todo => (
                          <TodoItem
                              text={todo.text}
                              onComplete={() => completeTodo(todo.text)}
                              onDelete={() => deleteTodo(todo.text)}
                          />
                      ))}
                  </TodoList>
              )}

              
          </TodoContext.Consumer>
          
          <CreateTodoButton />
        </>
      );   
}

export { AppUI };