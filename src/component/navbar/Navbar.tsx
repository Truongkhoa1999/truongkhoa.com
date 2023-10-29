// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// Style
import "./style/navbar.scss";
import { useState } from "react";
interface NavProps {
  handleSwitchElements: (element: string) => void;
}
export const Navbar: React.FC<NavProps> = ({ handleSwitchElements }) => {
  const [activeElement, setActiveElement] = useState("home")

  const handleElmentClicked = (element: string) => {
    setActiveElement(element)
    handleSwitchElements(element)
  }


  return (
    <div className="navbar__container">
      <h1 className="logo" onClick={() => handleSwitchElements("home")}>TRUONG KHOA</h1>
      <div className="ul__container">
        <ul>
          <li className={activeElement === "home" ? "li-active" : "li-inactive"} onClick={() => { handleElmentClicked("home") }}>Home</li>
          <li className={activeElement === "about" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("about")}>About</li>
          <li className={activeElement === "stacks" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("stacks")}>Stacks</li>
          <li className={activeElement === "contact" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("contact")}>Contact</li>
          <li className={activeElement === "project" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("project")}>Projects</li>
          <li className={activeElement === "collection" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("collection")}>collection</li>
          <li className={activeElement === "certificate" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("certificate")}>certificate</li>
        </ul>
      </div>
      <div className="ic_container">
        <a
          href="https://www.linkedin.com/in/khoa-truong-010999/"
          target="_blank"
        >
          <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/Truongkhoa1999" target="_blank">
          <FontAwesomeIcon className="fa" icon={faGithub} />
        </a>
      </div>
    </div>
  );
};
