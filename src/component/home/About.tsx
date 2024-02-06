// Style


import { useSelector } from "react-redux";
import "./style/home.scss";
import { RootState } from "../redux/store";

export const About = () => {
  const outputSlideDirection = useSelector((state: RootState) => state.slideAnimation.outputSlideDirection);
 
  return (
    <div className={outputSlideDirection === 'sr' ? "home__container sr": "home__container sl" } >
      <div className="biotext__container">
        <div className="textGr">
          <h1>KHOA SOFTWARE DEVELOPER</h1>  
        </div>
      </div>
    </div>
  );
};
