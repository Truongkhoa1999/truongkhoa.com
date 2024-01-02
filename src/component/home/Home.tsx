// Style

import "./style/home.scss";
import background from "../../assets/video/bk.mp4";

export const Home = () => {
  return (
    <div className="home__container">
      {/* <video autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video> */}
      <div className="background"></div>
      <div className="biotext__container">
        <div className="textGr">
          <h1 className="typorgraphy">TRUONG KHOA </h1>
          <h2> FULLSTACK DEVELOPER AND UI DESIGNER</h2>
          <h3 className="description">
            TypeScript JavaScript HTML SCSS JAVA C# PostgreSQL MongoDB AWS .NET
          </h3>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/KhoaSoftwateEngineerCV.pdf?alt=media&token=cea3f77e-762c-41b4-a815-c901c369c38d"
            className="viewbutton"
            target="_blank"
          >
            View Resume
          </a>
        </div>
      </div>
      <p className="Source">WWDC-2019</p>
    </div>
  );
};
