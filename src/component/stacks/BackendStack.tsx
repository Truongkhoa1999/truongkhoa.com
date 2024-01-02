import { useState } from "react";
import "./style/frontendstack.scss";
import { ExpandedCertificate } from "../certificate/ExpandedCertificate";
export const BackendStack = () => {
  const [isExpandedCertificate, setIsExpandedCertificate] = useState(false);

  const handleOpenNoti = () => {
    setIsExpandedCertificate(true);
  };
  return (
    <div className="fe__container">
         <div className="certificate__holder"> <p>Wonder how I obtained those stacks? Check my </p>
        <button className="licenseButton" onClick={handleOpenNoti}>
          CERTIFICATE
        </button>
      </div>
      {isExpandedCertificate ? (
        <ExpandedCertificate
          setIsExpandedCertificate={setIsExpandedCertificate}
        />
      ) : (
        ""
      )}
      <div className="ele js__container">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
        <h3>Java SpringBoot</h3>
        <p>
          Core + OOP + Collections
          <br />
          Exception Handling 
          <br />
          Dependency Injection
          <br/>
          Spring MVC
          <br/>
          Spring Data JPA (Postgresql)
          <br />
          Spring Security: Author/Authentication
          <br />
          RestAPI
        </p>


      </div>
      <div className="ele js__container">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
        <h3>NodeJS</h3>
        <p>
          Core (async, event driven)
          <br />
          HTTP/HTTPs request
          <br />
          Express.js
          <br />
          Middleware
          <br />
          Depolyment (AWS)
        </p>
     
      </div>

    </div>
  );
};
