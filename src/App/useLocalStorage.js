import React from 'react';

//Por convencion se debe empezar con use para diferenciar funciones de customhooks
//Esta funcion debe contener todo lo relacionado con localStorage
//La idea es que pueda recibir cualquier tipo de informacion, para eso el initialValue
//Por convencion se debe empezar con use para diferenciar funciones de customhooks
//Esta funcion debe contener todo lo relacionado con localStorage
//La idea es que pueda recibir cualquier tipo de informacion, para eso el initialValue
function useLocalStorage(itemName, initialValue) {

    console.log(' ---- itemName ---- ', itemName);
    console.log(' ---- initialValue ---- ', initialValue);

    //Itemname es el elemento o informacion a guardar en localstorage
  
    //todo para localstorage es item
    //Desde el customhook debemos poder entregarle al componente una forma de obtenet la iformacion
    
    
    // console.log(' ---- localStorageItems ---- ', localStorageItem);
  

    //Crear estado interno del customhook
    //como va a ser asyncrono
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    //Esto va a ser asyncrono
    //Si guardamos algo en un efecto no se ejecuta en el mismo orden de siempre, 
    //se ejecuta al FINAL y si se envia un segundo argumento, el contenido
    //del efecto solo se ejecutara una vez.
    //Si se le envia un segundo argumento al efecto, el contenido del efecto se
    //volvera a ejecutar cada vez que el estado ingresado cambie.
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
    
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify([]));
                    parsedItem = [];
                } else {
                    parsedItem = JSON.parse(localStorageItem); //Los todos vienen como string, debe hacerse parse para que se vuelva un array
                    setItem(parsedItem);
                }
    
                setLoading(false);
                
            } catch (error) {
                setError(true);
                setLoading(true);
            }
        }, 2000);
    }, []);
  
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    console.log(' ---- item result ---- ', item);
  
    //Los custom hooks deben retornar o un objeto o un array etc
    //En nuestro caso queremos utilizar o retornar la funcion saveItem, y el item, que en este caso son los todos
    
    //si hay mas de dos elementos para retornar es mejor enviar un objeto
    return {
        item, 
        saveItem, 
        loading, 
        error
    };
}

export { useLocalStorage };