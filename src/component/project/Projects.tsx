// Fontawsome
import { projectsData } from "../../data/projectsData";
// Style
import "./style/projects.scss";
export const Projects = () => {
  const projectData = projectsData;
  return (
    <div className="projects__container">
      {projectData.map((i, index) => (
        <a href={i.link} target="_blank">
          <div className="project__card" key={index}>
            <img src={i.image} alt="image__thumbnail" />
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
      {/* <LanguageCounts /> */}
    </div>
  );
};
