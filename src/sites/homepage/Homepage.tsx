import { useEffect, useState } from "react";
import { Navbar } from "../../component/navbar/Navbar";
// style
import "./style/homepage.scss";
import "../../utils/style/scrollbar.scss";

import { Projects } from "../../component/project/Projects";
import { Contact } from "../../component/contact/Contact";
import { Stacks } from "../../component/stacks/Stacks";
import { About } from "../../component/home/About";
import { Chatbox } from "../../component/chatbox/Chatbox";
import { AppBar } from "../../component/navbar/AppBar";
// import { Footer } from "../../component/footer/Footer";
interface NavProps {
  about: boolean;
  contact: boolean;
  stacks: boolean;
  resume: boolean;
  portfolio: boolean;
}

export const Homepage = () => {
  const [elementsState, setElementsState] = useState<NavProps>({
    about: true,
    stacks: false,
    resume: false,
    contact: false,
    portfolio: false,
  });
  const handleScrolling = () => {
    const isScrolling = window.scrollY > 0;
    setIsScrolled(isScrolling);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  return (
    <div className="homepage__container">
      <AppBar isScrolled={isScrolled} />
      <div className="content__container">
        {elementsState.about ? <About /> : ""}
        {elementsState.portfolio ? <Projects /> : ""}
        {elementsState.contact ? <Contact /> : ""}
        {elementsState.stacks ? <Stacks /> : ""}
      </div>
      <Chatbox />
      {/* <Footer /> */}
    </div>
  );
};
