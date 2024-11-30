import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./sites/homepage/Homepage";
// style
import "./App.scss";
import './style.scss'
import './utils/style/scrollbar.scss'
import { SlideDirectionContext } from "./utils/SlideDirectionContext";
import { useRef } from "react";


function App() {
  const slideDirectionRef = useRef<string | null>(null);

  return (
    <div className="app_container">
      <Router>
        <SlideDirectionContext.Provider value={slideDirectionRef}>
          <Routes>
            <Route path="/*" element={<Homepage />}></Route>
          </Routes>
        </SlideDirectionContext.Provider>

      </Router>
    </div>

  );
}

export default App;
