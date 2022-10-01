import { useState, useEffect } from "react";
import TaskHeader from "./TaskList/TaskHeader";
import Tasks from "./TaskList/Tasks";
import NewTaskModal from "./TaskList/NewTaskModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskList = () => {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (task !== "") {
      setTasks([
        ...tasks,
        {
          id: new Date(),
          text: task.trim(),
          complete: false,
        },
      ]);
      toast.success("Task added!");
    }
    setTask("");
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  const handleDeleteClick = (id) => {
    const removeItem = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(removeItem);
    toast.success("Task deleted!");
  };

  return (
    <main className="App m-16 p-8 mx-auto max-w-xl flex flex-col justify-center border shadow">
      <ToastContainer />
      <TaskHeader title="Current Tasks" />
      <NewTaskModal
        task={task}
        onAddInputChange={handleAddInputChange}
        onAddFormSubmit={handleAddFormSubmit}
      />
      <Tasks
        tasks={tasks}
        onDeleteClick={handleDeleteClick}
        onToggle={toggleStatus}
      />
    </main>
  );
};
export default TaskList;
