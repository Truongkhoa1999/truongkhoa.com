import { useState } from "react";
import "./style/frontendstack.scss";
import { ExpandedCertificate } from "../certificate/ExpandedCertificate";
export const CloudStack = () => {
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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
        <h3>Amazon Web Services</h3>
        <p>
          EC2 + EBS
          <br />
          Lambda
          <br />
          API Gateway
          <br />
          S3
          <br />
          RDS + DynamoDB
          <br />
          VPC
          <br />
          Iam
        </p>
      </div>
    
    </div>
  );
};
