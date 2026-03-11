import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  if (hyperLink.length > 0) {
    return (
      <div style={commonStyle}>
        {startIcon ? (
          <FontAwesomeIcon
            style={{ marginRight: 4 }}
            icon={startIcon as IconProp}
          />
        ) : null}
        <a href={hyperLink} target="_blank" style={{
          color:'black'
        }}>
          {title}
        </a>
      </div>
    );
  }

  return (
    <button style={commonStyle} onClick={onClick}>
      {startIcon && <FontAwesomeIcon icon={startIcon} />}
      {title}
    </button>
  );
}
