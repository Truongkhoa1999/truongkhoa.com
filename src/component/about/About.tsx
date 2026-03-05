import { Chip } from "../header/Header";

export function About() {
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
      <h2>About Me</h2>
      <p
        style={{
          margin: 0,
          maxWidth: "100%",
          overflowWrap: "anywhere",
          wordBreak: "break-word",
          hyphens: "auto",
        }}
      >
        Frontend-focused software developer at Happy Coding with 3+ years of
        experience building web and mobile applications in Finland. I work
        primarily with React, Next.js, and React Native, while also contributing
        to backend systems with Node.js, Firebase, and Java Spring. I have
        delivered production products including Bebop, an audio messaging mobile
        app, and ODIN, a social media management platform integrating AI
        features and multiple platform APIs.
      </p>
      <p
        style={{
          margin: 0,
          maxWidth: "100%",
          overflowWrap: "anywhere",
          wordBreak: "break-word",
          hyphens: "auto",
        }}
      >
        Experienced in building scalable UIs, RESTful APIs, and integrating
        modern developer tooling such as Redux Toolkit, React Hook Form, Zod
        validation, and monitoring systems like Sentry. Previously led
        development for internal tools used by international clients in the
        Netherlands and Finland, ensuring product quality and delivery within
        agile sprint environments.
      </p>
      <hr />
      <h2>Core Values</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 10,
          flexWrap: "wrap",

          maxWidth: "100%",
          minWidth: 0,
        }}
      >
        <Chip bordered={true} text="Forward-thinking" />
        <Chip bordered={true} text="Builder-mindset" />
        <Chip bordered={true} text="Community-driven" />
        <Chip bordered={true} text="Simplicity-first" />
        <Chip bordered={true} text="Worklife-balance" />
      </div>
      <br />
      <h2>Current focus</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 10,

          flexWrap: "wrap",
          maxWidth: "100%",
          minWidth: 0,
        }}
      >
        <Chip bordered={true} text="AI-assistant" />
        <Chip bordered={true} text="App-performance" />
        <Chip bordered={true} text="User-experience" />
        <Chip bordered={true} text="Team-building" />
        <Chip bordered={true} text="Scalable-works" />
      </div>
    </div>
  );
}
