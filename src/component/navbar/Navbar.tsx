// Style

import { useDispatch } from "react-redux";
import "./style/navbar.scss";
import { useRef, useState } from "react";
import { determineSlideDirection } from "../redux/Reducer/slideAnimationSlice";

interface NavProps {
  handleSwitchElements: (element: string) => void;
}
export const Navbar: React.FC<NavProps> = ({ handleSwitchElements }) => {
  const activeElementRef = useRef("about");

  const [activeElement, setActiveElement] = useState("about");
  const dispatch = useDispatch();
  const handleElmentClicked = (destinySite: string) => {
    const previousSite = activeElementRef.current;
    activeElementRef.current = destinySite;
    setActiveElement(destinySite);
    handleSwitchElements(destinySite);
    dispatch(determineSlideDirection({ previousSite, destinySite }));
  };

  return (
    <div className="navbar__container">
      <div className="ul__container">
        <ul>
          <li
            className={activeElement === "about" ? "li-active" : "li-inactive"}
            onClick={() => {
              handleElmentClicked("about");
            }}
          >
            ABOUT
          </li>
          <li
            className={activeElement === "stacks" ? "li-active" : "li-inactive"}
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
