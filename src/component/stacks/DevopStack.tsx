import { useState } from 'react';
import './style/frontendstack.scss'
import { ExpandedCertificate } from '../certificate/ExpandedCertificate';
export const DevopStack = () => {
    const [isExpandedCertificate, setIsExpandedCertificate] = useState(false);
    const handleOpenNoti = () => {
      setIsExpandedCertificate(true);
    };
    return (
        <div className='fe__container'>
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
            <div className='ele js__container'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" /> 
                <h3>Github Docker AWS</h3>
                <p>
                  CI/CD
                  <br />
                  Microservices
                </p>
            </div>
        </div>
    )
}