import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/switcher.scss";
import { useState } from "react";

type SwitcherProps = {
  stateSwitcher: {
    name: string;
    icon?: IconProp;
  }[];
  onStateChange: (selectedState: string) => void;
};

export function Switcher({ stateSwitcher, onStateChange }: SwitcherProps) {
  const [active, setActive] = useState<string>("About");

  return (
    <div>
      {stateSwitcher.map((item) => (
        <div
          className={`switcher__item ${
            active === item.name ? "switcher__item--active" : ""
          }`}
          onClick={() => {
            setActive(item.name);
            onStateChange(item.name);
          }}
        >
          {item?.icon && (
            <FontAwesomeIcon
              className="switcher__icon"
              style={{ marginRight: 4 }}
              icon={item?.icon as IconProp}
            />
          )}
          <body>{item?.name}</body>
        </div>
      ))}
    </div>
  );
}
