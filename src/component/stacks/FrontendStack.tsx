import { useState } from "react";
import "./style/frontendstack.scss";
import { ExpandedCertificate } from "../certificate/ExpandedCertificate";
export const FrontendStack = () => {
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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <h3>Typescript</h3>
        <p>
          Basic syntax & types
          <br />
          Type Inference
          <br />
          Advanced Types
          <br />
          Classes Interface and Enum
        </p>
      </div>
      <div className="ele js__container">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <h3>Javascript</h3>
        <p>
          DOM & Event
          <br />
          Async
          <br />
          ES6
          <br />
          Error Handling
          <br />
          Data Structures
          <br />
          Functional Programing
          <br />
          Browser Storage
        </p>
      </div>
      <div className="ele js__container">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        <h3>SaaS MUI CSS HTML</h3>
        <p>
          Sematic HTML
          <br />
          Forms & Inputs
          <br />
          Accessibility
          <br />
          HTML5 features (Canvas Video Audio)
          <br />
          Variables and Mixin
          <br />
          Imports
          <br />
          Nesting Selection
          <br />
          Responsive
        </p>
      </div>
      <div className="ele js__container">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
        <h3>ReactJs Redux-Toolkits</h3>
        <p>
          Functional Component
          <br />
          Component Lifecycle
          <br />
          React Core (Hooks HOC Props State Routing)
          <br />
          API interaction
          <br />
          UI Mockup (loading notifcation)
          <br />
          Redux Core (store action reducers)
          <br />
          Dispatch
          <br />
          Selectors
          <br />
          Manage actions & states with Redux
        </p>
      </div>

    </div>
  );
};
