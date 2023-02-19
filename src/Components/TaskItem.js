import Button from "../UI/Button";
import { useState } from "react";


const TaskItem = (props) => {
  const [status, setStatus] = useState();
 
  const onDeleteTaskHandler = (e) => {
    props.onDeleteTaskHandler(e.target.id);
  };
  const cheChangeHandler = (e) => {
    if (status == "Complite") setStatus("UnComplite");
    else if (status == "UnComplite") setStatus("Complite");
    props.OnchkChangeHandler(e.target.value);
  };
  
  return (
  
      <li className={"list-group-item list-group-item-action task-" + props.task.status}>
        <input
          type="checkbox"
          checked={props.task.status == "Complite" ? true : false}
          value={props.task.status + "," + props.task.id}
          className="form-check-input me-1"
          onChange={cheChangeHandler}
          key={props.task.id}
        />
        {props.task.title}

        <Button
          onClick={onDeleteTaskHandler}
          id={props.task.id}
          className="button buttonTask"
        >
          Delete
        </Button>
      </li>
    
     
  );
};

export default TaskItem;
