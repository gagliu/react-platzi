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
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo
      } = React.useContext(TodoContext);

    return (
        <>
          {/* Eliminaresmo las propiedades aca tmbn. Solo los llamaremos y ya.
              Despues requeriremos las propiedades con el context
           */}
        
          <TodoCounter/>
          <TodoSearch/>
          <TodoList>
            { loading && <TodosLoading/>}
            { error && <TodosError/>}
            { ( !loading && searchedTodos.length == 0) &&  <EmptyTodos/>}

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
        </>
      );   
}

export { AppUI };