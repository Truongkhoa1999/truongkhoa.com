type ExpItemProps = {
  title: string;
  subtitle: string;
  descrption: string;
};
function ExpItem({ title, subtitle, descrption }: ExpItemProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <br />
      <p
        style={{
          margin: 0,
          maxWidth: "100%",
          overflowWrap: "anywhere",
          wordBreak: "break-word",
          hyphens: "auto",
        }}
      >
        {descrption}
      </p>
      <br />
      <hr />
    </div>
  );
}
const EXP = [
  {
    title: "Fullstack Developer - Frontend Focus",
    subtitle: "Happy Coding Oy,Finland",
    descrption:
      "Building production web and mobile applications for international clients across Finland and the Netherlands. Leading frontend development with React, Next.js, and React Native while contributing to backend services using Node.js, Firebase, and Java Spring. Key contributor to several shipped products including Bebop, a mobile audio messaging platform, and ODIN, a social media management system integrating AI features and multiple platform APIs. Designing scalable UI architecture, implementing RESTful APIs, integrating AI-assisted workflows, and delivering reliable software through agile development cycles.",
  },
  {
    title: "Fullstack trainee - full time",
    subtitle: "Integrify oy Finland",
    descrption:
      "Completed a full-time 6-month full-stack training program focused on modern web application development. Worked with Java Spring for backend services and React for frontend, and carried peers preview. Built a full-stack e-commerce web application: simulating a typical online shopping workflow. Hands on with user authentication, product browsing, cart management, and role-based administration features. The project involved deploying both frontend and backend services and integrating a PostgreSQL database.",
  },
];

export function Experience() {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        flexWrap: "wrap",
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
      }}
    >
      <h2>Professional Journey</h2>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {EXP.map((item) => (
          <ExpItem
            title={item.title}
            subtitle={item.subtitle}
            descrption={item.descrption}
          />
        ))}
      </div>
    </div>
  );
}
