// Fontawsome
import { useEffect, useState } from "react";
import { projectsData } from "../../data/projectsData";
// Style
import "./style/projects.scss";
export const Projects = () => {
  const projectData = projectsData;
  const [loadedImages, setLoadedImages] = useState(0);
  const handleLoadImage = () => {
    setLoadedImages((loadedImages) => loadedImages + 1);
    console.log(loadedImages)
    console.log("yes i am triggered")
  };

  useEffect (() => {setLoadedImages(projectData.length)},[])




  const letRender = () => {
    return (
      <div className="projects__container">
        {projectData.map((i, index) => (
          <a href={i.link} target="_blank" key={Math.random()}>
            <div className="project__card"  key={index}>
              <img
                src={i.image}
                alt="image__thumbnail"
                onLoad={handleLoadImage}
              />
              <h2>{i.name}</h2>
              <h3>{i.role}</h3>
              <div className="stack__wrapper">
                <p>
                  {i.stack.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </p>
              </div>{" "}
              {<div className="stack__wrapper"></div>}
            </div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div>
      {loadedImages === projectData.length ? letRender() : "laoding"}
      </div>
  );
};
