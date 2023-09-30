import { useState } from "react";
import { Navbar } from "../../component/navbar/Navbar";

// style
import "./style/homepage.scss";
import { About } from "../../component/about/About";
import { Home } from "../../component/home/Home";
export const Homepage = () => {
  const [isHome, setIsHome] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const handleElementsAreClicked = (elements: string) => {
    if (elements === "home") {
      setIsHome(true);
      setIsAbout(false);
    } else if (elements === "about") {
      setIsHome(false);
      setIsAbout(true);
    }
  };

  return (
    <div className="homepage__container">
      <Navbar handleSwitchElements={handleElementsAreClicked} />
      {isHome ? <Home /> : ""}
      {isAbout ? <About /> : ""}
    </div>
  );
};
