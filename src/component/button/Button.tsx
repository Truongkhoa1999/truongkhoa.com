import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
  hyperLink: string;
  title: string;
  startIcon?: IconProp;
};

export function CustomButton({ hyperLink, title, startIcon }: ButtonProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 5,
        padding: "8px 16px",
        borderRadius: 8,
        border: "1px solid rgba(0,0,0,0.2)",
        textDecoration: "none",
        color: "black",
        fontWeight: 500,
        fontSize: 14,
        transition: "all 0.2s ease",
      }}
    >
      {startIcon ? (
        <FontAwesomeIcon
          style={{ marginRight: 4 }}
          icon={startIcon as IconProp}
        />
      ) : null}
      <a href={hyperLink} target="_blank">
        {title}
      </a>
    </div>
  );
}
