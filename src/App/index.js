import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

localStorage.removeItem('TODOS_V1');
const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el Curso de Intro a React.js', completed: false },
    { text: 'Llorar con la Llorona', completed: false },
    { text: 'LALALALALA', completed: false },
    { text: 'Usar estados derivados', completed: true },
];

// localStorage no puede guardar estructuras complejas, solo puede guardar strings
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  //La funcion setTodos permite actualizar el listado inicial de acuerdo a cambios que se presenten en la UI
  // const [todos, setTodos] = React.useState(parsedTodos); //la variable todos se define o inicializa de defaultTodos
  //llamamos directamente el customhook que ya usa React.useState(parsedTodos);
  //Tampoco es necesario enviar la varable parsedTodos en useLocalStorage() porque esa funcion ya 
  //Se inicializa tambien React.useState(parsedItem); con parsedItem
  //saveTodos es la misma que saveItem, y podemos nombrarla como queramos teniendo en cuenta que 
  //es el segundo elemento retornado
  
  //Como se esta importando un objeto en useLocalStorage, toca poner alias
  //no funciona como antes
  const {
    item: todos,
    saveItem: saveTodos, //saveItem
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  console.log(' ---- todos before filter ---- ', todos);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
      todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter(
      (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
      }
  );

  const completeTodo = (text) => {
      const newTodos = [...todos]; //TODO - PROBAR con todos solos. Es mejor hacer solo una copia? para que newTodos no varie con todos
      
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      )
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]; //TODO - PROBAR con todos solos. Es mejor hacer solo una copia? para que newTodos no varie con todos
    
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    // newTodos[todoIndex].completed = true;
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
  // console.log('Los usuarios buscan todos de ' + searchValue);
}

export default App;
