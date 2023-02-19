import "./TaskList.css";
import "./tailwind.css";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const onDeleteTaskHandler = (e) => {
    props.onDeleteTaskHandler(e);
  };
  const OnchkChangeHandler = (e) => {
    props.OnchkChangeHandler(e);
  };
 
  return (
    <>
      <div className="container bg-secondary">
        <div className="row mx-auto col-10 col-md-8 col-lg-6"></div>
        <ul className="list-group">
          {props.tasks.map((t) => (
            <TaskItem
            key={t.id}
              onDeleteTaskHandler={onDeleteTaskHandler}
              task={t}
              OnchkChangeHandler={OnchkChangeHandler}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
