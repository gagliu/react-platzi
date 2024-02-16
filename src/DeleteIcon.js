import React from "react";
import { TodoIcon } from "./TodoIcon";

/* onDelete es una funcion creada en App.js para eliminar todos */
function DeleteIcon ({onDelete}) {
    return (
        <TodoIcon
            type="delete"
            color="gray" //Esta propiedad debe ser dinamica
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };