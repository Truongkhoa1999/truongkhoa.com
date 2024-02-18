import { useRef, useState } from "react";
import "./style/stacks.scss";
import { ExpandedCertificate } from "../certificate/ExpandedCertificate";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Stacks = () => {
  const [isExpandedNotificationVisible, setIsExpandedNotificationVisible] =
    useState<boolean>(false);
  const outputSlideDirection = useSelector(
    (state: RootState) => state.slideAnimation.outputSlideDirection
  );

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
    setIsExpandedNotificationVisible(true);
  };

  return (
    <div
      className={
        outputSlideDirection === "sr"
          ? "stack__container sr"
          : "stack__container sl"
      }
    >
      <div className="stack__group">
        <div onClick={handleScrollToTarget} className="stack__card">
          <h2>FRONTEND</h2>
          <h3>Web UI Focus</h3>
          <ul>
            <li>Ready for script language (JavaScript/ TypeScript)</li>
            <li>
              Comprehensive with HTML DOM and popular styling languages and
              libraries. (CSS/SASS, MUI)
            </li>
            <li>
              Hands on with liable web develop frameworks and tools( ReactJS,
              Redux-Toolkits)
            </li>
          </ul>
        </div>
        <div onClick={handleScrollToTarget} className="stack__card">
          <h2>BACKEND</h2>
          <h3>OOP Focus</h3>
          <ul>
            <li>Comprehensive with OOP (Java Springboot, C#, C++)</li>
            <li>Ready for Web API HTTP request and Web Socket</li>
            <li>Experience with Express.Js system</li>
            <li>Integrate authenticate and authorization (JWT) </li>
            <li>Database manipulation and connection</li>
          </ul>
        </div>
        <div onClick={handleScrollToTarget} className="stack__card">
          <h2>DATABASE</h2>
          <h3>Basic Cloud Support</h3>
          <ul>
            <li>
              Ready for Table schema design of both non and relational database(
              Mongoose, PostgreSQL)
            </li>
            <li>Certified as a AWS practitioner </li>
          </ul>
        </div>{" "}
      </div>
      <div ref={targetElementRef} className="certificate__container">
        <p>It has been such a great tech-journey since 2021</p>
        <button onClick={handleSwitchNotificationStatus}>CERTIFICATE</button>
      </div>
      {isExpandedNotificationVisible ? (
        <ExpandedCertificate
          setIsExpandedCertificate={setIsExpandedNotificationVisible}
        />
      ) : (
        ""
      )}
    </div>
  );
};
