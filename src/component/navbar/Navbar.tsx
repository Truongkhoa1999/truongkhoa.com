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
  const [activeElement, setActiveElement] = useState("about")

  const handleElmentClicked = (element: string) => {
    setActiveElement(element)
    handleSwitchElements(element)
  }


  return (
    <div className="navbar__container">
      <div className="info__container">
        <h1 className="logo" onClick={() => handleSwitchElements("about")}>TRUONG KHOA</h1>
        <img className="profile__img" src="https://scontent.fqlf1-2.fna.fbcdn.net/v/t1.6435-9/32328503_955490277960818_3178805510241517568_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=gNk9qd6JU8sAX_bhfnP&_nc_ht=scontent.fqlf1-2.fna&oh=00_AfC2pjkrFk7_frUSHbIoRh1ykRjvi7KtaL0_sNX84NcXSw&oe=6582F676" alt="avatar" />
        <p className="profile__bio">Hi I am Khoa, I like to craft solid and salable full-stack projects.</p>
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
          <li className={activeElement === "about" ? "li-active" : "li-inactive"} onClick={() => { handleElmentClicked("home") }}>ABOUT</li>
          <li className={activeElement === "stacks" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("stacks")}>STACKS</li>
          {/* <li className={activeElement === "resume" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("resume")}>RESUME</li> */}
          <li className={activeElement === "contact" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("contact")}>CONTACT</li>
          <li className={activeElement === "portfolio" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("portfolio")}>PORTFOLIO</li>
          {/* <li className={activeElement === "collection" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("collection")}>collection</li>
          <li className={activeElement === "certificate" ? "li-active" : "li-inactive"} onClick={() => handleElmentClicked("certificate")}>certificate</li> */}
        </ul>
      </div>

    </div>
  );
};
