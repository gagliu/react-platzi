/* El modal sera general puede servir para todos 
u otra seccion de la app */

import React from "react";
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './modal.css';
import { TodoContext } from '../TodoContext';

function Modal({ children }) {
    const {
        openModal, 
        setOpenModal
      } = React.useContext(TodoContext);

    // const openModal = true;
    const showHideClassName = openModal ? "Modal modal display-block" : "Modal modal display-none";

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
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button"
                    onClick={
                        () => {
                          setOpenModal(state => !state);
                        }
                      }
                >
                Close
                </button>
            </section>
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