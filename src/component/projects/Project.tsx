import { Chip, ChipProps } from "../header/Header";
import { Wrapper } from "../wrapper/Wrapper";

type ProjetcItemProps = {
  title: string;
  subtitle: string;
  description: string;
  chips: ChipProps[];
  viewMore?: string;
};

export type ProjectProps = {
  chips: ProjetcItemProps[];
};

export function Projects({ chips }: ProjectProps) {
  return (
    <>
      {chips.map((item) => (
        <Wrapper key={item.title}>
          <div
            style={{
              color: "black",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <h2
              style={{
                margin: 0,
                maxWidth: "100%",
                overflowWrap: "anywhere",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              {item.title}
            </h2>
            <h3
              style={{
                margin: 0,
                maxWidth: "100%",
                overflowWrap: "anywhere",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              {item.subtitle}
            </h3>
            <p
              style={{
                margin: 0,
                maxWidth: "100%",
                overflowWrap: "anywhere",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              {item.description}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 5,
            }}
          >
            {item.chips.map((chip) => (
              <Chip
                key={chip.text}
                bordered={chip.bordered}
                text={chip.text}
                icon={chip.icon}
              />
            ))}
          </div>
          {item?.viewMore ? (
            <a
              href={item.viewMore}
              target="_blank"
              style={{
                display: "inline-block",
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
              View Products
            </a>
          ) : null}
        </Wrapper>
      ))}
    </>
  );
}
