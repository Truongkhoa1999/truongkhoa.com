// style
import "./style/homepage.scss";
import "../../utils/style/scrollbar.scss";
import { faCat } from "@fortawesome/free-solid-svg-icons";

import { Header } from "../../component/header/Header";
import { Switcher } from "../../component/switcher/Switcher";
import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import { Footer } from "../../component/footer/Footer";
// interface NavProps {
//   about: boolean;
//   contact: boolean;
//   stacks: boolean;
//   resume: boolean;
//   portfolio: boolean;
// }
// type stateSwitcherType =
//   {
//     name: string;
//     icon?: IconProp | undefined
//   }
// ;

const switcherElements = [
  {
    name: "about",
    icon: faCat as IconProp,
  },
  {
    name: "experience",
    icon: faCat as IconProp,
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
      <Header />

      <Switcher
        stateSwitcher={switcherElements}
        onStateChange={handleSwitcherStateChanges}
      />

      {switchState == "about" && <body style={{ color: "red" }}>yes</body>}
    </div>
  );
};
