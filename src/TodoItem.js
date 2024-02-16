import './TodoItem.css';
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
// import { GoXCircle } from "react-icons/go";
// import { GoCheck } from "react-icons/go";

function TodoItem(props) {
  
  console.log(' ---- props TodoItem ---- ', props);

  return (
    <li className="TodoItem">

      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      

      {/* Option 2 icons library */}
      {/* <GoCheck
          className={`Icon Icon-check 
          ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}
          type='type'
          // color='green'
      /> */}

      {/* Original code OPTION 1  */}
      {/* <span 
        className={`Icon Icon-check 
        ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
        V
      </span> */}

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />

      {/* Option 2 icons library */}
      {/* <GoXCircle
          className="Icon Icon-delete"
          onClick={props.onDelete}
      /> */}
      {/* Original code OPTION 1  */}
      {/* <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span> */}
    </li>
  );
}

export { TodoItem };