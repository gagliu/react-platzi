import React from "react";
import { useLocalStorage } from "./useLocalStorage";

/* Asi creamos contextos */
const TodoContext = React.createContext();

/* Estas son las formas para usar el Provider y el Consumer */
{/* 
<TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer> 
*/}

/* Es mejor hacer un Provider personalizado */

/* Esto se hace para:
    1. Tener un nombre mas comodo, sin el punto
    2. Se puede exportar
    3. Dentro de este se puede encapsular logica que queramos COMPARTIR entre varios componentes, de varios niveles

    Es un componente comun y corriente
 */
function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);

    //   console.log(' ---- todos context ---- ', todos);
    
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
        <TodoContext.Provider value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }}>
          {children}
        </TodoContext.Provider>
      );
}

export { TodoContext, TodoProvider }