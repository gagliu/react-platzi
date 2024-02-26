import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  const allCompleted = completed;

  
    
      if (completed > 0 && total == completed ){
        return (<h1 className="TodoCounter">
          Has completado TODOS los TODOs  
          </h1>);
      }

      return (
        <h1 className="TodoCounter">
          Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
      );
}

export { TodoCounter };
