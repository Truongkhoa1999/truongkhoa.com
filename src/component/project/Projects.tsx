// Fontawsome
import { useEffect, useState } from "react";
import { projectsData } from "../../data/projectsData";
// Style
import "./style/projects.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
export const Projects = () => {
  const projectData = projectsData;
  const [isLoading, setIsLoading] = useState(true);
const outputSlideDirection = useSelector((state: RootState) => state.slideAnimation.outputSlideDirection);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  

  return (
    <div className={outputSlideDirection === 'sr'?"projects__container sr": "projects__container sl"}>
      <div className= "items__wrapper sr" >
      {projectData.map((i, index) => (
        <a href={i.link} target="_blank" key={Math.random()}>
          <div className="project__card" key={index}>
            {isLoading ? (<div className= "item--loading" 
            ></div>) : <img
              src={i.image}
              alt="image__thumbnail"
              className={isLoading?"image--loading":"loadedImage"}
            />}
            <div className="projectInfo">
              {/* <h2>{i.name}</h2> */}
              {/* <h3>{i.role}</h3> */}
              <div className="stack__wrapper">
                <p>
                  {i.stack.map((tech, techIndex) => (
                    <h5 key={techIndex}>{tech}</h5>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
      </div>
   
    </div>
  );


};
