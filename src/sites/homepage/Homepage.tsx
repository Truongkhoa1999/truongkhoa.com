import { useState } from "react";
import { Navbar } from "../../component/navbar/Navbar";
// style
import "./style/homepage.scss";
import "../../utils/style/scrollbar.scss"

import { Projects } from "../../component/project/Projects";
import { Contact } from "../../component/contact/Contact";
import { Stacks } from "../../component/stacks/Stacks";
import { About } from "../../component/home/About";
import { Chatbox } from "../../component/chatbox/Chatbox";
import { BackwardArrow } from "../../component/navbar/BackwardArrow";
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
    about: false,
    stacks: false,
    resume: false,
    contact: false,
    portfolio: false,

  });
  const [isContentFocused, setIsContentFocused] = useState(false)
  const [currentElementView, setCurrentElementView] = useState('')

  const handleElementsAreClicked = (elements: string) => {
    const updatedObject = { ...elementsState } as NavProps;

    for (const key in updatedObject) {
      if (key === elements) {
        updatedObject[key as keyof NavProps] = true;
        setCurrentElementView(elements.toUpperCase())
      } else {
        updatedObject[key as keyof NavProps] = false;
      }
    }
    setElementsState(updatedObject);
    setIsContentFocused(true)
  };

  return (
    <div className="homepage__container">
     {!isContentFocused && <Navbar handleSwitchElements={handleElementsAreClicked} />}
     {isContentFocused && <BackwardArrow setIsContentFocused={setIsContentFocused} elementTitle={currentElementView}/>}
      {/* <div className="content__container"> */}
        {elementsState.about && isContentFocused && <About />}
        {elementsState.portfolio && isContentFocused && <Projects />}
        {/* {elementsState.contact && <Contact />} */}
        {/* {elementsState.stacks && <Stacks />} */}
      {/* </div> */}
    </div>
  );
};
