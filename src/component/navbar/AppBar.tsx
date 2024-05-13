import { HamburgerButton } from "./HamburgerButton";
import "./style/appbar.scss"
interface IAppBar {
  isScrolled: boolean
}
export const AppBar = ({ isScrolled }: IAppBar) => {
  console.log(isScrolled)
  return (
    <div className={isScrolled ? "appBar_container appBar_container-scrolled" : "appBar_container"}>
      <h1 className="appBar_logo">TKhoa</h1>
      <HamburgerButton />
      <ul className="appBar_menu">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

