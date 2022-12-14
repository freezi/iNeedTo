import Task from "./Task";

const TaskContainer = ({ tasks, onDeleteClick, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteClick={onDeleteClick}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default TaskContainer;
