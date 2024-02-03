// Fontawsome
import { useEffect, useState } from "react";
import { projectsData } from "../../data/projectsData";
// Style
import "./style/projects.scss";
import { detectSwipeDirection } from "../../utils/detectSwipeDirection";
export const Projects = ({destiny}:{destiny: string}) => {
  const projectData = projectsData;
  const [isLoading, setIsLoading] = useState(true);
  const [slideDirection, setSlideDirection] = useState("")
  useEffect(() => {
    const slideDirection = detectSwipeDirection("about", destiny)
    setSlideDirection(slideDirection)
  }, [destiny])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  

  return (
    <div className="projects__container">
      <div className= {slideDirection === "sr"? "items__wrapper sr" : "items__wrapper sl"}>
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
              <h2>{i.name}</h2>
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
