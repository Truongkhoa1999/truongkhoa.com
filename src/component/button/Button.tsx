import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type ButtonProps = {
  hyperLink: string;
  title: string;
  startIcon?: IconProp;
  onClick?: () => void;
};
const commonStyle = {
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
};
export function CustomButton({
  hyperLink,
  title,
  startIcon,
  onClick,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  if (hyperLink.length > 0) {
    return (
      <div
        style={{
          ...commonStyle,
          backgroundColor: isHovered ? "rgba(0,0,0,0.05)" : "transparent",
          cursor: isHovered ? "pointer" : "alias",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {startIcon ? (
          <FontAwesomeIcon
            style={{ marginRight: 4 }}
            icon={startIcon as IconProp}
          />
        ) : null}
        <a
          href={hyperLink}
          target="_blank"
          style={{
            color: "black",
          }}
        >
          {title}
        </a>
      </div>
    );
  }

  return (
    <button
      style={{
        ...commonStyle,
        backgroundColor: isHovered ? "rgba(0,0,0,0.05)" : "transparent",
        cursor: isHovered ? "pointer" : "alias",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {startIcon && <FontAwesomeIcon icon={startIcon} />}
      {title}
    </button>
  );
}
