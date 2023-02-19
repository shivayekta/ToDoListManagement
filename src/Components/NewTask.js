import "bootstrap/dist/css/bootstrap.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorsModal from "../UI/ErrorsModal";
import FilterTask from "./FilterdTask";

const NewTask = (props) => {
  const [newTaskItem, setNewTaskItem] = useState({ id: 0, title: "" });
  const [error, setError] = useState(null);

  const OnSubmitHandler = (e) => {
    e.preventDefault();

    if (newTaskItem.title.length === 0) {
      setError({
        status: true,
        title: "Invalid input",
        message: "Please enter task",
      });
      return;
    }
    props.onCompliteSubmit(newTaskItem);
    setNewTaskItem({ id: 0, title: "" });
  };
  const newTaskOnchange = (e) => {
    setNewTaskItem({ id: Math.random().toString(), title: e.target.value });
    setError(null);
  };

  return (
    <>
      <div className="container mx-auto col-8 col-md-6 col-lg-4 mb-2">
        <form onSubmit={OnSubmitHandler} className="form-inline">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add new task"
              aria-label="Add New Task"
              aria-describedby="basic-addon2"
              value={newTaskItem.title}
              onChange={newTaskOnchange}
            ></input>
            <Button type="submit" className="btn bg-success">
              Add Task
            </Button>

            {error && (
              <ErrorsModal
                message={error.message}
                title={error.title}
                show={error.status}
              ></ErrorsModal>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTask;
