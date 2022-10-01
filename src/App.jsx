import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import "@fontsource/farro";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Navbar title="iNeedTo" />
      <TaskList />
    </div>
  );
}

export default App;
