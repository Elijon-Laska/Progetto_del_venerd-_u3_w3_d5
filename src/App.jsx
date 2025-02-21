import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <MainSection />
      </div>
      <Player />
    </div>
  );
};

export default App;
