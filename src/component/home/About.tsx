// Style


import "./style/home.scss";
interface AboutProps {
  slideDirectionRef: React.MutableRefObject<string | null>;
}
export const About: React.FC<AboutProps> = ({ slideDirectionRef }) => {
  const slideDirection = slideDirectionRef.current;
  console.log(slideDirection)
  return (
    <div className={slideDirection === "sr" ? "home__container sr" : "home__container sl"}>
      <div className="biotext__container">
        <div className="textGr">
          <h1>KHOA SOFTWARE DEVELOPER</h1>
        </div>
      </div>
    </div>
  );
};
