
// Style
import { useSlideDirection } from "../../utils/SlideDirectionContext";
import { detectSwipeDirection } from "../../utils/detectSwipeDirection";
import "./style/navbar.scss";
import { useEffect, useRef, useState } from "react";

interface NavProps {
  handleSwitchElements: (element: string) => void;
}
export const Navbar: React.FC<NavProps> = ({ handleSwitchElements }) => {
  const [activeElement, setActiveElement] = useState("about");
  const [currentSite, setCurrentSite] = useState ("about")
  const [destiny, setDestiny] = useState("")
  const slideDirectionRef = useSlideDirection()
  const handleElmentClicked = (element: string) => {
    setActiveElement(element);
    handleSwitchElements(element); 
    setCurrentSite(element)
    if(element !== currentSite){
      setDestiny(element)
    }
  };
useEffect (() =>{
  slideDirectionRef.current = detectSwipeDirection(currentSite,destiny)
}, [currentSite] )
  return (
    <div
      className="navbar__container"
    >
      
          <div className="ul__container">
            <ul>
              <li
                className={
                  activeElement === "about" ? "li-active" : "li-inactive"
                }
                onClick={() => {
                  handleElmentClicked("about");
                }}
              >
                ABOUT
              </li>
              <li
                className={
                  activeElement === "stacks" ? "li-active" : "li-inactive"
                }
                onClick={() => handleElmentClicked("stacks")}
              >
                STACKS
              </li>
              <li
                className={
                  activeElement === "contact" ? "li-active" : "li-inactive"
                }
                onClick={() => handleElmentClicked("contact")}
              >
                CONTACT
              </li>
              <li
                className={
                  activeElement === "portfolio" ? "li-active" : "li-inactive"
                }
                onClick={() => handleElmentClicked("portfolio")}
              >
                PORTFOLIO
              </li>
            </ul>
          </div>
        </div>
      
  );
};
