import "devextreme/dist/css/dx.light.css";
import { useState } from "react";

import "./App.css";
import NewTask from "./Components/NewTask";
import TaskList from "./Components/TaksList";

import FilterTask from "./Components/FilterdTask";

function App() {
  const taskList = [
    { id: "1", title: "task 1", status: "Complite" },
    { id: "2", title: "task 2", status: "UnComplite" },
    { id: "3", title: "task 3", status: "Complite" },
    { id: "4", title: "task 4", status: "UnComplite" },
    { id: "5", title: "task 5", status: "UnComplite" },
  ];
  const [tasks, setTasks] = useState(taskList);
  const [prevTask, setPrevTask] = useState(taskList);

  const onDeleteTaskHandler = (id) => {
  
    const updatedTasks1 = prevTask.filter((t) => t.id !== id);
    const updatedTasks2 = tasks.filter((t) => t.id !== id);
    setPrevTask([...updatedTasks1]);
  
    setTasks([...updatedTasks2]);
 
  };
  const onCompliteSubmitHandler = (userInput) => {
  
    const updatedTasks = [...prevTask];

    updatedTasks.push({
      title: userInput.title,
      id: userInput.id,
      status: "UnComplite",
    });
    setPrevTask([...updatedTasks]);
    setTasks([...updatedTasks]);
    
  };
  const filterHandler = (UserFilter) => {
    if (UserFilter == "All") setTasks([...prevTask]);
    else {
      const updatedTasks = prevTask.filter((t) => t.status === UserFilter);

      setTasks([...updatedTasks]);
       
    }
  };
  const OnchkChangeHandler = (e) => {
    const id = e.split(",")[1];
    const status = e.split(",")[0];
 
    const index = tasks.findIndex((t) => t.id === id);

    if (status == "Complite") {
      tasks[index].status = "UnComplite";
    } else if (status == "UnComplite") {
      tasks[index].status = "Complite";
    }
   
    setTasks([...tasks]);
 
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <NewTask
            onCompliteSubmit={onCompliteSubmitHandler}
            className="col-4"
          />
          <FilterTask className="col-4" onFilterHandler={filterHandler} />

          <TaskList
            tasks={tasks}
            onDeleteTaskHandler={onDeleteTaskHandler}
            OnchkChangeHandler={OnchkChangeHandler}
          />
        </div>
      </div>
    </>
  );
}

export default App;
