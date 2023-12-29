// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isStackExtendsVisible, setStackExtendsVisible] = useState(false);
  let navigate = useNavigate();

  const handleSwitchStack = (stackTitle:string) => {
    navigate(`/homepage/stacks/${stackTitle}`)
}
  const handleElmentClicked = (element: string) => {
    setActiveElement(element);
    handleSwitchElements(element);
    element === "stacks"? chageStackExtendVisibility(false) :chageStackExtendVisibility(true)

  };
  const changeNavVisbislity = (isNavbarVisible: boolean) => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  const chageStackExtendVisibility = (isStackExtendsVisible: boolean) => {
    setStackExtendsVisible(!isStackExtendsVisible);
  };

  return (
    <div
      className={
        isNavbarVisible
          ? "navbar__container-active "
          : "navbar__container-deactive navbar__container"
      }
    >
      <button
        className="hamburger__button"
        onClick={() => {
          changeNavVisbislity(isNavbarVisible);
        }}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      {isNavbarVisible ? (
        <div>
          <div className="info__container">
            <h1 className="logo" onClick={() => handleSwitchElements("about")}>
              TRUONG KHOA
            </h1>
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
              {isStackExtendsVisible ? (
                <div className="drop__menu">
                <li onClick={() => handleSwitchStack("Frontend") } className="option">Frontend</li>
                <li onClick={() => handleSwitchStack("Backend") } className="option">Backend</li>
                <li onClick={() => handleSwitchStack("Database") } className="option">Databse</li>
                <li onClick={() => handleSwitchStack("Cloud") } className="option">Cloud</li>
                <li onClick={() => handleSwitchStack("DevOps") } className="option">Devops</li>
                </div>
              ) : (
                ""
              )}
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
      ) : (
        ""
      )}
    </div>
  );
};
