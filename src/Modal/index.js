/* El modal sera general puede servir para todos 
u otra seccion de la app */

import React from "react";
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

function Modal({ children }) {
    /* 
        El compoente modal debe exponer
        (teletransportar) cualquier contenido 
        que le enviemos por dentro
    */
   /*
        Al portal es al cual debemos enviarle el 
        componente que queremos transportar.
        En este caso vamos a mostrar como contenido, 
        cualquier cosa que reciba el componente modal
        Recibe DOS parametros. El contenido a transportar
        y el elemento donde queremos transportarlo.
    */
    return ReactDOM.createPortal(
        /* 
            Esa clase ayudara a dar estilo para que 
            aparezca por encima de la aplicacion
         */
        <div className="Modal">
            {children}
        </div>,
        /* 
            Debemos indicar a cual nodo queremos
            hacer la transportación. Necesitamos otro
            nodo diferent a root, en /public/index.html
         */
        document.getElementById('modal')
    );
}

export { Modal };



