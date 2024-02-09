import {   useRef, useState } from "react";
import "./style/stacks.scss";
import { ExpandedCertificate } from "../certificate/ExpandedCertificate";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";



export const Stacks = () => {
const [isExpandedNotificationVisible, setIsExpandedNotificationVisible] = useState<boolean>(false)
const outputSlideDirection = useSelector((state: RootState) => state.slideAnimation.outputSlideDirection);

  const targetElementRef = useRef<HTMLDivElement>(null);
  const handleScrollToTarget = () => {
    if (targetElementRef.current) {
      targetElementRef.current.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
        inline: "nearest",
      });
    }
  };
  const handleSwitchNotificationStatus = () => {
    setIsExpandedNotificationVisible(true)
  }

  return (
    <div className={outputSlideDirection === 'sr'?"stack__container sr" : "stack__container sl" } >
      <div className="stack__group">
        <div onClick={handleScrollToTarget} className="stack__card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/thumbnail%2Ffe.svg?alt=media&token=ea6cda26-9960-40bd-bba7-bd795c58ef69"
            alt="1"
          />
          <h2>FRONTEND</h2>
          <p>Typescript, JavaScript, HTML SASS, ReactJS, Redux</p>
        </div>
        <div onClick={handleScrollToTarget} className="stack__card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/thumbnail%2Fbe.svg?alt=media&token=e7d4411e-55f0-473b-99e6-6ef79bd21df4"
            alt="1"
          />
          <h2>BACKEND</h2>
          <p>Java, C#, C++, PostgreSQL, MongoDB SpringBoot, ExpressJS </p>
        </div>
        <div onClick={handleScrollToTarget} className="stack__card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/thumbnail%2Fside.svg?alt=media&token=2e067cdf-a4de-4849-ae56-c8df357e924e"
            alt="1"
          />
          <h2>SIDE</h2>
          <p>AWS, Heroku, Netlify, Github, Docker</p>
        </div>{" "}
      </div>
      <div ref={targetElementRef} className="certificate__container">
        <p>It has been such a great tech-journey since 2021</p>
        <button onClick={handleSwitchNotificationStatus}>CERTIFICATE</button>
      </div>
      {
        isExpandedNotificationVisible? (<ExpandedCertificate setIsExpandedCertificate={setIsExpandedNotificationVisible} />) : ""
      }
    </div>
  );
};
