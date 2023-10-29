import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./sites/homepage/Homepage";
// style
import "./App.css";
import './style.scss'

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
