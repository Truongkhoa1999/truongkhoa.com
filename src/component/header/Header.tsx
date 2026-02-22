import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/header.scss";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const profileImg = "src/assets/gallery/ch.png";

export function Chip({
  text,
  bordered,
  icon,
}: {
  text: string;
  bordered?: boolean;
  icon?: IconProp;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        padding: "6px 12px",
        fontSize: "13px",
        fontWeight: 500,
        lineHeight: 1,

        borderRadius: "16px",
        whiteSpace: "nowrap",

        cursor: "default",
        userSelect: "none",
        transition: "background-color 0.2s ease, box-shadow 0.2s ease",

        border: bordered ? "1px solid rgba(0,0,0,0.23)" : "none",
        backgroundColor: bordered ? "transparent" : "rgba(0,0,0,0.08)",
        color: "rgba(0,0,0,0.87)",
      }}
    >
      {icon && (
        <FontAwesomeIcon style={{ marginRight: 4 }} icon={icon as IconProp} />
      )}
      <p>{text}</p>
    </div>
  );
}

export function Button() {}

export function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__profileImg">
          <img src={profileImg} alt="profile image" />
        </div>

        <div className="header__profileTxt">
          <h1>Khoa Truong</h1>
          <h3>Software developer</h3>
          <Chip bordered={true} text="Frontend" />
          <Chip bordered={true} text="Web/mobile app" />

          <Chip bordered={false} icon={faCat as IconProp} text="architect" />
        </div>
      </div>
    </div>
  );
}
