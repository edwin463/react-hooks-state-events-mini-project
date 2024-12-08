import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task 
          key={task.text} // Unique key prop for each task
          text={task.text} 
          category={task.category} 
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;