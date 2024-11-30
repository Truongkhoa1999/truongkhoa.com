// Style


import { useSelector } from "react-redux";
import "./style/home.scss";
import { RootState } from "../redux/store";

export const About = () => {
  const outputSlideDirection = useSelector((state: RootState) => state.slideAnimation.outputSlideDirection);
  const cvFileUrl = "src/assets/CV/cv.pdf"; // Update this path accordingly

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = cvFileUrl;
    link.download = "My_CV.pdf"; // Optional: specify the filename when downloading
    link.click();
  };
 
  return (
    <div className={outputSlideDirection === 'sr' ? "home__container sr": "home__container sl" } >
      <h1 className="aboutTitle">Hello, I am Khoa</h1>
      <h3 className="aboutSubtitle">Software consultant <a href="https://www.happycoding.fi/">@Happy-Coding</a> based in Helsinki 🇫🇮</h3>
      <button className="downloadButton" onClick={handleDownloadClick}>Download CV</button>
    </div>
  );
};
