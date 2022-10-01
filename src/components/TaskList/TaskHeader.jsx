const TaskHeader = ({ title }) => {
  return (
    <header className="flex justify-between items-center py-4 px-8 mb-4">
      <h1 className="font-black normal-case text-xl">{title}</h1>
      <label
        htmlFor="my-modal-4"
        className="btn btn-primary bg-gradient-to-b from-primary to-secondary modal-button"
      >
        New
      </label>
    </header>
  );
};

TaskHeader.defaultProps = {
  title: "iNeedTo",
};

export default TaskHeader;
