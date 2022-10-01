import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDeleteClick, onToggle }) => {
  return (
    <div
      className={`flex flex-col justify-between px-8 py-4 mb-2 border shadow select-none ${
        task.complete ? "line-through opacity-50" : ""
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3
        style={{ hyphens: "auto" }}
        className="flex justify-between items-center font-bold break-all"
      >
        {task.text}
        <button
          onClick={() => onDeleteClick(task.id)}
          className="inline text-accent cursor-pointer ml-4"
        >
          <FaTimes />
        </button>
      </h3>
    </div>
  );
};
export default Task;
