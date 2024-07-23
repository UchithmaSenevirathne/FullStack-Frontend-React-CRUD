import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import { Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      </Router>
    </div>
  );
}

export default App;
