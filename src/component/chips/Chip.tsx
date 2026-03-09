import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ChipDefaultProps = {
  iconStart?: IconProp;
  iconEnd?: IconProp;
  title: string;
};

export function ChipDefault({ iconStart, iconEnd, title }: ChipDefaultProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
        color: "black",
      }}
    >
      {iconStart && (
        <FontAwesomeIcon
          style={{ marginRight: 4 }}
          icon={iconStart as IconProp}
        />
      )}
      <p>{title}</p>
      {iconStart && (
        <FontAwesomeIcon
          style={{ marginRight: 4 }}
          icon={iconEnd as IconProp}
        />
      )}
    </div>
  );
}
