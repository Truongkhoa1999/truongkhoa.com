import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./sites/homepage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/*" element={<Homepage />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
