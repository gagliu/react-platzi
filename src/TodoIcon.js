import { ReactComponent as CheckSVG } from "./check.svg"; //ASI es como se pueden importar iconos es STANDARD!!
import { ReactComponent as DeleteSVG } from "./delete.svg"; //ASI es como se pueden importar iconos es STANDARD!!
import "./TodoIcon.css";

// ESTA SERA NUESTRA PROPIA LIBRERIA DE ICONOS: ESTA IMPORTARA LOS ICONOS COMO TAL

const iconTypes = {
    "check" :  (color) => <CheckSVG  className="Icon-svg"  fill={color}/>, /* Se pueden agregar las clases aca al llamar al componente y se agregaran en los iconos en check.svg */ 
    "delete" : (color) => <DeleteSVG  className="Icon-svg" fill={color} />, /* Se puede tomar cada valor del objeto como una funcion y pasarle un parametro, en este caso el color del icono */
}

/* Cada uno de los iconos (CompleteIcon o DeleteIcon) debe traducir sus eventos a una propiedad llamada onClick */

function TodoIcon( {type, color, onClick} ) {

    // console.log(' ---- type ---- ', type);
    // console.log(' ---- iconTypes[type] 1 ---- ', iconTypes[type]);
    // console.log(' ---- iconTypes[type] 2 ---- ', ReactDomServer.renderToString(iconTypes[props.type]));
    
    return (
        // El icono en este caso debe ir dentro de span para que el estilo funcione pues asi se planteo desde el principio
        // La clase del span debe ser dinamica, porque debe cambiar la clase pues cada icono debe cambiar posicion y posiblemente color
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
            {/* Como cada elemento de icontypes se definio como una funcion, se le puede pasar un argumento a la funcion */}
            {/* Con esta sintaxis se ahorra una condición. MUY UTIL */}
        </span>
    )
}

export { TodoIcon };