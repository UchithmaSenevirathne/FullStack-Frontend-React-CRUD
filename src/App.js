import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import { Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
<Routes>
<Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
</Routes>
      </Router>
    </div>
  );
}

export default App;
