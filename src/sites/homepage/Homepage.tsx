// style
import "./style/homepage.scss";
import "../../utils/style/scrollbar.scss";

import { Header } from "../../component/header/Header";
import { Switcher } from "../../component/switcher/Switcher";
import { useState } from "react";
import { Wrapper } from "../../component/wrapper/Wrapper";
import { About } from "../../component/about/About";
import { Experience } from "../../component/experience/Experience";

const switcherElements = [
  {
    name: "about",
    // icon: faCat as IconProp,
  },
  {
    name: "experience",
    // icon: faCat as IconProp,
  },
  {
    name: "projects",
    // icon: faCat as IconProp,
  },
  {
    name: "achievements",
  },
  {
    name: "gallery",
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
      </div>
    </div>
  );
};
