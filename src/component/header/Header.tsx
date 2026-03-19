import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/header.scss";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ChipDefault } from "../chips/Chip";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "../button/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

export type ChipProps = {
  text: string;
  bordered?: boolean;
  icon?: IconProp;
};
export function Chip({ text, bordered, icon }: ChipProps) {
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

type HeaderProps = {
  onClick: (a: boolean) => void;
};
export function Header({ onClick }: HeaderProps) {
  return (
    <div className="header">
      <div className="header__profileImg">
        <img src="/profileImg.png" alt="profile image" />
      </div>

      <div className="header__profileTxt">
        <h1>Khoa Truong</h1>
        <h3>Software developer • Frontend Focus</h3>
        <h3>Business Information Technology • Haaga-helia</h3>

        <div className="chips">
          <Chip bordered={true} text="Frontend" />
          <Chip bordered={true} text="Web/mobile app" />
          <Chip bordered={false} icon={faCat as IconProp} text="architect" />
        </div>
        <div
          className="'chips__default"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <ChipDefault
            iconStart={faLocationDot as IconProp}
            title="Helsinki, Finland 🇫🇮"
          />
          <ChipDefault
            iconStart={faBriefcase as IconProp}
            title="Software developer at Happy Coding"
          />
        </div>
        <div className="button__contact">
          <CustomButton
            hyperLink=""
            title="contact"
            startIcon={faBriefcase as IconProp}
            onClick={() => onClick(true)}
          />
          <CustomButton
            hyperLink="https://github.com/Truongkhoa1999"
            title="Git"
            startIcon={faGithub as IconProp}
          />
          <CustomButton
            hyperLink="https://www.linkedin.com/in/khoa-truong-010999/"
            title="LinkedIn"
            startIcon={faLinkedin as IconProp}
          />
          <CustomButton
            hyperLink="https://www.credential.net/profile/truongkhoa435708/wallet"
            title="Certificates"
            startIcon={faCertificate as IconProp}
          />
        </div>
      </div>
    </div>
  );
}
