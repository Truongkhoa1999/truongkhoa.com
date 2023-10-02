import { useState } from "react";
import { Navbar } from "../../component/navbar/Navbar";

// style
import "./style/homepage.scss";
import { About } from "../../component/about/About";
import { Home } from "../../component/home/Home";
import { Projects } from "../../component/project/Projects";
import { Contact } from "../../component/contact/Contact";
export const Homepage = () => {
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const handleElementsAreClicked = (elements: string) => {
    if (elements === "home") {
      setIsAbout(false);
      setIsProject(false);
      setIsContact(false);
      setIsHome(true);
    } else if (elements === "about") {
      setIsHome(false);
      setIsProject(false);
      setIsContact(false);
      setIsAbout(true);
    } else if (elements === "project") {
      setIsHome(false);
      setIsAbout(false);
      setIsContact(false);
      setIsProject(true);

      setIsProject(true);
    } else if (elements === "contact") {
      setIsHome(false);
      setIsAbout(false);
      setIsProject(false);
      setIsContact(true);
    }
  };

  return (
    <div className="homepage__container">
      <Navbar handleSwitchElements={handleElementsAreClicked} />
      <div className="content__container">
        {isHome ? <Home /> : ""}
        {isAbout ? <About /> : ""}
        {isProject ? <Projects /> : ""}
        {isContact ? <Contact /> : ""}
      </div>
    </div>
  );
};
