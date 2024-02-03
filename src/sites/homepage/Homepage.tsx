import { useState } from "react";
import { Navbar } from "../../component/navbar/Navbar";

// style
import "./style/homepage.scss";
import { Projects } from "../../component/project/Projects";
import { Contact } from "../../component/contact/Contact";
import { Stacks } from "../../component/stacks/Stacks";
import { About } from "../../component/home/About";
import { useSlideDirection } from "../../utils/SlideDirectionContext";
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

  };
  const slideDirectionRef = useSlideDirection();

  return (
    <div className="homepage__container">
      <Navbar handleSwitchElements={handleElementsAreClicked} />
      <div className="content__container">
        {elementsState.about ? <About slideDirectionRef={slideDirectionRef}  /> : ""}
        {elementsState.portfolio ? <Projects  /> : ""}
        {elementsState.contact ? <Contact  /> : ""}
        {elementsState.stacks ? <Stacks slideDirectionRef={slideDirectionRef}  /> : ""}
      </div>
      {/* <Footer /> */}
    </div>
  );
};
