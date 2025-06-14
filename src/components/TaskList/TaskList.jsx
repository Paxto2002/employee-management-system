import React from "react";
import NewTasks from "./NewTasks";
import InProgress from "./InProgress";
import CompletedTasks from "./CompletedTasks";
import OverdueTasks from "./OverdueTasks";

const TaskList = ({ tasks }) => {
  return (
    <div id="tasklist" className="w-full mt-10">
      <NewTasks tasks={tasks} />
      <InProgress tasks={tasks} />
      <CompletedTasks tasks={tasks} />
      <OverdueTasks tasks={tasks} />
    </div>
  );
};

export default TaskList;
