import { useEffect, useState } from "react";
import { Navbar } from "../../component/navbar/Navbar";
// style
import "./style/homepage.scss";
import "../../utils/style/scrollbar.scss"

import { Projects } from "../../component/project/Projects";
import { Contact } from "../../component/contact/Contact";
import { Stacks } from "../../component/stacks/Stacks";
import { About } from "../../component/home/About";
import { Chatbox } from "../../component/chatbox/Chatbox";
import { ProfileCard } from "../../component/ProfileCard/ProfileCard";
import { BodyContent } from "../../component/BodyContent/BodyContent";
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

  const [winWidth, setWinWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
      console.log("Current window width:", window.innerWidth); // Log width on every resize
    };

    // Set up event listener
    window.addEventListener('resize', handleResize);

    // Initial log
    console.log("Initial window width:", window.innerWidth);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(()=>{
    console.log('dittme may')
  },[])

  return (
    <div className="homepage__container">
      {/* <Navbar handleSwitchElements={handleElementsAreClicked} /> */}
        <ProfileCard />
        <BodyContent />
        {/* <div>
        <p>{winWidth}</p>
        </div> */}
        {/* {elementsState.about ? <About   /> : ""} */}
        {/* {elementsState.portfolio ? <Projects  /> : ""} */}
        {/* {elementsState.contact ? <Contact  /> : ""} */}
        {/* {elementsState.stacks ? <Stacks   /> : ""} */}

      {/* <Chatbox /> */}
      {/* <Footer /> */}
    </div>
  );
};
