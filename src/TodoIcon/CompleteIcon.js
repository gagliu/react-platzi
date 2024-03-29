import React from "react";
import { TodoIcon } from ".";

function CompleteIcon ({completed, onComplete}) {

    return (
        <TodoIcon
            type="check"
            color={completed ? 'green' : 'gray'} 
            /* completed entra como true o false, es mejor hacer el if, no user objeto como antes */
            /* Este color es el del ESTADO INICIAL, y no se aplica en archivo .css sino enviando la pr
            piedad en el componente */
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };