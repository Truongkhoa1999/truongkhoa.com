// Style


import { useSelector } from "react-redux";
import "./style/home.scss";
import { RootState } from "../redux/store";

export const About = () => {
  const outputSlideDirection = useSelector((state: RootState) => state.slideAnimation.outputSlideDirection);
 
  return (
    <div className={outputSlideDirection === 'sr' ? "home__container sr": "home__container sl" } >
      <h1 className="aboutTitle">Hello, I am Khoa</h1>
      <h3 className="aboutSubtitle">Software consultant @Happy-Coding based in Helsinki 🇫🇮</h3>
    </div>
  );
};
