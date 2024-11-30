import { useState } from "react";
import { Navbar } from "../../component/navbar/Navbar";
// style
import "./style/homepage.scss";
import "../../utils/style/scrollbar.scss"

import { Projects } from "../../component/project/Projects";
import { About } from "../../component/home/About";

// import { Footer } from "../../component/footer/Footer";
interface NavProps {
  about: boolean;
  contact: boolean;
  stacks: boolean;
  resume: boolean;
  portfolio: boolean
}

export const Homepage = () => {
  const [elementsState, setElementsState] = useState<NavProps>({
    about: true,
    stacks: false,
    resume: false,
    contact: false,
    portfolio: false,

  });
  const [isContentFocused, setIsContentFocused] = useState(true)

  const handleElementsAreClicked = (elements: string) => {
    const updatedObject = { ...elementsState } as NavProps;

    for (const key in updatedObject) {
      if (key === elements) {
        updatedObject[key as keyof NavProps] = true;
      } else {
        updatedObject[key as keyof NavProps] = false;
      }
    }
    setElementsState(updatedObject);
    setIsContentFocused(true)
  };

  return (
    <div className="homepage__container">
     { <Navbar handleSwitchElements={handleElementsAreClicked} />}
      <div className="content__container">
        {elementsState.about && isContentFocused && <About />}
        {elementsState.portfolio && isContentFocused && <Projects />}
        {/* {elementsState.contact && <Contact />} */}
        {/* {elementsState.stacks && <Stacks />} */}
      </div>
    </div>
  );
};
