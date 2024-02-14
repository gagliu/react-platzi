import React from "react";
import { TodoIcon } from "./TodoIcon";

function DeleteIcon () {
    return (
        <TodoIcon
            type="delete"
            color="red" //Esta propiedad debe ser dinamica
        />
    );
}

export { DeleteIcon };