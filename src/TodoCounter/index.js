import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
      /* Primer argumento debemos enviar cual es el contexto 
      que queremos usar. */
      /* Cualquier información que sea global de la aplicacion
      puede ser un contexto. Podemos tener muchos contextos por ejemplo:
      usuarios, validaciones, autenticación. Sera a criterio
      si vale crear contexttos distintos por organización */
      
      /* No tuvimos que pasar propiedades desde el otro 
      componente, solo tuvimos que llamarlas desde donde
      realmente las necesitamos. Y mejor aun con el 
      useContext es una sintaxis mas sencilla que con el
      .Consumer */
      const {
        completedTodos, 
        totalTodos
      } = React.useContext(TodoContext);
    
      if (completedTodos > 0 && totalTodos == completedTodos ){
        return (<h1 className="TodoCounter">
          Has completado TODOS los TODOs  
          </h1>);
      }

      return (
        <h1 className="TodoCounter">
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
        </h1>
      );
}

export { TodoCounter };
