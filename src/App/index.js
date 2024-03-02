import React from 'react';
import { AppUI } from './AppUI';
import { TodoContext, TodoProvider } from '../TodoContext';

function App() {

  return (
    <TodoProvider>
        {/* 
            AppUI va a ser enviado como children TodoProvider.
            AppUI y todos los componentes hijos van a tener acceso a la informacion que tenemos en el TodoContext
        */}
        <AppUI/>
    </TodoProvider>
  );
  // console.log('Los usuarios buscan todos de ' + searchValue);
}

export default App;
