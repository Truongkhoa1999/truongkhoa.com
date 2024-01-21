// Fontawesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// Style
import "./style/navbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { handleSwitchStack } from "../../utils/handleSwitchStack";
interface NavProps {
  handleSwitchElements: (element: string) => void;
}
export const Navbar: React.FC<NavProps> = ({ handleSwitchElements }) => {
  const [activeElement, setActiveElement] = useState("about");
  // const [isStackExtendsVisible, setStackExtendsVisible] = useState(false);
  let navigate = useNavigate();

  const handleSwitchStack = (stackTitle:string) => {
    navigate(`homepage/stacks/${stackTitle}`)
}
  const handleElmentClicked = (element: string) => {
    setActiveElement(element);
    handleSwitchElements(element);
    handleSwitchStack("Frontend")
    // element === "stacks"? chageStackExtendVisibility(false) :chageStackExtendVisibility(true)

  };

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
                  handleElmentClicked("home");
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
