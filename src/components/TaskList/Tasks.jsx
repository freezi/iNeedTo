import Task from "./Task";

const Tasks = ({ tasks, onDeleteClick, onToggle }) => {
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

export default Tasks;
