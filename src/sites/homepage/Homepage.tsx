import { useState } from "react";
import { Navbar } from "../../component/navbar/Navbar";

// style
import "./style/homepage.scss";
import { About } from "../../component/about/About";
import { Home } from "../../component/home/Home";
import { Projects } from "../../component/project/Projects";
import { Contact } from "../../component/contact/Contact";
import { Gallery } from "../../component/gallery/Gallery";
import { Stacks } from "../../component/stacks/Stacks";
import { Certificate } from "../../component/certificate/Certificate";
// import { Footer } from "../../component/footer/Footer";
interface NavProps {
  home: boolean;
  about: boolean;
  contact: boolean;
  project: boolean;
  collection: boolean;
  stacks: boolean;
  certificate: boolean;
}

export const Homepage = () => {
  const [elementsState, setElementsState] = useState<NavProps>({
    home: true,
    about: false,
    contact: false,
    project: false,
    collection: false,
    stacks: false,
    certificate: false,
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
  return (
    <div className="homepage__container">
      <Navbar handleSwitchElements={handleElementsAreClicked} />
      <div className="content__container">
        {elementsState.home ? <Home /> : ""}
        {elementsState.about ? <About /> : ""}
        {elementsState.project ? <Projects /> : ""}
        {elementsState.contact ? <Contact /> : ""}
        {elementsState.collection ? <Gallery /> : ""}
        {elementsState.stacks ? <Stacks /> : ""}
        {elementsState.certificate ? <Certificate /> : ""}
      </div>
      {/* <Footer /> */}
    </div>
  );
};
