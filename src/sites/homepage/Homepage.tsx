import { useState } from "react";
import { Navbar } from "../../component/navbar/Navbar";

// style
import "./style/homepage.scss";
import { About } from "../../component/about/About";
import { Home } from "../../component/home/Home";
import { Projects } from "../../component/project/Projects";
export const Homepage = () => {
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isProject, setIsProject] = useState(false);

  const handleElementsAreClicked = (elements: string) => {
    if (elements === "home") {
      setIsHome(true);
      setIsAbout(false);
      setIsProject(false);
    } else if (elements === "about") {
      setIsHome(false);
      setIsAbout(true);
      setIsProject(false);
    } else if (elements === "project") {
      setIsHome(false);
      setIsAbout(false);
      setIsProject(true);
    }
  };

  return (
    <div className="homepage__container">
      <Navbar handleSwitchElements={handleElementsAreClicked} />
      <div className="content__container">
        {isHome ? <Home /> : ""}
        {isAbout ? <About /> : ""}
        {isProject ? <Projects /> : ""}
      </div>
    </div>
  );
};
