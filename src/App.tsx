import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./sites/homepage/Homepage";
// style
import "./App.css";
import './style.scss'
import './utils/style/scrollbar.scss'
import { SlideDirectionContext } from "./utils/SlideDirectionContext";
import { useRef, useState,useEffect } from "react";
import { ScreenSize } from "./screen/ScreenSize";


function App() {
  const slideDirectionRef = useRef<string | null>(null);

  const [windowDimensions, setWindowDimensions] = useState({
    wWidth: window.innerWidth,
    wHeight: window.innerHeight
})

useEffect(() => {
    const handleResizeWindowDimensions = ()=>{
        setWindowDimensions({
            wWidth: window.innerWidth,
            wHeight: window.innerHeight,
        })
    }
    window.addEventListener('resize',handleResizeWindowDimensions)
    return(()=>{
        window.removeEventListener('resize',handleResizeWindowDimensions)
    })
},[])

  return (
    <div className={windowDimensions.wWidth <= ScreenSize.extraSmallDesktop.minWidth?"app_container app_container-extraSmallScreen" : "app_container"}>
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
