import { useState } from "react";
import { ExpandedCertificate } from "../certificate/ExpandedCertificate";
import "./style/frontendstack.scss";
export const DatabaseStack = () => {
  const [isExpandedCertificate, setIsExpandedCertificate] = useState(false);
  const handleOpenNoti = () => {
    setIsExpandedCertificate(true);
  };
  return (
    <div className="fe__container">
      {isExpandedCertificate ? (
        <ExpandedCertificate
          setIsExpandedCertificate={setIsExpandedCertificate}
        />
      ) : (
        ""
      )}
      <div className="ele js__container">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
        <h3>Postgresql</h3>
        <p>
          SQL BASICS CRUD
          <br />
          Data Backups
          <br />
          Database mockup & RD designs
          <br />
          Security Authentication and Authorization
        </p>
      </div>
      <div className="ele js__container">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
        <h3>Mongodb</h3>
        <p>
          Document-Oriented
          <br />
          Json-like
          <br />
          CRUD
          <br />
          Schema
        </p>
      </div>
      <button className="licenseButton" onClick={handleOpenNoti}>
        CERTIFICATE
      </button>
    </div>
  );
};
