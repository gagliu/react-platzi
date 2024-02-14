import { ReactComponent as CheckSVG } from "./check.svg"; //ASI es como se pueden importar iconos es STANDARD!!
import { ReactComponent as DeleteSVG } from "./delete.svg"; //ASI es como se pueden importar iconos es STANDARD!!

// ESTA SERA NUESTRA PROPIA LIBRERIA DE ICONOS: ESTA IMPORTARA LOS ICONOS COMO TAL

const iconTypes = {
    "check" : <CheckSVG />,
    "delete" : <DeleteSVG />,
}

function TodoIcon( {type} ) {

    console.log(' ---- type ---- ', type);
    console.log(' ---- iconTypes[type] 1 ---- ', iconTypes[type]);
    // console.log(' ---- iconTypes[type] 2 ---- ', ReactDomServer.renderToString(iconTypes[props.type]));
    

    return (
        // El icono en este caso debe ir dentro de span para que el estilo funcione pues asi se planteo desde el principio
        // La clase del span debe ser dinamica, porque debe cambiar la clase pues cada icono debe cambiar posicion y posiblemente color
        <span 
            className={`Icon Icon-svg Icon-${type}`}
        >
            {iconTypes[type]}
            {/* Con esta sintaxis se ahorra una condición. MUY UTIL */}
        </span>
    )
}

export { TodoIcon };