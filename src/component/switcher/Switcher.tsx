import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SwitcherProps = {
  stateSwitcher: {
    name: string;
    icon?: IconProp;
  }[];
  onStateChange: (selectedState: string) => void;
};

export function Switcher({ stateSwitcher, onStateChange }: SwitcherProps) {
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {stateSwitcher.map((item) => (
        <div
          style={{
            width: "20px",
            border: "1px solid red",
          }}
          onClick={() => onStateChange(item.name)}
        >
          {item?.icon && (
            <FontAwesomeIcon
              style={{ marginRight: 4 }}
              icon={item?.icon as IconProp}
            />
          )}
          <body
            style={{
              color: "black",
            }}
          >
            {item?.name}
          </body>
        </div>
      ))}
    </div>
  );
}
