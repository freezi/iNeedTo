const NewTaskModal = ({ task, onAddFormSubmit, onAddInputChange }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative shadow-2xl">
          <form
            className="flex flex-col mb-6 py-4 px-8"
            onSubmit={onAddFormSubmit}
          >
            <div className="flex flex-col my-2">
              <label className="mb-2">New Task</label>
              <input
                className="input input-bordered"
                name="task"
                type="text"
                placeholder="Do laundry"
                value={task}
                onChange={onAddInputChange}
              />
            </div>
            <input
              className="my-2 btn btn-primary bg-gradient-to-b from-primary to-secondary"
              type="submit"
              value="Add Task"
              htmlFor="my-modal-4"
              onClick={() => {
                document.getElementById("my-modal-4").click();
              }}
            />
          </form>
        </label>
      </label>
    </div>
  );
};
export default NewTaskModal;
