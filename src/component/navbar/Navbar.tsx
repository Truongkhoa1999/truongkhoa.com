// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// Style
import "./style/navbar.scss";
interface NavProps {
  handleSwitchElements: (element: string) => void;
}
export const Navbar: React.FC<NavProps> = ({ handleSwitchElements }) => {
  return (
    <div className="navbar__container">
      <h1>TRUONG KHOA</h1>
      <div className="ul__container">
        <ul>
          <li onClick={() => handleSwitchElements("home")}>Home</li>
          <li onClick={() => handleSwitchElements("about")}>About</li>
          <li onClick={() => handleSwitchElements("project")}>Projects</li>
          <li onClick={() => handleSwitchElements("contact")}>Contact</li>
          <li>Gallery</li>
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
