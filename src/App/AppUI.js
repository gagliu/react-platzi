import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
//como el archivo se llama index.js puede abreviarse, es como si se hiciera:
// import { CreateTodoButton } from './CreateTodoButton/index.js'

function AppUI(
    {completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo}
) {

    return (
        <>
          <TodoCounter
            completed={completedTodos}
            total={totalTodos} 
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>
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