import "./style/contact.scss";

type ContactProps = {
  onToogle: (isOpened: boolean) => void;
};
export const Contact = ({ onToogle }: ContactProps) => {
  return (
    <div className="contact__container">
      <div>
        <button
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
            alignSelf: "flex-end",
            cursor: "pointer",
          }}
          onClick={() => {
            onToogle(false);
          }}
        >
          X
        </button>
      </div>

      <div className="generalInfo__container">
        <p>
          Welcome, leave me a message.
          {<br />}
          Thank you!
          {<br />}
          Location based Finnish time (UTC +2).
        </p>
      </div>
      <form action="https://formspree.io/f/mrgwyjbr" method="POST">
        <input
          type="email"
          id="fname"
          name="email"
          placeholder="Your email address"
          required={true}
        />
        <input
          required={true}
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <input
          required={true}
          type="text"
          name="message"
          placeholder="Your message"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
