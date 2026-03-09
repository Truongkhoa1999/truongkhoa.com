// style
import "./style/homepage.scss";
import "../../utils/style/scrollbar.scss";

import { Header } from "../../component/header/Header";
import { Switcher } from "../../component/switcher/Switcher";
import { useState } from "react";
import { Wrapper } from "../../component/wrapper/Wrapper";
import { About } from "../../component/about/About";
import { Experience } from "../../component/experience/Experience";
import { faReact, faNodeJs, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Projects } from "../../component/projects/Project";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Footer } from "../../component/footer/Footer";

const switcherElements = [
  {
    name: "about",
  },
  {
    name: "experience",
  },
  {
    name: "projects",
  },
  {
    name: "gallery",
  },
];

export const dummyProjects = [
  {
    title: "Social Media Scheduler",
    subtitle: "AI Powered Marketing Tool",
    description:
      "A platform that allows users to schedule and automate social media posts across multiple platforms with AI assistance.",
    chips: [
      { text: "React", bordered: false, icon: faReact as IconProp },
      { text: "Node.js", bordered: false, icon: faNodeJs as IconProp },
      { text: "PostgreSQL", bordered: true, icon: faDatabase as IconProp },
    ],
  },
  {
    title: "Ecommerce Analytics Dashboard",
    subtitle: "Business Intelligence Tool",
    description:
      "A dashboard that helps ecommerce businesses track sales, campaigns, and marketing performance.",
    chips: [
      { text: "Next.js", bordered: false, icon: faReact },
      { text: "TypeScript", bordered: true, icon: faJs },
      { text: "Analytics", bordered: true },
    ],
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Branding",
    description:
      "A personal portfolio website showcasing projects, experience, and skills.",
    chips: [
      { text: "React", bordered: false, icon: faReact },
      { text: "CSS", bordered: true },
      { text: "UI Design", bordered: true },
    ],
  },
];

export const projects = [
  {
    title: "Bebop",
    subtitle: "Audio Messaging Mobile App",
    description:
      "A voice-sharing social mobile app where users can record, edit, and share personal audio messages with friends while maintaining strong privacy protection. Built core features including authentication, microphone and storage access, push notifications, localization, and app performance optimization.",
    chips: [
      { text: "React Native", bordered: false, icon: faReact as IconProp },
      { text: "Firebase", bordered: false, icon: faDatabase as IconProp },
      { text: "TypeScript", bordered: true },
      { text: "Push Notifications", bordered: true },
    ],
    viewMore: "https://joinbebop.com/",
  },
  {
    title: "ODIN",
    subtitle: "AI-Powered Social Media Web Platform",
    description:
      "Contributed to an AI-powered social media management platform. Worked on code refactoring, authentication setup, API integrations, and frontend architecture using Next.js. Supported backend integrations with Java Spring and implemented scalable patterns for social media post processing.",
    chips: [
      { text: "Next.js", bordered: false, icon: faReact as IconProp },
      { text: "Node.js", bordered: false, icon: faNodeJs as IconProp },
      { text: "PostgreSQL", bordered: true, icon: faDatabase as IconProp },
      { text: "Java Spring", bordered: true },
    ],
    viewMore: "https://nordhub.fi/en",
  },
  {
    title: "Naily",
    subtitle: "Client Web Application (Netherlands)",
    description:
      "Led frontend development for a client project, ensuring code quality, guiding developers in technical decisions, and managing deployment. Implemented authentication, admin-protected pages, and real-time database features while coordinating delivery and client handover.",
    chips: [
      { text: "Next.js", bordered: false, icon: faReact as IconProp },
      { text: "Firebase", bordered: false, icon: faDatabase as IconProp },
      { text: "Node.js", bordered: true, icon: faNodeJs as IconProp },
      { text: "Real-time DB", bordered: true },
    ],
  },
];

export const Homepage = () => {
  const [switchState, setSwitchState] = useState<string>(
    switcherElements[0].name,
  );

  const handleSwitcherStateChanges = (selectedSwitcherElement: string) => {
    setSwitchState(selectedSwitcherElement);
  };

  return (
    <div className="homepage__container">
      <div className="homepage__inner">
        <Header />

        <Switcher
          stateSwitcher={switcherElements}
          onStateChange={handleSwitcherStateChanges}
        />
        {switchState === "about" ? (
          <Wrapper>
            <About />
          </Wrapper>
        ) : null}
        {switchState === "experience" ? (
          <Wrapper>
            <Experience />
          </Wrapper>
        ) : null}
        {switchState === "projects" ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 50,
            }}
          >
            <Projects chips={projects} />
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};
