import React from 'react';

//Por convencion se debe empezar con use para diferenciar funciones de customhooks
//Esta funcion debe contener todo lo relacionado con localStorage
//La idea es que pueda recibir cualquier tipo de informacion, para eso el initialValue
//Por convencion se debe empezar con use para diferenciar funciones de customhooks
//Esta funcion debe contener todo lo relacionado con localStorage
//La idea es que pueda recibir cualquier tipo de informacion, para eso el initialValue
function useLocalStorge(itemName, initialValue) {
    //Itemname es el elemento o informacion a guardar en localstorage
  
    //todo para localstorage es item
    //Desde el customhook debemos poder entregarle al componente una forma de obtenet la iformacion
    
  
    const localStorageItem = localStorage.getItem(itemName);
    console.log(' ---- localStorageItems ---- ', localStorageItem);
  
    let parsedItem;
  
    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify([]));
        parsedItem = [];
    } else {
        parsedItem = JSON.parse(localStorageItem); //Los todos vienen como string, debe hacerse parse para que se vuelva un array
    }
  
    //Crear estado interno del customhook
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }
  
    //Los custom hooks deben retornar o un objeto o un array etc
    //En nuestro caso queremos utilizar o retornar la funcion saveItem, y el item, que en este caso son los todos
    return [item, saveItem];
}

export { useLocalStorge };